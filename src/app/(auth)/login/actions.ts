"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/client";
import { stat } from "fs";
import useAppContext from "@/context";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = await createClient();

  const { isUserLoggedIn, setIsUserLoggedIn } = useAppContext();

  const credentials = {
    email: email,
    password: password,
  };

  const { error, data } = await supabase.auth.signInWithPassword(credentials);

  if (error) {
    redirect("/error");
  }
  if (data) {
    setIsUserLoggedIn(true);
  }
  revalidatePath("/", "layout");
  redirect("/profile");
}

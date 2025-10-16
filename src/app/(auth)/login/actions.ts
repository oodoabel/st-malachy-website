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

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const credentials = {
    email: email,
    password: password,
  };

  const { error, data } = await supabase.auth.signInWithPassword(credentials);

  if (error) {
    redirect("/error");
  }
  console.log(data);

  revalidatePath("/", "layout");
  redirect("/profile");
}

// export async function signup(formData: FormData) {
//   const supabase = await createClient();

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//   };

//   const { error } = await supabase.auth.signUp(data);

//   if (error) {
//     redirect("/error");
//   }

//   revalidatePath("/", "layout");
//   redirect("/");
// }

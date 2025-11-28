import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  const email = url.searchParams.get("email");

  const prisma = new PrismaClient();
  try {
    let result;
    if (id) {
      result = await prisma.profile.findUnique({ where: { id } });
    } else if (email) {
      result = await prisma.profile.findUnique({ where: { email } });
    } else {
      // caution: returning all records in production may be unsafe
      result = await prisma.profile.findMany({ take: 100 });
    }
    return NextResponse.json(result);
  } catch (err) {
    console.error("GET /api/profile error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  const prisma = new PrismaClient();

  try {
    const {
      id,
      email,
      full_name,
      phone,
      address,
      department,
      forum,
      level,
      paymentStatus,
    } = body;

    const result = await prisma.profile.upsert({
      where: { email },
      create: {
        id,
        email,
        full_name,
        phone,
        address,
        department,
        forum,
        level,
        paymentStatus,
      },
      update: {
        email,
        full_name,
        phone,
        address,
        department,
        forum,
        level,
        paymentStatus,
      },
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

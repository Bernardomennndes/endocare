"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function getExams() {
  const session = await auth();

  if (!session?.user.role || !session?.user.id)
    throw new Error("Usuário não autenticado");

  const exams = db.exam.findMany({
    where: {
      userId: session.user.role === "USER" ? session.user.id : undefined,
    },
  });

  return exams;
}

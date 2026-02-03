import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { cache } from "react";
import { prisma } from "../../../lib/prisma";

export const getSession = cache(async () => {
  const session = await auth();
  return session;
});

export const getUsername = async (): Promise<string | null> => {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect("/login");
  const email = user.email;
  if (!email) redirect("/login");
  const userRecord = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return userRecord?.username ?? null;
};

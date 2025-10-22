import React from "react";
import Login from "@/components/Login";
import { getSession } from "@/app/api/getSession";
import connectDb from "../../../../lib/mongo_db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getSession();
  const user = session?.user;

  if (user) {
    const { email } = user;
    await connectDb();
    const result = await User.findOne({ email }).select("username");

    if (result) {
      redirect(`/profile`);
    }
  }

  return <Login />;
}

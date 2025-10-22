import React from "react";
import { getSession } from "@/app/api/getSession";
import connectDb from "../../../../lib/mongo_db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import SignUPP from "@/components/SignUPP";

export default async function SignUpPage() {
  const session = await getSession();
  const user = session?.user;

  if (user) {
    const { email } = user;
    await connectDb();
    const result = await User.findOne({ email }).select("username");

    if (result) {
      redirect(`/profile/${result.username}`);
    }
  }

  return <SignUPP />;
}

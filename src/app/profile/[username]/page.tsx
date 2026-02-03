import React from "react";
import { redirect } from "next/navigation";
import { signOut } from "@/auth";
import { getSession } from "@/app/api/getSession";
import connectDb from "../../../../lib/mongo_db";
import { User } from "@/models/User";

async function handleSignOut() {
  "use server"
   await signOut();
  redirect("/login");
}

const HomeProfile = async ({
  params,
}: {
  params?: Promise<{ username: string }>;
}) => {
  const resolvedParams = await params; // resolve the Promise
  const username = resolvedParams?.username;

  const session = await getSession();
  const user = session?.user;

  if (!user || !username) redirect("/login");
  
  await connectDb();
  const dbUser = await User.findOne({ username });

  if (!dbUser) redirect("/login");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 text-purple-400">
        Welcome, {dbUser.name || username}!
      </h1>

      <form action={handleSignOut}>
        <button
          type="submit"
          className="px-8 py-4 bg-teal-300 text-purple-700 text-2xl font-bold rounded-lg hover:bg-teal-400 transition"
        >
          Log Out
        </button>
      </form>
    </div>
  );
};

export default HomeProfile;

import React from 'react';
import connectDb from '../../../lib/mongo_db';
import { User } from '@/models/User';
import { redirect } from 'next/navigation';
import { getSession } from '../api/getSession';

export default async function ProfilePage() {
  const session = await getSession();
  const user = session?.user;

  if (user) {
    const { email } = user;
    await connectDb();
    const result = await User.findOne({ email }).select("username");
    if (result) {
      redirect(`/profile/${result.username}`);
    }
  } else {
    redirect("/login"); // make sure you add the leading slash
  }

  return <div>Redirecting you…</div>;
}

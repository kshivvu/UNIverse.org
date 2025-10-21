import React from 'react'
import connectDb from '../../../lib/mongo_db';
import { User } from '@/models/User';
import { redirect } from 'next/navigation';
import { getSession } from '../api/getSession';

const Profile =async () => {
    const session = await getSession();
  const user=session?.user;
  
  if(user)
  {
    const {email}=user;
    await connectDb();
    const result=await User.findOne({email}).select("username")
    if(result)
    {
      redirect(`/profile/${result.username}`)
    }
    
  }else{
    redirect("login")
  }
  return (
    <div>Redirecting You....
        
    </div>
  )
}

export default Profile
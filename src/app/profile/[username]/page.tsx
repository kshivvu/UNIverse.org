import { getSession } from '@/app/api/getSession';
import React from 'react'
import connectDb from '../../../../lib/mongo_db';
import { User } from '@/models/User';
import { redirect } from 'next/navigation';

const homeProfile = async({params}:{params:{username:string}}) => {
    const {username} =params;
    const session = await getSession();
      const user=session?.user;
      
      if(!user)
      {
        redirect("/login")
        
        
      }
  return (
    <div> {username}</div>
  )
}

export default homeProfile
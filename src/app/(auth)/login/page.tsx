import React from "react";
import Login from "@/components/login"
import { getSession } from "@/app/api/getSession";
import connectDb from "../../../../lib/mongo_db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";




const login =  async() => {
  
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
      
    }
  
  return (
    <Login/>
  );
};

export default login;

"use server";

import { redirect } from "next/navigation";
import connectDb from "../lib/mongo_db";
import { User } from "@/models/User";
import { hash } from "bcryptjs";
import { signIn } from "@/auth";

const loginUser = async(prevState :any , formdata:FormData)=>{
    const email=formdata.get("email");
    const password=formdata.get("password");
    if(!email||!password)
    {
        return {error: "please provide all the credentials"};
    }
    try {
        await signIn("credentials",{
        redirect:false,
        callbackUrl:"/",
        email,
        password,

    })
    
    
    
    } catch (error) {
      return    { error: "invalid user or password" };
    }
    await connectDb();
    const user = await User.findOne({ email }).select("username");
    const username = user?.username;
    if(username)
    {
        redirect(`/profile`);
    }
}

const registerUser = async (prevState: any, formdata: FormData) => {
  const fullName = formdata.get("name") as string;
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;
  if (!fullName || !email || !password) {
    return { error: "Please fill all fields." };
  }
  await connectDb();
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return { error: "user already exists" };
  }

  const Id = email.split("@")[0] + "@uni";
  const username = email.split("@")[0];
  const passwordHash = await hash(password, 15);
  await User.create({
    uniId: Id,
    username,
    name: fullName,
    email,
    passwordHash,
  });
  redirect("/login");
};
const github_login = async()=>{
    const url=await signIn("github",{
        redirectTo:"/profile",

    })
    redirect(url);
}
const google_login = async()=>{
    const url=await signIn("google",{
        redirectTo:"/profile",

    })
    redirect(url);
}

export {google_login, github_login,registerUser, loginUser };

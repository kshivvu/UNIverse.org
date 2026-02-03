import { prisma } from "../../../lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
    const names:string[]=users.map((user)=>user.name)
    console.log(names)
    return new Response(JSON.stringify(users));
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}

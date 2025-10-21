import connectDb from "../../../lib/mongo_db";

const checkUsername = async(username:string):Promise<boolean>=>{
    await connectDb();
    
	return true;
}
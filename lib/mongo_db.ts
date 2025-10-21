import mongoose from "mongoose";
const connectDb = async () => {
  try {
    const mongo_URI = process.env.MONGO_URI;
    if (!mongo_URI) throw new Error('MONGO_URI environment variable is not defined');

    await mongoose.connect(mongo_URI);
  } catch (error: any) {
    console.error(`Error ${error.message}`);
    process.exit(1);
  }
};



export default connectDb;
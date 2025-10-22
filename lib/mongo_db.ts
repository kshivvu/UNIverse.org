import mongoose from "mongoose";

const connectDb = async (): Promise<void> => {
  try {
    const mongo_URI = process.env.MONGO_URI;
    if (!mongo_URI) throw new Error("MONGO_URI environment variable is not defined");

    await mongoose.connect(mongo_URI);
    console.log("✅ MongoDB Connected");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`❌ MongoDB Connection Error: ${error.message}`);
    } else {
      console.error("❌ Unknown error occurred while connecting to MongoDB", error);
    }
    process.exit(1);
  }
};

export default connectDb;

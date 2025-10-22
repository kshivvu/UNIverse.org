import mongoose from "mongoose";

declare global {
  // prevent multiple mongoose connections in dev
  var mongooseCache: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
}

const connectDb = async (): Promise<typeof mongoose> => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI environment variable is not defined");
  }

  const mongo_URI = process.env.MONGO_URI;

  if (global.mongooseCache?.conn) {
    return global.mongooseCache.conn;
  }

  if (!global.mongooseCache) {
    global.mongooseCache = { conn: null, promise: null };
  }

  if (!global.mongooseCache.promise) {
    global.mongooseCache.promise = mongoose
      .connect(mongo_URI)
      .then((mongooseInstance) => {
        return mongooseInstance;
      });
  }

  global.mongooseCache.conn = await global.mongooseCache.promise;
  console.log("✅ MongoDB Connected");
  return global.mongooseCache.conn;
};

export default connectDb;

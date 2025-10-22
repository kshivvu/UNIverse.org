import mongoose, { Mongoose } from "mongoose";

declare global {
  var mongooseCache: { conn: Mongoose | null; promise: Promise<Mongoose> | null } | undefined;
}

const MONGODB_URI = process.env.MONGO_URI!;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define the MONGODB_URI environment variable inside .env.local");
}

// Global cache object to store connection across serverless reloads
let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

export default async function connectDb() {
  if (cached && cached.conn) return cached.conn; // Return existing connection if found

  if (cached && !cached.promise) {
    const opts = {
      bufferCommands: false, // Prevent Mongoose from buffering model commands
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => mongoose);
  }

  if (!cached) {
    throw new Error("Cached connection is undefined");
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

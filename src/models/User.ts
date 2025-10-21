// src/models/User.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  uniId: string;
  name: string;
  username: string;
  email: string;
  passwordHash?: string | null;
  authProviderId: string | null;
  emailVerified?: Date | null;
  avatarUrl?: string | null;
  bio?: string | null;
  college?: mongoose.Types.ObjectId | null;
  role: "STUDENT" | "ALUMNI" | "FACULTY" | "COLLEGE_ADMIN" | "SUPER_ADMIN";
  verified: boolean;
  year?: string | null;
  branch?: string | null;
  interests?: string[]; // tags/keywords
  closeFriends?: mongoose.Types.ObjectId[]; // user ids
  followers?: mongoose.Types.ObjectId[]; // user ids
  following?: mongoose.Types.ObjectId[]; // user ids
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    uniId: { type: String, unique: true, index: true },
    name: { type: String, required: true, index: true },
    username: { type: String, required: true, unique: true, index: true },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String },
    emailVerified: { type: Date, default: null },
    authProviderId: {type:String},
    avatarUrl: { type: String, default: null },
    bio: { type: String, default: "" },
    college: { type: Schema.Types.ObjectId, ref: "College", default: null, index: true },
    role: { type: String, enum: ["STUDENT", "ALUMNI", "FACULTY", "COLLEGE_ADMIN", "SUPER_ADMIN"], default: "STUDENT" },
    verified: { type: Boolean, default: false, index: true },
    year: { type: String, default: null },
    branch: { type: String, default: null },
    interests: { type: [String], default: [] },
    closeFriends: [{ type: Schema.Types.ObjectId, ref: "User" }],
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    
  },
  { timestamps: true }
);


// Text index for search by name/username/bio
UserSchema.index({ name: "text", username: "text", bio: "text" });



export const User:Model<IUser>= mongoose.models.User || mongoose.model<IUser>("User", UserSchema);




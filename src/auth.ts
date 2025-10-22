import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDb from "../lib/mongo_db";
import { User } from "./models/User";
import { compare } from "bcryptjs";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Credentials({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;
        if (!email || !password) {
          throw new CredentialsSignin("please provide your email and password");
        }
        await connectDb();
        const user = await User.findOne({ email }).select(
          "+password +role +username +email "
        );
        if (!user) {
          throw new Error("invalid email or password");
        }
        if (!user.passwordHash) {
          throw new Error("invalid email or password");
        }
        const isMatched = await compare(password, user.passwordHash);
        if (!isMatched) {
          throw new Error("invalid email or password");
        }
        // Ensure id is a string
        const userdata = {
          name: user.name,
          email: user.email,
          id: user._id ? user._id.toString() : "", // Provide a default value
          uniId: user.uniId,
          role: user.role,
          username: user.username,
        };
        console.log(userdata);

        return userdata;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.role = token.role as string;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "STUDENT";
      }
      return token;
    },

    async signIn({ user, account }) {
      try {
        // 🟩 For Google & GitHub OAuth logins
        if (account?.provider === "google" || account?.provider === "github") {
          await connectDb();
          const { email, name, image, id } = user;
          if (!email) return false; // must have an email to continue

          const existingUser = await User.findOne({ email });

          if (!existingUser) {
            await User.create({
              email,
              name,
              avatarUrl: image,
              authProviderId: id,
              role: "STUDENT",
              username: email.split("@")[0],
              uniId: email.split("@")[0] + "@uni",
            });
          }

          return true; // ✅ Important! Allow sign-in
        }

        // 🟩 For Credentials login
        if (account?.provider === "credentials") {
          return true;
        }

        return true; // fallback for unexpected cases
      } catch (error) {
        console.error("Sign-in error:", error);
        return false;
      }
    },
  },
  pages: {
    signIn: "/login",
  },
});

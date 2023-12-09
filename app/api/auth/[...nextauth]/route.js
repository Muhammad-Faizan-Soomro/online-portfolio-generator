import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { User } from "@/app/models/user";
import { ConnectDB } from "@/app/db/db";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { username, password } = credentials;
        console.log(credentials);

        try {
          await ConnectDB();
          const user = await User.findOne({ username });
          if (!user) {
            return null;
          }

          const passmatch = await bcrypt.compare(password, user.password);
          if (!passmatch) {
            return null;
          }
          return user;
          return { ...user, username: user.username };
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

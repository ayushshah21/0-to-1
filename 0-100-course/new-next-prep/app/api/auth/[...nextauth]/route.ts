import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from 'bcrypt';
import { authOptions } from "@/app/api/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
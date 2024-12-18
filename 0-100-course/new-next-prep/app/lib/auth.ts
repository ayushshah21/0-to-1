
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { AuthOptions } from "next-auth";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "johndoe@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const { email, password } = credentials || {};
                    if (!email || !password) {
                        return null;  // Return null if credentials are missing
                    }
                    const user = await prisma.user.findUnique({
                        where: {
                            email
                        }
                    });
                    if (!user) return null;
                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (!passwordMatch) return null;
                    console.log(user);
                    return user;
                }
                catch (err) {
                    console.log(err);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email;
                token.name = user.name;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.email = token.email;
                session.user.name = token.name;
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET || "",
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signin"
    },
    session: {
        strategy: "jwt"
    }
}
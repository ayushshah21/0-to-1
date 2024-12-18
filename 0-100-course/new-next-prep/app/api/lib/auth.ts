import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { AuthOptions } from "next-auth";
import bcrypt from 'bcrypt';
import { DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();
declare module "next-auth" {
    interface Session {
        user: {
            id?: string;
        } & DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: string;
        email?: string;
        name?: string;
    }
}

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "johndoe@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email }
                });

                if (!user || !user.password) return null;
                const passwordMatch = await bcrypt.compare(credentials.password, user.password);
                if (!passwordMatch) return null;

                return user;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],


    secret: process.env.NEXTAUTH_SECRET || "",
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                await prisma.user.upsert({
                    where: { email: user.email! },
                    create: {
                        email: user.email!,
                        name: user.name!,
                        password: null
                    },
                    update: {}
                });
                return true;
            }
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
            }
            return session;
        },
    },
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signin"
    },
    session: {
        strategy: "jwt"
    }
}
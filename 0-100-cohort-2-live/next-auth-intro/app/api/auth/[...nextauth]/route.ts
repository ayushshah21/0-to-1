import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'Email', type: 'text', placeholder: 'Email' },
                password: { label: 'password', type: 'password', placeholder: 'password' }
            },
                async authorize(credentials: any) {
                    console.log(credentials);
                    
                return {
                    id: "user1",
                    name: "Ayush Shah",
                    email: "aashah2003@gmail.com"
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }


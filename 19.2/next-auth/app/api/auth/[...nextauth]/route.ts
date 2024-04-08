import { RequestInternal, Awaitable, User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "sagardxd" },
                password: { label: "Password", type: "password", placeholder:"123456" }
            },
            async authorize(credentials: any) {

                console.log(credentials)
                //vaildation 
                // like prisma findone
                return {
                    id: "user1"
                }   
            }
        })

    ]
})

export const GET = handler;
export const POST = handler;
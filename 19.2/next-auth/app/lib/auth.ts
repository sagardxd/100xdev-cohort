import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH_CONFIG = {
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
                    id: "1",
                    name: "Sagardxd",
                    email: "sagardxd05@gmail.com"
                }   
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          }),
          GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
          })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: ({ session, token, user }: any) => {
            console.log(session)
            if (session && session.user){
                session.user.id = token.sub;
            }
            return session;
        }
    }
}
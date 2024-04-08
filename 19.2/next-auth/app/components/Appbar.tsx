"use client";

import { useRouter } from "next/navigation"
import{ signIn, signOut} from "next-auth/react"

export const Appbar = () => {
    const router = useRouter();
    return <div>
        <button onClick={() => {
            signIn();
        }}>Login</button>

<button onClick={() => {
            signOut()
        }}>Logout</button>
    </div>
}
"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Navbar } from "./components/Navbar";
export default function Home() {
  const session = useSession();
  return (
    <div>
      <Navbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
    </div>
  );
}

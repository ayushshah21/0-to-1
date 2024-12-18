import Navbar from "./components/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Navbar />
      {session ? JSON.stringify(session) : null}
    </>
  );
}

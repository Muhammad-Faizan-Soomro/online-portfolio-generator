import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Landingpage from "./components/Landingpage";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/home");
  }
  

  return (
    <>
     <Landingpage/>
    </>
  );
}

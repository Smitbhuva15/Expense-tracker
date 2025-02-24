import AddTransaction from "@/components/AddTransaction";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Home() {
  const user=await currentUser();
  if(!user){
    return <Guest/>
  }

  return (
    <main>
    <h1 className="text-3xl">{`welcome ${user?.firstName}`}</h1>
    <AddTransaction />
  </main>
  );
}

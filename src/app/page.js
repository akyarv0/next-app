import ClientCompanent from "@/components/ClientCompanent";
import ServerComponent from "@/components/ServerComponent";
import Image from "next/image";


export default function Home() {
  return (
    <main>

      <h1 className="text-3xl font-bold underline text-center" >Hello Next.js</h1>

      <ServerComponent />
      <ClientCompanent />
    

     
    </main>
  );
}

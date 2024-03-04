import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" mt-[100px]">
      <div className=" flex flex-col justify-center items-center mx-auto max-w-7xl gap-6">
        <h1 className="text-5xl font-semibold w-fit text-center ">
          Chat with Anyone, anywhere!
        </h1>
        <p className="w-fit text-sm text-center">
          You Speak your language, they speak their language.{" "}
          <span className="text-indigo-600">Let AI handle the translation</span>
        </p>
        <div className="flex gap-4 items-center">
          <Button className="bg-indigo-600 hover:bg-indigo-500 text-white"> Get started</Button>
          <Link href="/pricing" className="text-sm">
            View Pricing →
          </Link>
        </div>
      </div>
    </main>
  );
}

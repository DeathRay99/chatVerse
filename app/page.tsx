import { Button } from "@/components/ui/button";
import Link from "next/link";
import Title from "@/components/Title";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className=" mt-[100px]">
      <div className=" flex flex-col justify-center items-center mx-auto max-w-7xl gap-6">
        <Background />

        <Title />

        <p className="w-fit text-sm text-center select-none">
          You Speak your language, they speak their language.{" "}
          <span className="text-indigo-600">Let AI handle the translation</span>
        </p>
        <div className="flex gap-4 items-center relative">
          <Link href="/chat" className="text-sm">
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white ">
              Get Started
            </Button>
          </Link>
          <Link href="/pricing" className="text-sm">
            View Pricing →
          </Link>
        </div>
      </div>
    </main>
  );
}

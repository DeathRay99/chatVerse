import PricingCards from "@/components/PricingCards";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function PricingPage() {
  return (
    <div className=" mt-[80px] ">
      <div className=" flex flex-col justify-center items-center mx-auto max-w-7xl gap-6">
        <h1 className="text-5xl font-semibold w-fit text-center ">
          Unlock Premium Features, Elevate Your Experience!
        </h1>
        <p className="w-[70%] text-sm text-center">
          Upgrade to our premium subscription and access exclusive benefits.{" "}
          <span className="text-indigo-600">Upgrade today and enjoy the full spectrum of features!</span>
        </p>
      </div>
      <PricingCards redirect={true}/>
    </div>
  );
}

export default PricingPage;

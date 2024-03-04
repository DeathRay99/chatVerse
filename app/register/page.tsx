import { authOptions } from "@/auth";
import PricingCards from "@/components/PricingCards";
import { getServerSession } from "next-auth";

async function Register() {
  const session = await getServerSession(authOptions);
  return (
    <div className="mt-20">
      <div className=" flex flex-col justify-center items-center mx-auto max-w-7xl gap-6">
        <h1 className=" dark:text-red-200 text-5xl font-semibold w-fit text-center ">
          Let's handle your Membership {session?.user?.name?.split(" ")?.[0]}!
        </h1>
    
      </div>
      <PricingCards redirect={false}/>
    </div>
  );
}

export default Register;

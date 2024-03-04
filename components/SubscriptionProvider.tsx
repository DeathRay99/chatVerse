"use client"

import { db } from "@/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react"
import { useEffect } from "react";

function SubscriptionProvider() {
    const{data:session}=useSession();
    
    useEffect(()=>{
        if(!session)
        return;
        return onSnapshot(collection(db,"customers",session?.user.id,"subscriptions"), (snapshot)=>{
            if(!snapshot.empty){
                console.log("User has NO subscription");
                //set no subscription
                return;
            }else{
                console.log("user has subscription");

                //set subcription
            }

        })
    },[session]);
  return (
    <div>SubscriptionProvider</div>
  )
}

export default SubscriptionProvider
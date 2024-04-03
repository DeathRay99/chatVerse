"use client";

import { db } from "@/firebase";
import { useSubscriptionStore } from "@/store/store";
import { error } from "console";
import { collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function SubscriptionProvider({children}:{children:React.ReactNode}) {
  const { data: session } = useSession();
  const setSubscription = useSubscriptionStore(
    (state) => state.setSubscription
  );
  useEffect(() => {
    if (!session) return;
    return onSnapshot(
      collection(db, "customers", session?.user.id, "subscriptions"),
      (snapshot) => {
        if (snapshot.empty) {
          console.log("User has NO subscription");
          setSubscription(null);
          return;
        } else {
          console.log("user has subscription");
          setSubscription(snapshot.docs[0]?.data() as any);
        }
      },
      (error) => {
        console.log("Error getting document:", error);
      }
    );
  }, [session, setSubscription]);
  return <div>{children}</div>;
}

export default SubscriptionProvider;

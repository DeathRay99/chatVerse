"use client";

import { signInWithCustomToken } from "firebase/auth/cordova";
import { Session } from "inspector";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { auth } from "@/firebase";
async function syncFirebaseAuth(session: Session) {
  if (session && session.firebaseToken) {
    try {
      await signInWithCustomToken(auth, session.firebaseToken);
    } catch (error) {
      console.error("error signing in with custom token", error);
    }
  } else {
    auth.signOut();
  }
}
function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  useEffect(() => {
    if (!session) return;
    syncFirebaseAuth(session);
  }, [session]);
  return <>{children}</>;
}

export default FirebaseAuthProvider;

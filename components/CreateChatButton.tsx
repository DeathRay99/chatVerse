"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { MessageSquarePlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useSubscriptionStore } from "@/store/store";
import { useToast } from "./ui/use-toast";
import { v4 as uuidv4 } from "uuid";
import { getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import {
  addChatRef,
  chatMembersCollectionGroupRef,
} from "@/lib/converters/ChatMembers";
import { ToastAction } from "./ui/toast";
function CreateChatButton({ isLarge }: { isLarge?: boolean }) {
  const router = useRouter();
  const { data: session } = useSession();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const subscription = useSubscriptionStore((state) => state.subscription);
  const createNewChat = async () => {
    if (!session?.user.id) return;
    setLoading(true);

    toast({
      title: "Creating new Chat....",
      description: "Hold tight while we create your new chat...",
      duration: 3000,
    });
    //check if user is PRO and limit them creating a new chat
    const noOfChats = (
      await getDocs(chatMembersCollectionGroupRef(session.user.id))
    ).docs.map((doc) => doc.data()).length;

    //check if user is about to exceed free plan which is 3 chats
    const isPro =
      subscription?.role === "pro" && subscription.status === "active";
    if (!isPro && noOfChats >= 3) {
      toast({
        title: "Free plan limit exceeded",
        description:
          "you've exceeded the limit of chats for FREE plan. Please upgrade to PRO to continue adding users to chats!",
        variant: "destructive",
        action: (
          <ToastAction
            altText="Upgrade"
            onClick={() => router.push("/register")}
          >
            Upgrade to PRO
          </ToastAction>
        ),
      });
      return;
    }
    const chatId = uuidv4();

    try {
      await setDoc(addChatRef(chatId, session.user.id), {
        userId: session.user.id!,
        email: session.user.email!,
        timestamp: serverTimestamp(),
        isAdmin: true,
        chatId: chatId,
        image: session.user.image || "",
      });

      toast({
        title: "Success",
        description: "Your chat has been created!",
        className: "bg-green-600 text-white",
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error creating your chat!",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }

    router.push(`/chat/${chatId}`);
  };
  if (isLarge) {
    return (
      <div>
        <Button variant={"default"} onClick={createNewChat}>
          {loading ? "Loading..." : "Create a New Chat"}
        </Button>
      </div>
    );
  }
  return (
    <Button onClick={createNewChat} variant={"ghost"}>
      <MessageSquarePlusIcon />
    </Button>
  );
}

export default CreateChatButton;

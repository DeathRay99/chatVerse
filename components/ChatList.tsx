
import { authOptions } from "@/auth";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { chatMembersCollectionGroupRef } from "@/lib/converters/ChatMembers";
import React from "react";
import ChatListRows from "./ChatListRows";

async function ChatList() {
  const session = await getServerSession(authOptions);
  const chatSnapshot = await getDocs(
    chatMembersCollectionGroupRef(session?.user.id!)
  );
  const initialChats = chatSnapshot.docs.map((doc) => ({
    ...doc.data(),
    timestamp: null,
  }));
  return <ChatListRows initialChats={initialChats} />;
}

export default ChatList;

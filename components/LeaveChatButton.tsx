"use client";
import React from "react";
import { chatMembersRef } from "@/lib/converters/ChatMembers";
import { Button } from "@/components/ui/button";
import { deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import useAdminId from "@/hooks/useAdminId";
function LeaveChatButton({
  chatId,
  userId,
}: {
  chatId: string;
  userId: string;
}) {
  const { data: session } = useSession();
  const adminId = useAdminId({ chatId });
  const router = useRouter();
  const handleLeave = async () => {
    try {
      // Reference to the chat member document
      const leavingMemberRef = doc(chatMembersRef(chatId), userId);

      // Delete the chat member document
      await deleteDoc(leavingMemberRef);

      console.log(`User ${userId} has left the chat room ${chatId}`);
      router.replace(`/chat`);
    } catch (error) {
      console.error("Error leaving chat room:", error);
    }
  };
  return (
    adminId !== session?.user.id && (
      <div className="flex justify-end space-x-2 m-5 mb-0">
        <Button
          variant="destructive"
          className="w-[170px]"
          onClick={handleLeave}
        >
          Leave chatroom
        </Button>
      </div>
    )
  );
}

export default LeaveChatButton;

import { realtimeDb } from "@/configs/firebase"
import { off, onValue, push, ref, set, update } from "firebase/database"
import { useEffect, useState } from "react";

export const sendFirebaseMessage = async ({
    roomId, senderId, senderName, text, }) => {

    const mesageRef = push(ref(realtimeDb, `messages/${roomId}`));
    await set(mesageRef, {
        senderId,
        senderName,
        text,
        createdAt: Date.now(),
        read: false,
    });

    if (!roomId) throw new Error("Thiếu roomId");
    if (!senderId) throw new Error("Thiếu senderId");

    await update(ref(realtimeDb, `rooms/${roomId}`), {
        lastMessage: text,
        lastMessageAt: Date.now(),
    });

};

export const listenFirebaseMessages = (roomId, callback) => {
    const mesageRef = ref(realtimeDb, `messages/${roomId}`);

    onValue(mesageRef, (snapshot) => {
        const value = snapshot.val() || {};

        const messages = Object.entries(value).map(([id, data]) => ({
            id,
            ...data,
        }));

        messages.sort((a, b) => a.createdAt - b.createdAt);

        callback(messages);
    });
    return () => off(mesageRef);
}

export const useChatMessages = (roomId, enabled = true) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!roomId || !enabled)
            return;

        const unsubcribe = listenFirebaseMessages(roomId, setMessages);

        return unsubcribe;
    }, [roomId, enabled]);

    return {
        messages,
    };
}
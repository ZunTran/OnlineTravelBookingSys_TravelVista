import Loading from "@/components/common/Loading";
import Message from "@/components/common/Message";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import DetailHeader from "@/components/user/detail/review/DetailHeader";
import { useAuth } from "@/hooks/auth/use-auth";
import { useChatRooms } from "@/hooks/chat/use-chat";
import { useFirebaseChatToken } from "@/hooks/chat/use-firebase-chat-token";
import {
    sendFirebaseMessage,
    useChatMessages,
} from "@/services/chat-message.service";
import { SendHorizontalIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const ChatRoomPage = () => {


    const { roomId } = useParams();

    const { user } = useAuth();
    const [text, setText] = useState("");
    const bottomRef = useRef(null);

    const {
        data: roomsData,
        isLoading: isRoomsLoading,
    } = useChatRooms();

    const rooms = roomsData?.data || [];

    const hasPermission = rooms.some(
        (room) => String(room.roomId) === String(roomId)
    );

    const { isReady, isLoading } = useFirebaseChatToken(true);
    const { messages } = useChatMessages(roomId, isReady);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    const handleSend = async () => {
        const value = text.trim();

        if (!value || !isReady || !user?.username) return;

        await sendFirebaseMessage({
            roomId,
            senderId: user.username,
            senderName: user.fullName,
            senderRole: user.roleName,
            text: value,
        });

        setText("");
    };


    if (!hasPermission) {
        return <Navigate to="/chat" replace />;
    }


    if (isLoading || isRoomsLoading) {
        return <Loading content="Đang tải..." />;
    }

    return (
        <section>
            <DetailHeader title={`Phòng chat #${roomId}`} />
            <Card className="mx-auto flex h-[calc(100vh-150px)] max-w-4xl flex-col overflow-hidden ">
                <div className="min-h-0 flex-1 overflow-y-auto space-y-2 bg-muted/40 p-4 m-3">
                    {messages.map((message) => (
                        <Message
                            key={message.id}
                            message={message}
                            currentUsername={user.username}
                        />
                    ))}

                    <div ref={bottomRef} />
                </div>

                <div className="shrink-0 border-t bg-white p-3">
                    <div className="flex items-center gap-2 px-3 py-2">
                        <Input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Nhập tin nhắn..."
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                        />

                        <Button
                            size="icon"
                            variant="outline"
                            className="rounded-full"
                            disabled={!text.trim() || !isReady}
                            onClick={handleSend}
                        >
                            <SendHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>
        </section>
    );
};

export default ChatRoomPage;
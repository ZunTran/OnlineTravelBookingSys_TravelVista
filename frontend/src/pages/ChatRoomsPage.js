import ChatListSkeleton from "@/components/common/skeleton/ChatListSkeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import DetailHeader from "@/components/user/detail/review/DetailHeader";
import { useAuth } from "@/hooks/auth/use-auth";
import { useChatRooms } from "@/hooks/chat/use-chat";
import { useNavigate } from "react-router-dom";

const ChatRoomsPage = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useChatRooms();

    const { user } = useAuth();

    const role = user?.roleName;
    const rooms = data?.data || [];

    if (isLoading)
        return (<ChatListSkeleton length={3} />);


    if (!rooms.length) {
        return (
            <Card className="p-10 text-center">
                <p className="text-muted-foreground">
                    Chưa có cuộc trò chuyện nào
                </p>
            </Card>
        );
    }

    const handleClick = (id) => {
        if (role === "PROVIDER") {
            navigate(`/provider/chat/${id}`)
        } else {
            navigate(`/chat/${id}`)

        }
    }

    return (
        <section className="space-y-5">
            <DetailHeader title={"Chat"} />
            <Card className="mx-auto space-y-4 p-5">

                {rooms.map((room) => (
                    <div
                        key={room.roomId}
                        onClick={() => handleClick(room.roomId)}
                        className="flex cursor-pointer items-center gap-3 rounded-2xl border p-4 hover:bg-muted"
                    >
                        <Avatar>
                            <AvatarImage src={room.partnerAvatar} />
                            <AvatarFallback>
                                {room.partnerName?.[0]}
                            </AvatarFallback>
                        </Avatar>

                        <div>
                            <p className="font-semibold">
                                {room.partnerName}
                            </p>
                            <p className="text-sm ">
                                Room #{room.roomId}
                            </p>
                        </div>
                    </div>
                ))}
            </Card>
        </section>
    );
};

export default ChatRoomsPage;
import { getChatRoomsApi } from "@/services/chat.service";
import { useQuery } from "@tanstack/react-query"

export const useChatRooms = () => {
    return useQuery({
        queryKey: ["chat-rooms"],
        queryFn: getChatRoomsApi,
    });
}
import Apis, { endpoints } from "@/configs/Apis"

export const getChatTokenApi = async () => {
    const res = await Apis.get(endpoints.chat.token);

    return res.data;
}


export const getChatRoomsApi = async () => {
    const res = await Apis.get(endpoints.chat.rooms);

    return res.data;
}

export const createChatRoomApi = async ({ providerName }) => {
    const res = await Apis.post(endpoints.chat.rooms, {
        providerName,
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    return res.data;
}


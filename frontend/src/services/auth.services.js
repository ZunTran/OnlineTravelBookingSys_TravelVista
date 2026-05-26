import Apis, { endpoints } from "@/configs/Apis";

export const loginApi = async (data) => {
    const res = await Apis.post(endpoints)
};
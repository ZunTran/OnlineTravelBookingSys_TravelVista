import Apis, { endpoints } from "@/configs/Apis"

export const getCartApi = async () => {
    const res = await Apis.get(endpoints.cart);

    return res.data;
}
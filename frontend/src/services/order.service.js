import Apis, { endpoints } from "@/configs/Apis"

export const getOrdersApi = async (params = {}) => {
    const res = await Apis.get(endpoints.orders, {
        params
    });

    return res.data;
}
import Apis, { endpoints } from "@/configs/Apis"

export const getOrdersApi = async (params = {}) => {
    const res = await Apis.get(endpoints.orders.list, {
        params
    });

    return res.data;
}


export const reviewOrderApi = async ({ id, formData }) => {
    const res = await Apis.post(endpoints.orders.review(id), formData,
        {
            headers: {
                "Content-Type": "application/json",
            }
        })

    return res.data;
}
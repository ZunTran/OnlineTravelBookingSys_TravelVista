import Apis, { endpoints } from "@/configs/Apis"

export const getPublicServicesApi = async (params) => {

    const res = await Apis.get(endpoints.services.list, {
        params
    })
    return res.data.data;
};



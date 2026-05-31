import Apis, { endpoints } from "@/configs/Apis"

export const getPublicServicesApi = async (params) => {

    const res = await Apis.get(endpoints.services.list, {
        params
    })
    return res.data.data;
};

export const getPublicServiceDetailApi = async (id) => {

    const res = await Apis.get(endpoints.services.detail(id),)

    return res.data;
}


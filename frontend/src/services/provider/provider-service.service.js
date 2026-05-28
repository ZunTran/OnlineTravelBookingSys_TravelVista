import Apis, { endpoints } from "@/configs/Apis"

export const getProviderServicesApi = async (params) => {
    const res = await Apis.get(endpoints.provider.services, {
        params,
    })

    return res.data;

}
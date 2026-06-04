import Apis, { endpoints } from "@/configs/Apis"

export const getProviderOrdersApi = async (params) => {

    console.log(endpoints.provider.order.list, params);

    const res = await Apis.get(endpoints.provider.order.list, {
        params
    }
    );
    return res.data;
}

export const getDetailProviderOrderApi = async (id) => {
    const res = await Apis.get(endpoints.provider.order.detail(id));

    return res.data;
}
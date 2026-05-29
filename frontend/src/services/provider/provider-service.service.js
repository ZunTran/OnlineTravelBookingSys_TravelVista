import Apis, { endpoints } from "@/configs/Apis"

export const getProviderServicesApi = async (params) => {
    const res = await Apis.get(endpoints.provider.services, {
        params,
    });

    return res.data.data;
}

export const getProviderTourDetailApi = async (id) => {
    const res = await Apis.get(endpoints.provider.tourDetail(id));

    return res.data.data;
}

export const getProviderTransportApi = async (id) => {
    const res = await Apis.get(endpoints.provider.transportDetail(id));

    return res.data.data;
}

export const getProviderHotelDetailApi = async (id) => {
    const res = await Apis.get(endpoints.provider.hotelDetail(id));

    return res.data.data;
}
import Apis, { endpoints } from "@/configs/Apis"

export const getProviderServicesApi = async (params) => {
    const res = await Apis.get(endpoints.provider.services.base, {
        params,
    });
    return res.data.data;
};

export const updateProviderServicesApi = async ({ id, params = {}, formData = null, }) => {
    const body = new FormData();

    if (formData) {
        body.append("data", JSON.stringify(formData));
    }

    const res = await Apis.patch(endpoints.provider.services.info(id), body,
        {
            params
        }
    );

    return res.data;
};

export const getProviderTourDetailApi = async (id) => {
    const res = await Apis.get(endpoints.provider.services.detail(id, 'TOURS'));

    return res.data.data;
}

export const getProviderTransportApi = async (id) => {
    const res = await Apis.get(endpoints.provider.services.detail(id, 'TRANSPORTS'));

    return res.data.data;
}

export const getProviderHotelDetailApi = async (id) => {
    const res = await Apis.get(endpoints.provider.services.detail(id, 'HOTELS'));

    return res.data.data;
}

export const createProviderServiceApi = async ({ data, images }) => {

    const body = new FormData();

    body.append("data", JSON.stringify(data));

    images.forEach((file) => {
        body.append("images", file);
    });

    const res = await Apis.post(endpoints.provider.services.base, body);

    return res.data;
};

export const createProviderDetailServiceApi = async ({ id, serviceType, data }) => {

    const body = new FormData();

    body.append("data", JSON.stringify(data));

    const res = await Apis.post(endpoints.provider.services.detail(id, serviceType), body);

    return res.data;
}
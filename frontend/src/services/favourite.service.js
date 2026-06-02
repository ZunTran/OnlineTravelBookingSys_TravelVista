import Apis, { endpoints } from "@/configs/Apis"

export const getFavouriteApi = async () => {
    const res = await Apis.get(endpoints.favourite.list);

    return res.data;
}


export const updateFavouriteApi = async (id) => {
    const res = await Apis.post(endpoints.favourite.update(id));

    return res.data;
}

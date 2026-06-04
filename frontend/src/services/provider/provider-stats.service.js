import Apis, { endpoints } from "@/configs/Apis"

export const getStatsApi = async (params) => {

    const res = await Apis.get(endpoints.provider.stats, {
        params
    }
    );

    return res.data;
}
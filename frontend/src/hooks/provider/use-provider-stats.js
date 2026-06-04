import { getStatsApi } from "@/services/provider/provider-stats.service";
import { useQuery } from "@tanstack/react-query"

export const useProviderStats = (period) => {
    return useQuery({
        queryKey: ["stast", period],
        queryFn: () => getStatsApi(period),
    });
}
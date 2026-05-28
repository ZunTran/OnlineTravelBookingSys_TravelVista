import { getProviderServicesApi } from "@/services/provider/provider-service.service"
import { useQuery } from "@tanstack/react-query"

export const useProviderServices = (params) => {
    return useQuery({
        queryKey: ["provider-servies", params],
        queryFn: () => getProviderServicesApi(params),
        keepPreviousData: true,
    });
}
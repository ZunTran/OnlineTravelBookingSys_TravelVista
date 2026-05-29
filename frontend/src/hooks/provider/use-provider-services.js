import { getProviderHotelDetailApi, getProviderServicesApi, getProviderTourDetailApi, getProviderTransportApi } from "@/services/provider/provider-service.service"
import { useQuery } from "@tanstack/react-query"

export const useProviderServices = (params) => {
    return useQuery({
        queryKey: ["provider-servies", params],
        queryFn: () => getProviderServicesApi(params),
        keepPreviousData: true,
    });
}

export const useProviderHotelDetail = (id) => {
    return useQuery({
        queryKey: ["provider-hotel-detail", id],
        queryFn: () => getProviderHotelDetailApi(id),
        enabled: Number.isFinite(id),
        retry: false,
    });
};

export const useProviderTransportDetail = (id) => {
    return useQuery({
        queryKey: ["provider-transport-detail", id],
        queryFn: () => getProviderTransportApi(id),
        enabled: Number.isFinite(id),
        retry: false,
    });
};

export const useProviderTourDetail = (id) => {
    return useQuery({
        queryKey: ["provider-tour-detail", id],
        queryFn: () => getProviderTourDetailApi(id),
        enabled: Number.isFinite(id),
        retry: false,
    });
}
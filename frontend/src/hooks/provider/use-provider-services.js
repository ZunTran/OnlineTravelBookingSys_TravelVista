import { createProviderServiceApi, getProviderHotelDetailApi, getProviderServicesApi, getProviderTourDetailApi, getProviderTransportApi } from "@/services/provider/provider-service.service"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner";

export const useProviderServices = (params) => {
    return useQuery({
        queryKey: ["provider-services", params],
        queryFn: () => getProviderServicesApi(params),
        keepPreviousData: true,
    });
};

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

export const useCreateProviderService = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createProviderServiceApi,

        onSuccess: (data) => {
            toast.success(data?.message || "Tạo dịch vụ thành công");

            queryClient.invalidateQueries({
                queryKey: ["provider-services"],
            });
        },

        onError: (error) => {
            toast.error(
                error?.response?.data?.message ||
                "Tạo dịch vụ thất bại"
            );
        },
    });
};
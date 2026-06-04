import { createProviderServiceApi, getProviderHotelDetailApi, getProviderServicesApi, getProviderTourDetailApi, getProviderTransportApi, updateProviderServicesApi } from "@/services/provider/provider-service.service"
import { updateItemInListCache } from "@/utils/helper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner";


export const useProviderServices = (params) => {
    return useQuery({
        queryKey: ["provider-services", params],
        queryFn: () => getProviderServicesApi(params),
        staleTime: 1000 * 60 * 3,
        gcTime: 1000 * 60 * 10,
    });
};

export const useProviderHotelDetail = (id) => {
    return useQuery({
        queryKey: ["provider-service-detail", "HOTEL", id],
        queryFn: () => getProviderHotelDetailApi(id),
        enabled: Number.isFinite(id) || id > 1,
        retry: false,
    });
};

export const useProviderTransportDetail = (id) => {
    return useQuery({
        queryKey: ["provider-service-detail", "TRANSPORT", id],
        queryFn: () => getProviderTransportApi(id),
        enabled: Number.isFinite(id) || id > 1,
        retry: false,
    });
};

export const useProviderTourDetail = (id) => {
    return useQuery({
        queryKey: ["provider-service-detail", "TOUR", id],
        queryFn: () => getProviderTourDetailApi(id),
        enabled: Number.isFinite(id) || id > 1,
        retry: false,
    });
}

export const useCreateProviderService = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createProviderServiceApi,

        onSuccess: (data, variables) => {
            toast.success(data?.message || "Tạo dịch vụ thành công");

            updateItemInListCache(
                queryClient,
                ["provider-services"],
                variables.id,
                (service) => ({
                    ...service,
                    status: variables.params.status,
                }),
                "serviceId"
            );
        },

        onError: (error) => {
            toast.error(
                error?.response?.data?.message ||
                "Đã có lỗi xảy ra"
            );
        },
    });
};


export const useUpdateProviderService = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateProviderServicesApi,

        onSuccess: (data) => {
            toast.success(data?.response || "Đổi trạng thái thành công");

            queryClient.invalidateQueries({
                queryKey: ["provider-services"]
            });
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Đã có lỗi xảy ra");
        }

    });
}
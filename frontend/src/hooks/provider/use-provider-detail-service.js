import { createProviderDetailServiceApi } from "@/services/provider/provider-service.service";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner";

export const useCreateProviderDetailService = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createProviderDetailServiceApi,

        onSuccess: (data, variables) => {
            toast.success(data?.response || "Tạo thành công");
            queryClient.invalidateQueries({
                queryKey: ["provider-service-detail", variables.serviceType, variables.id],
            });
        },
        onError: (error) => {
            toast.info(error?.response?.data?.message || "Đã có lỗi xảy ra");
        }
    })

}
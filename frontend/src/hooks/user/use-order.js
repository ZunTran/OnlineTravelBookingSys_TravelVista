import { getOrdersApi, reviewOrderApi } from "@/services/user/order.service";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useOrders = (params) => {
    return useInfiniteQuery({
        queryKey: ["orders"],

        queryFn: ({ pageParam = 1 }) =>
            getOrdersApi({
                ...params,
                page: pageParam,
            }),

        initialPageParam: 1,

        getNextPageParam: (lastPage) => {
            const currentPage = lastPage.page;

            const totalPages = Math.ceil(
                lastPage.totalElements / lastPage.size
            );

            return currentPage < totalPages
                ? currentPage + 1
                : undefined;
        },
    });
};



export const usePostReview = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: reviewOrderApi,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["orders"]
            });


            toast.success(data?.message || "Đánh giá thành công");
        },
        onError: (error) => {
            toast.warning(error?.response?.data?.message || "Đã có lỗi xảy ra");
        }
    });
}
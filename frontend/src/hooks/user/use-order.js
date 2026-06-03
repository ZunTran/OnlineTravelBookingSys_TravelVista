import { getOrdersApi } from "@/services/order.service";
import { useInfiniteQuery } from "@tanstack/react-query";

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
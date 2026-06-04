import { getDetailProviderOrderApi, getProviderOrdersApi } from "@/services/provider/provider-order.service";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const useProviderOrders = (filters) => {
    return useInfiniteQuery({
        queryKey: ["provider-orders", filters],

        queryFn: ({ pageParams = 1 }) => getProviderOrdersApi({
            ...filters, page: pageParams,
        }),

        initialPageParam: 1,

        getNextPageParam: (lastPage) => {
            const page = lastPage?.data?.page;
            const totalPages = lastPage?.data?.totalPages;

            return page + 1 < totalPages
                ? page + 2
                : undefined;
        },
    });
}

export const useDetailProviderOrder = (id) => {
    return useQuery({
        queryKey: ["provider-order-detail", id],
        queryFn: () => getDetailProviderOrderApi(id),

        enabled: Number.isFinite(id) && id > 1,
    });
}
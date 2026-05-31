import { getPublicServiceDetailApi, getPublicServicesApi } from "@/services/service.service";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useServices = (params) => {
    return useInfiniteQuery({
        queryKey: ["services", params],

        queryFn: ({ pageParam = 1 }) =>
            getPublicServicesApi({
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

export const useServiceDetail = (id) => {
    return useQuery({
        queryKey: ["service-detail", id],
        queryFn: () => getPublicServiceDetailApi(id),
        enabled: Number.isFinite(id) || id > 1,
        retry: false,
    });
}
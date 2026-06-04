import { getCategoriesApi, getPublicServiceDetailApi, getPublicServicesApi, getPublicSubItemServiceApi, getReviewApi } from "@/services/user/service.service";
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
        enabled: Number.isFinite(id) && id > 1,
        retry: false,
    });
};

export const useSubItemService = (id) => {
    return useQuery({
        queryKey: ["service-subitem", id],
        queryFn: () => getPublicSubItemServiceApi(id),
        enabled: Number.isFinite(id) && id > 1,
        retry: false,
        staleTime: 1000 * 60 * 2,

        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });
}

export const useReviews = (id) => {

    return useInfiniteQuery({
        queryKey: ["reviews", id],

        queryFn: ({ pageParam = 1 }) => getReviewApi(id, {
            page: pageParam
        }),

        initialPageParam: 1,
        enabled: Number.isFinite(id) && Number(id) > 0,

        getNextPageParam: (lastPage) => {
            const currentPage = lastPage?.data?.page || lastPage?.page || 1;
            const size = lastPage?.data?.size || lastPage?.size || 5;

            const totalElements = lastPage?.data?.data?.totalElements ||
                lastPage?.totalElements || 0;

            const totalPages = Math.ceil(totalElements / size);

            return currentPage < totalPages ? currentPage + 1 : undefined;
        },

        retry: false,


    });


    // return useQuery({
    //     queryKey: ["reviews", id],
    //     queryFn: () => getReviewApi(id),
    //     enabled: Number.isFinite(id) || id > 1,
    //     retry: false
    // });
}

export const useCategories = () => {

    return useQuery({
        queryKey: ["categories"],
        queryFn: getCategoriesApi,

    });

}
import { getFavouriteApi, updateFavouriteApi } from "@/services/user/favourite.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner";

export const useFavourites = () => {
    return useQuery({
        queryKey: ["favourites"],
        queryFn: getFavouriteApi,
    });
}

export const useUpdateFavourite = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateFavouriteApi,

        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({
                queryKey: ["service-detail", variables.serviceId],
            })

            toast.success(data?.message || "Đã thích");

        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Đã có lỗi xảy ra");


        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["favourites"] });


        }



    });
}
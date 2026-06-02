import { getFavouriteApi, updateFavouriteApi } from "@/services/favourite.service";
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

        onMutate: async ({ id }) => {
            await queryClient.cancelQueries({
                queryKey: ["favourites"],
            });

            const previousFavourites = queryClient.getQueryData(["favourites"]);
            queryClient.setQueriesData(["favourites"], (old) => {
                if (!old?.data)
                    return old;

                return {
                    ...old, data: old.data.filter(
                        (item) => item.id !== id
                    ),
                };
            });
            return { previousFavourites };
        },
        onError: (error, variable, context) => {
            queryClient.setQueryData(["favourites"], context.previousFavourites);

            toast.error(error?.response?.data?.message || "Đã có lỗi xảy ra");

        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["favourites"] });

        }



    });
}
import { addToCartApi, deleteCartApi, getCartApi, updateCartApi } from "@/services/cart.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner";

export const useCart = () => {
    return useQuery({
        queryKey: ["cart"],
        queryFn: getCartApi,
    });
}

export const useAddToCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addToCartApi,

        onSuccess: (data) => {
            toast.success(data?.message || "Đã thêm vàod giỏ hàng");
            queryClient.invalidateQueries({
                queryKey: ["cart"]
            })
        },
        onError: (error, variables) => {
            console.log(variables);
            toast.warning(error?.response?.data?.message || "Đã có lỗi xảy ra")
        }

    });
}

export const useUpdateCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateCartApi,

        onSuccess: (data) => {
            toast.success(data?.message || "Đã cập nhật giỏ hàng");
            queryClient.invalidateQueries({
                queryKey: ["cart"]
            })
        },
        onError: (error) => {
            toast.warning(error?.response?.data?.message || "Đã có lỗi xảy ra")
        }

    });
}

export const useDeleteCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteCartApi,

        onSuccess: (data) => {

            toast.success(data?.message || "Đã xóa khỏi giỏ hàng");
            queryClient.invalidateQueries({
                queryKey: ["cart"]
            })
        },
        onError: (error) => {
            toast.warning(error?.response?.data?.message || "Đã có lỗi xảy ra")
        }

    });
}
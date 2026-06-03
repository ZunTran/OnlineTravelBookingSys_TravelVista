import { checkoutApi, getPaymentMethodApi, previewCartCheckoutApi } from "@/services/checkout.service"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"


export const usePaymentMethod = () => {
    return useQuery({
        queryKey: ["payment-methods"],
        queryFn: getPaymentMethodApi,
    })
}



export const usePreview = (formData, enabled = true) => {

    return useQuery({
        queryKey: ["preview"],
        queryFn: () => previewCartCheckoutApi(formData),
        enabled,
        retry: false,

    });
}

export const useBuyNow = () => {
    const querryClient = useQueryClient();
    const navigate = useNavigate();


    return useMutation({

        mutationFn: checkoutApi,
        onSuccess: (data, variables) => {
            querryClient.invalidateQueries({
                queryKey: ["service-subitem", variables.itemId],
            })
            querryClient.invalidateQueries({
                queryKey: ["orders"],
            });


            const orderId = data?.data?.orderId;

            toast.success(data?.message || "Thanh toán thành công");

            navigate("/checkout/success", {
                state: {
                    orderId,
                    success: true
                }
            })
        },
        onError: (error) => {
            console.log(error);
            toast.warning(error?.response?.data?.message
                || "Tạm thời không thể thanh toán, vui lòng thử lại sau");
        }
    });
}


export const useCartCheckout = () => {
    const querryClient = useQueryClient();

    return useMutation({
        mutationFn: checkoutApi,
        onSuccess: (data) => {
            querryClient.invalidateQueries({
                queryKey: ["cart"],
            })

            toast.success(data?.message || "Thanh toán giỏ hàng thành công");
        },

        onError: (error) => {
            toast.warning(error?.response?.data?.message
                || "Tạm thời không thể thanh toán, vui lòng thử lại sau");
        }
    });
}
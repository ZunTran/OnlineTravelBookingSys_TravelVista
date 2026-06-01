import { getCartApi } from "@/services/cart.service";
import { useQuery } from "@tanstack/react-query"

export const useCart = () => {
    return useQuery({
        queryKey: ["cart"],
        queryFn: getCartApi,
    });
}
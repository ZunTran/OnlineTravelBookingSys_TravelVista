import { registerApi } from "@/services/auth/auth.services"
import { useMutation } from "@tanstack/react-query"

export const useRegister = () => {
    return useMutation({
        mutationFn: registerApi,
    });
}
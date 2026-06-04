import { registerApi } from "@/services/auth/auth.service"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useRegister = () => {

    const navigator = useNavigate();

    return useMutation({
        mutationFn: registerApi,
        onSuccess: (data) => {
            toast.success(data?.message || "Đăng ký tài khoản thành công")
            navigator('/login');
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Đã có lỗi xảy ra");
        }
    });
}
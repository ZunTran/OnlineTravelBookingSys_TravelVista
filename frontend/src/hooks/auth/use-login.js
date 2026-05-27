import { loginApi } from "@/services/auth/auth.services";
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import cookies from 'react-cookies'
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/store/authSlice";

export const useLogin = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    return useMutation({
        mutationFn: loginApi,

        onSuccess: (data, variable, context) => {
            const {
                token,
                userId,
                username,
                fullName,
                email,
                phone,
                avatarUrl,
                roleName,
                createdAt
            } = data;

            const user = {
                userId,
                username,
                fullName,
                email,
                phone,
                avatarUrl,
                roleName,
                createdAt,
            }

            cookies.save('token', token, { path: "/" });
            cookies.save("user", user, { path: "/" })

            dispatch(loginSuccess(user));
            toast.success(data?.message || "Đăng nhập thành công");

            if (roleName === "PROVIDER")
                navigator('/provider/dashboard')
            else
                navigator("/");
        },
        onError: (error, variable, context) => {
            console.log(error?.response?.data?.message);
            toast.error(error?.response?.data?.message || "Đã có lỗi xảy ra");
        }
    },);
}
import { loginApi } from "@/services/auth/auth.service";
import { useMutation } from "@tanstack/react-query"
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import cookies from 'react-cookies'
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/store/authSlice";
import { getProfileApi } from "@/services/auth/profile.service";

export const useLogin = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const location = useLocation();

    const from = location.state?.from || "/"

    return useMutation({
        mutationFn: loginApi,

        onSuccess: async (data, variable, context) => {

            const {
                token,
                roleName,
            } = data;
            cookies.save('token', token, { path: "/" });

            const profile = await getProfileApi();

            cookies.save("user", profile, { path: "/" })

            dispatch(loginSuccess(profile));
            toast.success(data?.message || "Đăng nhập thành công");

            if (from !== '/') {
                navigator(from, { replace: true });
                return;
            }

            if (roleName === "PROVIDER")
                navigator('/provider/dashboard')
            else
                navigator(from);
        },
        onError: (error, variable, context) => {
            toast.error(error?.response?.data?.message || "Đã có lỗi xảy ra");
        }
    },);
}
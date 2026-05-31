import { loginApi } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query"
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/store/authSlice";
import { getProfileApi } from "@/services/profile.service";
import { AUTH_EVENTS, authStorage } from "@/utils/auth-storage";

export const useLogin = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const location = useLocation();

    const from = location.state?.from || "/"

    return useMutation({
        mutationFn: loginApi,

        onSuccess: async (data) => {

            const {
                token,
                roleName,
            } = data;

            authStorage.saveAuth(token);

            const profile = await getProfileApi();

            // console.log("Provider: ", profile);

            authStorage.saveUser(profile);
            dispatch(loginSuccess(profile));
            authStorage.notify(AUTH_EVENTS.LOGIN);

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
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Đã có lỗi xảy ra");
        }
    },);
}
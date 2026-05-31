import { useAuth } from "@/hooks/auth/use-auth";
import { avatarApi, getProfileApi, passwordApi, profileApi } from "@/services/auth/profile.service";
import { useMutation, useQuery } from "@tanstack/react-query"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import cookies from 'react-cookies';
import { loginSuccess } from "@/store/authSlice";
import { AUTH_EVENTS, authStorage } from "@/utils/auth-storage";


export const useProfile = (options = {}) => {
    return useQuery({
        queryKey: ["current-profile"],
        queryFn: getProfileApi,
        enabled: !!cookies.load("token") && (options.enabled ?? true),
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        ...options,
    });
};

export const useUpdateProfile = () => {
    const dispatch = useDispatch();

    return useMutation({
        mutationFn: profileApi,

        onSuccess: async (data) => {

            const user = await getProfileApi();
            cookies.save("user", user, { path: "/" });
            dispatch(loginSuccess(user));
            authStorage.notify(AUTH_EVENTS.UPDATE_PROFILE)
            toast.success(data.message || "Cập nhật thông tin thành công");
        },
        onError: (error) => {
            console.log("Profile", error);
            toast.error(error?.response?.data?.message || "Đã có lỗi khi cập nhật thông tin");
        }

    });
}

export const useChangePassword = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    return useMutation({
        mutationFn: passwordApi,
        onSuccess: (data) => {

            if (data.success) {
                toast.success(data.message || "Thay đổi thành công. Vui lòng đăng nhập lại");

                setTimeout(() => {
                    logout();

                    navigate("/login", {
                        replace: true,
                    });

                }, 2000);
            }
            else
                toast.warning(data?.message || "Đã có lỗi xảy ra");

        },
        onError: (error) => {
            console.log(error);
            toast.error(error?.response?.data?.message || "Đã có lỗi xảy ra");
        }
    });
}

export const useChangeAvatar = () => {
    const dispatch = useDispatch();

    return useMutation({
        mutationFn: avatarApi,

        onSuccess: async (data) => {

            const profile = await getProfileApi();

            cookies.save("user", profile, { path: "/" });
            dispatch(loginSuccess(profile));
            authStorage.notify(AUTH_EVENTS.UPDATE_PROFILE)
            toast.success(data.message || "Đổi avatar thành công");
        },
        onError: (error) => {
            console.log("AVtar", error);

            toast.error(error?.response?.data?.message || "Lỗi update avatar");
        }
    });
}
import { useProfile } from "@/hooks/auth/use-profile";
import { loginSuccess } from "@/store/authSlice";
import { authStorage } from "@/utils/auth-storage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useCurrentProfile = (shouldPolling = false) => {
    const dispatch = useDispatch();

    const query = useProfile({
        enabled: shouldPolling,
        refetchInterval: shouldPolling ? 15000 : false,
    });

    useEffect(() => {
        if (!query.data) return;

        authStorage.saveUser(query.data);
        dispatch(loginSuccess(query.data));
    }, [query.data, dispatch]);

    return query;
};
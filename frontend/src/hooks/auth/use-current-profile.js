import { getProfileApi } from "@/services/auth/profile.service";
import { loginSuccess } from "@/store/authSlice";
import { AUTH_EVENTS, authStorage } from "@/utils/auth-storage";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useCurrentProfile = (shouldPolling = false) => {

    const dispatch = useDispatch();
    const query = useQuery({
        queryKey: ["current-profile"],

        queryFn: getProfileApi,
        enabled: shouldPolling,
        refetchInterval: shouldPolling ? 15000 : false,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
    });

    useEffect(() => {
        if (!query.data)
            return;

        authStorage.saveUser(query.data);
        dispatch(loginSuccess(query.data));
        authStorage.notify(AUTH_EVENTS.UPDATE_PROFILE);

    }, [query.data, dispatch]);

    return query;
};
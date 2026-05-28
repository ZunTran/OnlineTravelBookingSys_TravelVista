import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    AUTH_EVENT_KEY,
    AUTH_EVENTS,
    authStorage,
} from "@/utils/auth-storage";

import {
    loginSuccess,
    logoutSuccess,
} from "@/store/authSlice";

export const useAuthSync = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        const handleStorage = (e) => {

            if (
                e.key !== AUTH_EVENT_KEY ||
                !e.newValue
            ) return;

            const event = JSON.parse(e.newValue);

            // LOGIN
            if (event.type === AUTH_EVENTS.LOGIN) {

                const user = authStorage.getUser();

                if (user) {
                    dispatch(loginSuccess(user));
                }
            }

            // UPDATE PROFILE
            if (event.type === AUTH_EVENTS.UPDATE_PROFILE) {

                const user = authStorage.getUser();

                if (user) {
                    dispatch(loginSuccess(user));
                }
            }

            // LOGOUT / TOKEN EXPIRED
            if (
                event.type === AUTH_EVENTS.LOGOUT ||
                event.type === AUTH_EVENTS.TOKEN_EXPIRED
            ) {

                authStorage.clearAuth();

                dispatch(logoutSuccess());

                navigate("/login", {
                    replace: true,
                });
            }
        };

        window.addEventListener(
            "storage",
            handleStorage
        );

        return () => {
            window.removeEventListener(
                "storage",
                handleStorage
            );
        };

    }, [dispatch, navigate]);
};
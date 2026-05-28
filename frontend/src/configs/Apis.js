import { AUTH_EVENTS, authStorage } from "@/utils/auth-storage";
import axios from "axios";

export const endpoints = {
    auth: {
        register: "/api/auth/register",
        login: "/api/auth/login",
    },

    profile: {
        get: "/api/auth/profile",
        update: "/api/auth/profile/update",
        avatar: "/api/auth/profile/avatar",
        password: "/api/auth/profile/change-password",
    },

    provider: {
        services: "/api/provider/services",
    },

    user: {

    },
};

const BASE_URL = process.env.REACT_APP_API_URL;

const Apis = axios.create({
    baseURL: BASE_URL,
});

Apis.interceptors.request.use(
    (config) => {
        const token = authStorage.getToken();

        if (token)
            config.headers.Authorization = `Bearer ${token}`;

        return config;

    },
    (error) => {
        return Promise.reject(error);
    }
);
Apis.interceptors.response.use(
    (response) => response,

    (error) => {

        const isLoginRequest =
            error.config?.url?.includes("/api/auth/login");

        if (
            error.response?.status === 401 &&
            !isLoginRequest
        ) {

            authStorage.clearAuth();

            authStorage.notify(
                AUTH_EVENTS.TOKEN_EXPIRED
            );

            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default Apis;
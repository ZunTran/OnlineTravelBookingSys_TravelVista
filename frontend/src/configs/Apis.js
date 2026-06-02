import { AUTH_EVENTS, authStorage } from "@/utils/auth-storage";
import axios from "axios";

export const endpoints = {
    auth: {
        register: "/api/auth/register",
        login: "/api/auth/login",
        profile: "/api/auth/profile",
        password: "/api/auth/profile/password",

    },

    provider: {
        services: {
            base: "/api/provider/services",
            info: (id) => `/api/provider/services/${id}`,
            detail: (id, serviceType) => `/api/provider/services/${id}/${serviceType.toLowerCase()}`,
        }
    },


    services: {
        list: "/api/services",
        detail: (id) => `/api/services/${id}`,
        subItems: (id) => `/api/services/${id}/sub-items`,
        reviews: (id) => `/api/services/${id}/reviews`
    },

    cart: "/api/services/cart",

    favourite: {
        list: "/api/customer/favorites",
        update: (id) => `/api/customer/favorites/${id}`
    }

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
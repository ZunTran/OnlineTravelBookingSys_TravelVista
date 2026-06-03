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
        reviews: (id) => `/api/services/${id}/reviews`,
        categories: "/api/customer/categories"
    },

    cart: {
        list: "/api/services/cart",
        update: (id) => `/api/services/cart/items/${id}`,
        preview: "/api/services/preview"
    },

    favourite: {
        list: "/api/customer/favorites",
        update: (id) => `/api/customer/favorites/${id}`
    },

    paymentMethod: "/api/services/payment",

    checkout: "/api/services/orders",

    orders: {
        list: "/api/services/orders",
        review: (orderId) => `/api/customer/order-details/${orderId}/reviews`
    },


    chat: {
        token: "/api/chat/tokens",
        rooms: "/api/chat/rooms",
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
        const status = error.response?.status;
        const code = error.response?.data?.code;

        const isLoginRequest =
            error.config?.url?.includes(endpoints.auth.login);

        if (status === 401 && !isLoginRequest) {
            let reason = "expired";

            if (code === "TOKEN_REPLACED") {
                reason = "another-device";
            }

            authStorage.clearAuth();

            authStorage.notify(
                reason === "another-device"
                    ? AUTH_EVENTS.ANOTHER_DEVICE_LOGIN
                    : AUTH_EVENTS.TOKEN_EXPIRED
            );

            window.location.href =
                `/login?reason=${reason}&redirect=/`;
        }

        return Promise.reject(error);
    }
);

export default Apis;
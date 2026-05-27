import axios from "axios";
import cookies from 'react-cookies'

export const endpoints = {
    register: "/api/auth/register",
    login: "/api/auth/login",

};

const BASE_URL = process.env.REACT_APP_API_URL;

const Apis = axios.create({
    baseURL: BASE_URL,
});

Apis.interceptors.request.use(
    (config) => {
        const token = cookies.load("token");

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

            cookies.remove("token", { path: "/" });

            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default Apis;
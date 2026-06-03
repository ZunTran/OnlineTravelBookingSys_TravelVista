import cookies from "react-cookies";

export const TOKEN_KEY = "token";
export const USER_KEY = "user";
export const AUTH_EVENT_KEY = "auth-event";

export const AUTH_EVENTS = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    UPDATE_PROFILE: "UPDATE_PROFILE",
    TOKEN_EXPIRED: "TOKEN_EXPIRED",
    ANOTHER_DEVICE_LOGIN: "ANOTHER_DEVIDE_LOGIN",
};

const notifyAuthEvent = (type) => {
    localStorage.setItem(
        AUTH_EVENT_KEY,
        JSON.stringify({
            type,
            time: Date.now(),
        })
    );
};

export const authStorage = {
    getToken: () => cookies.load(TOKEN_KEY),

    getUser: () => cookies.load(USER_KEY),

    saveAuth: (token) => {
        cookies.save(TOKEN_KEY, token, { path: "/" });
    },

    saveUser: (user) => {
        cookies.save(USER_KEY, user, { path: "/" });
    },

    clearAuth: () => {
        cookies.remove(TOKEN_KEY, { path: "/" });
        cookies.remove(USER_KEY, { path: "/" });
    },

    notify: notifyAuthEvent,
};
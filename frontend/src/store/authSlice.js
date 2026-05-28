import { createSlice } from '@reduxjs/toolkit';
import cookies from 'react-cookies';

const checkInitialAuth = () => {
    return cookies.load("token") ? true : false;
};

const initialState = {
    isAuthenticated: checkInitialAuth(),
    user: cookies.load("user") || null,
    loading: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.loading = false;
        },

        logoutSuccess: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { loginSuccess, logoutSuccess, setLoading } = authSlice.actions;
export default authSlice.reducer;
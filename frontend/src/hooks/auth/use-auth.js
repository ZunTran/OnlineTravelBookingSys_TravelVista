import { logoutSuccess } from "@/store/authSlice";
import { AUTH_EVENTS, authStorage } from "@/utils/auth-storage";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { user, isAuthenticated, loading } = useSelector(
        (state) => state.auth,
    );

    const logout = () => {
        authStorage.clearAuth();
        dispatch(logoutSuccess());
        authStorage.notify(AUTH_EVENTS.LOGOUT);
        navigate("/login", { replace: true });
    };

    return {
        user,
        isAuthenticated,
        loading,
        logout,
    };
};
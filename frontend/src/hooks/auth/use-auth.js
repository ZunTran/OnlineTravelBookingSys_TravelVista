import { logoutSuccess } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux"

export const useAuth = () => {
    const dispatch = useDispatch();

    const { user, isAuthenticated, loading } = useSelector(
        (state) => state.auth,
    );

    const logout = () => {
        dispatch(logoutSuccess());
    };

    return {
        user,
        isAuthenticated,
        loading,
        logout,
    };
};
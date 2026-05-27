import { useAuth } from "@/hooks/auth/use-auth"
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to={`/login?redirect=${location.pathname}`} replace />
    }

    return children;
};
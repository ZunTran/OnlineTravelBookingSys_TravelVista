import { useAuth } from "@/hooks/auth/use-auth"
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace state={{ from: location.pathname }} />
    }

    return <Outlet />;
};

export default ProtectedRoute;
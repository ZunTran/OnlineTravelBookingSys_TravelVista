import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/auth/use-auth";

const PublicOnlyRoute = () => {
    const { isAuthenticated, user } = useAuth();

    if (isAuthenticated) {
        if (user?.roleName === "PROVIDER") {
            return <Navigate to="/provider/dashboard" replace />;
        }

        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default PublicOnlyRoute;
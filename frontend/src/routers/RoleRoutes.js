import { useAuth } from "@/hooks/auth/use-auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const getHomeByRole = (roleName) => {
    if (roleName === "PROVIDER")
        return "/provider/dashboard";
    else
        return "/";
}

const RoleRoute = ({ allowedRoles }) => {
    const { isAuthenticated, user } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace state={{ from: location.pathname }} />
    }

    if (!allowedRoles.includes(user?.roleName)) {
        return (
            <Navigate to={getHomeByRole(user?.roleName)} />
        );
    }

    return <Outlet />
}

export default RoleRoute;
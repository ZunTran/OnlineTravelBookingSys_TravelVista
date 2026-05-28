import UserLayout from "@/layouts/UserLayout";
import UserProfileLayout from "@/layouts/UserProfileLoyout";
import { HomePage, TransportPage, UserProfilePage, UserSecurityPage } from "@/routers/LazyPages";
import ProtectedRoute from "@/routers/ProtectedRoute";
import { Route } from "react-router-dom";

const UserRoutes = () => {
    return (
        <Route element={<UserLayout />}>
            <Route
                index
                element={<HomePage />}
            />
            <Route
                path="transport"
                element={<TransportPage />}
            />

            <Route element={<ProtectedRoute />}>
                <Route element={<UserProfileLayout />}>
                    <Route
                        path="/user/profile"
                        element={<UserProfilePage />}
                    />
                    <Route
                        path="/user/security"
                        element={<UserSecurityPage />}
                    />
                </Route>
            </Route>

        </Route>
    );
}

export default UserRoutes;
import UserLayout from "@/layouts/UserLayout";
import UserProfileLayout from "@/layouts/UserProfileLoyout";
import { HomePage, TransportPage, UserProfilePage, UserSecurityPage } from "@/routers/LazyPages";
import RoleRoute from "@/routers/RoleRoutes";
import { Route } from "react-router-dom";

const UserRoutes = () => {
    return (


        <Route element={<UserLayout />}>
            <Route
                index
                element={<HomePage />}
            />
            <Route
                path="/transport"
                element={<TransportPage />}
            />

            <Route element={<RoleRoute allowedRoles={["CUSTOMER"]} />}>
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
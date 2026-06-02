import UserLayout from "@/layouts/UserLayout";
import UserProfileLayout from "@/layouts/UserProfileLoyout";
import FavouritePage from "@/pages/user/profile/FavouritePage";
import { CartPage, HomePage, HotelDetailPage, TourDetailPage, TransportDetailPage, TransportPage, UserProfilePage, UserSecurityPage } from "@/routers/LazyPages";
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
            <Route
                path="/transport/:id"
                element={<TransportDetailPage />}
            />
            <Route
                path="/hotel/:id"
                element={<HotelDetailPage />}
            />
            <Route
                path="/tour/:id"
                element={<TourDetailPage />}
            />

            <Route Route element={< RoleRoute allowedRoles={["CUSTOMER"]} />}>

                <Route
                    path="/user/cart"
                    element={<CartPage />}
                />

                <Route
                    path="/user/favourite"
                    element={<FavouritePage />}
                />

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
            </Route >
        </Route >
    );
}

export default UserRoutes;
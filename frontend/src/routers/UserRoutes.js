import UserLayout from "@/layouts/UserLayout";
import UserProfileLayout from "@/layouts/UserProfileLoyout";
import { ChatRoomPage, ChatRoomsPage, CheckoutPage, HomePage, HotelDetailPage, OrderPage, TourDetailPage, TransportDetailPage, TransportPage, UserProfilePage, UserSecurityPage } from "@/pages/LazyPages";
import CheckoutSuccessPage from "@/pages/user/CheckoutSuccessPage";
import CartPage from "@/pages/user/profile/CartPage";
import FavouritePage from "@/pages/user/profile/FavouritePage";

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

            <Route
                path="/checkout/success"
                element={<CheckoutSuccessPage />}
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

                <Route
                    path="/checkout"
                    element={<CheckoutPage />}
                />


                <Route path="/chat" element={<ChatRoomsPage />} />
                <Route path="/chat/:roomId" element={<ChatRoomPage />} />

                <Route element={<UserProfileLayout />}>
                    <Route
                        path="/user/profile"
                        element={<UserProfilePage />}
                    />
                    <Route
                        path="/user/security"
                        element={<UserSecurityPage />}
                    />
                    <Route
                        path="/user/order"
                        element={<OrderPage />}
                    />
                </Route>
            </Route >
        </Route >
    );
}

export default UserRoutes;
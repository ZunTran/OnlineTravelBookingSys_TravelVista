import UserLayout from "@/layouts/UserLayout";
import UserProfileLayout from "@/layouts/UserProfileLoyout";
import { CheckoutPage, CheckoutSuccessPage, HomePage, HotelDetailPage, TourDetailPage, TransportDetailPage, TransportPage } from "@/pages/LazyPages";
import CartPage from "@/pages/user/profile/CartPage";
import FavouritePage from "@/pages/user/profile/FavouritePage";

import RoleRoute from "@/routers/RoleRoutes";
import { lazy } from "react";
import { Route } from "react-router-dom";

const UserSecurityPage = lazy(() => import("@/pages/user/profile/UserSecurityPage"));
const OrderPage = lazy(() => import("@/pages/user/profile/OrderPage"));
const UserProfilePage = lazy(() => import("@/pages/user/profile/UserProfilePage"));
const ChatRoomPage = lazy(() => import("@/pages/ChatRoomPage"));
const ChatRoomsPage = lazy(() => import("@/pages/ChatRoomsPage"))

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
import ProviderLayout from "@/layouts/ProviderLayout";
import { ProviderHomePage, ProviderHotelDetailPage, ProviderServicesPage, ProviderTourDetailPage, ProviderTransportDetailPage } from "@/pages/LazyPages";
import RoleRoute from "@/routers/RoleRoutes";
import { lazy } from "react";
import { Route } from "react-router-dom";

const ChatRoomsPage = lazy(() => import("@/pages/ChatRoomsPage"));
const ChatRoomPage = lazy(() => import("@/pages/ChatRoomPage"))

const ProviderRoutes = () => {
    return (
        <Route element={<RoleRoute allowedRoles={["PROVIDER"]} />}>
            <Route element={<ProviderLayout />}>
                <Route
                    path="/provider/dashboard"
                    element={<ProviderHomePage />}
                />
                <Route
                    path="/provider/services"
                    element={<ProviderServicesPage />}
                />
                <Route
                    path="/provider/tours/:id"
                    element={<ProviderTourDetailPage />}
                />

                <Route
                    path="/provider/hotels/:id"
                    element={<ProviderHotelDetailPage />}
                />

                <Route
                    path="/provider/transports/:id"
                    element={<ProviderTransportDetailPage />}
                />
                <Route
                    path="/provider/chat"
                    element={<ChatRoomsPage />}
                />

                <Route
                    path="/provider/chat/:roomId"
                    element={<ChatRoomPage />}
                />
            </Route>
        </Route>
    );
}

export default ProviderRoutes;
import ProviderLayout from "@/layouts/ProviderLayout";
import { ProviderHomePage, ProviderHotelDetailPage, ProviderServicesPage, ProviderTourDetailPage, ProviderTransportDetailPage } from "@/routers/LazyPages";
import RoleRoute from "@/routers/RoleRoutes";
import { Route } from "react-router-dom";

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
            </Route>
        </Route>
    );
}

export default ProviderRoutes;
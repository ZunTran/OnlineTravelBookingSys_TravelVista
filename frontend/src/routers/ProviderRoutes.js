import ProviderLayout from "@/layouts/ProviderLayout";
import { ProviderHomePage, ProviderServicesPage } from "@/routers/LazyPages";
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
            </Route>
        </Route>
    );
}

export default ProviderRoutes;
import ProviderLayout from "@/layouts/ProviderLayout";
import { ProviderHomePage } from "@/routers/LazyPages";
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
            </Route>
        </Route>
    );
}

export default ProviderRoutes;
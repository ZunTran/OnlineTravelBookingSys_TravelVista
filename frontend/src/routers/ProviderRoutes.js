import ProviderLayout from "@/layouts/ProviderLayout";
import { ProviderHomePage } from "@/routers/LazyPages";
import { Route } from "react-router-dom";

const ProviderRoutes = () => {
    return (
        <Route element={<ProviderLayout />}>
            <Route
                path="/provider/dashboard"
                element={<ProviderHomePage />}
            />
        </Route>
    );
}

export default ProviderRoutes;
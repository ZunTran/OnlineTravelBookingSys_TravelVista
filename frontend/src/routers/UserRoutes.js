import UserLayout from "@/layouts/UserLayout";
import { HomePage, TransportPage } from "@/routers/LazyPages";
import { Route } from "react-router-dom";

const UserRoutes = () => {
    return (
        <Route element={<UserLayout />}>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="transport"
                element={<TransportPage />}
            />
        </Route>
    );
}

export default UserRoutes;
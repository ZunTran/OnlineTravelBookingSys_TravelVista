import UserLayout from "@/layouts/UserLayout";
import HomePage from "@/pages/HomePage";
import { Route } from "react-router-dom";

const UserRoutes = () => {
    return (
        <Route element={<UserLayout />}>
            <Route
                path="/"
                element={<HomePage />}
            />
        </Route>
    );
}

export default UserRoutes;
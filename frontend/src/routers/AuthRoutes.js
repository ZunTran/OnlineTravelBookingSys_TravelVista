import AuthLayout from "@/layouts/AuthLayout";
import { LoginPage, RegisterPage } from "@/pages/LazyPages";
import PublicOnlyRoute from "@/routers/PublicOnlyRoute";
import { Route } from "react-router-dom";

const AuthRoutes = () => {
    return (
        <Route element={<PublicOnlyRoute />}>
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

        </Route>
    );
}

export default AuthRoutes;
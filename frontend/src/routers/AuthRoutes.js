import AuthLayout from "@/layouts/AuthLayout";
import { LoginPage, RegisterPage } from "@/routers/LazyPages";
import PublicOnlyRoute from "@/routers/PublicOnlyRoute";
import { Route } from "react-router-dom";

const AuthRoutes = () => {
    return (
        <Route element={<AuthLayout />}>
            <Route element={<PublicOnlyRoute />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
        </Route>
    );
}

export default AuthRoutes;
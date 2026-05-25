import AuthLayout from "@/layouts/AuthLayout";
import { LoginPage, RegisterPage } from "@/routers/LazyPages";
import { Route } from "react-router-dom";

const AuthRoutes = () => {
    return (
        <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Route>
    );
}

export default AuthRoutes;
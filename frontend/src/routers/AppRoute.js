import AdminRoutes from "@/routers/AdminRoutes";
import AuthRoutes from "@/routers/AuthRoutes";
import UserRoutes from "@/routers/UserRoutes";
import ProviderRoutes from "@/routers/ProviderRoutes"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from '@/pages/error/NotFoundPage'
import { useAuthSync } from "@/hooks/auth/use-auth-sync";


const AuthSync = () => {
    useAuthSync();
    return null;
};
const AppRoutes = () => {

    return (
        <BrowserRouter>

            <AuthSync />
            <Routes>
                {UserRoutes()}
                {AuthRoutes()}
                {AdminRoutes()}
                {ProviderRoutes()}

                <Route
                    path="*"
                    element={<NotFoundPage />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
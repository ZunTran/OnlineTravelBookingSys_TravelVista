import AdminRoutes from "@/routers/AdminRoutes";
import AuthRoutes from "@/routers/AuthRoutes";
import UserRoutes from "@/routers/UserRoutes";
import ProviderRoutes from "@/routers/ProviderRoutes"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from '@/pages/error/NotFoundPage'

const AppRoutes = () => {
    return (
        <BrowserRouter>
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
import AdminLayout from "@/layouts/AdminLayout";
import { AdminHomePage } from "@/pages/LazyPages";
import { Route } from "react-router-dom";

const AdminRoutes = () => {
    return (
        <Route element={<AdminLayout />}>
            <Route
                path="/admin/dashboard"
                element={<AdminHomePage />}
            />
        </Route>
    );
}

export default AdminRoutes;
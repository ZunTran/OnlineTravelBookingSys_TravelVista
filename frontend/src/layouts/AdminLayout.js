import AdminHeader from "@/components/admin/AdminHeader";
import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="h-screen flex overflow-hidden bg-zinc-100">
            <div className="shrink-0">
                <AdminHeader />
            </div>

            <main className="flex-1 overflow-y-auto p-6">
                <Suspense
                    fallback={
                        <div className="flex h-full items-center justify-center">
                            <Spinner className="size-10" />
                        </div>
                    }
                >
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
}

export default AdminLayout;
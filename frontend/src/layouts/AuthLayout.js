import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Suspense
                fallback={
                    <div className="flex h-full items-center justify-center">
                        <Spinner className="size-10" />
                    </div>
                }
            >
                <Outlet />
            </Suspense>
        </div>
    );
}

export default AuthLayout;
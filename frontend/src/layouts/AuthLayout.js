import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-zinc-50 px-4 py-8 flex items-center justify-center">
            <div className="w-full max-w-md">
                <Suspense
                    fallback={
                        <div className="flex min-h-[300px] items-center justify-center">
                            <Spinner className="size-10" />
                        </div>
                    }
                >
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
};

export default AuthLayout;
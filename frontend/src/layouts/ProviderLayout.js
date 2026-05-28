import ProviderHeader from "@/components/provider/ProviderHeader";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/hooks/auth/use-auth";
import { useCurrentProfile } from "@/hooks/auth/use-current-profile";
import ProviderStatusPage from "@/pages/provider/ProviderStatusPage";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const ProviderLayout = () => {
    const { user } = useAuth();
    useCurrentProfile();
    const isBlocked =
        user?.roleName === "PROVIDER" && !user?.isApproved;

    useCurrentProfile(isBlocked);


    return (
        <div className="h-screen flex overflow-hidden bg-zinc-100">
            <div className="shrink-0">
                <ProviderHeader />
            </div>

            <main className="flex-1 overflow-y-auto p-6">
                {isBlocked ? (
                    <ProviderStatusPage user={user} />
                ) : (
                    <Suspense fallback={<div className="flex h-full items-center justify-center"><Spinner className="size-10" /></div>}>
                        <Outlet />
                    </Suspense>
                )}
            </main>
        </div>
    );
};

export default ProviderLayout;
import ProviderHeader from "@/components/provider/ProviderHeader";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/hooks/auth/use-auth";
import { useCurrentProfile } from "@/hooks/auth/use-current-profile";
import ProviderStatusPage from "@/pages/provider/ProviderStatusPage";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const ProviderLayout = () => {
    const { user } = useAuth();

    const isBlocked =
        user?.roleName === "PROVIDER" &&
        !user?.isApproved;

    useCurrentProfile(isBlocked);

    return (
        <div className="min-h-screen bg-zinc-100">

            <div className="flex flex-col md:flex-row">
                <aside className="w-full md:w-72 md:min-h-screen md:sticky
                        md:top-0 md:self-start shrink-0"
                >
                    <ProviderHeader />
                </aside>

                <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 ">
                    {isBlocked ? (
                        <ProviderStatusPage user={user} />
                    ) : (
                        <Suspense
                            fallback={
                                <div className="flex min-h-[400px] items-center justify-center">
                                    <Spinner className="size-10" />
                                </div>
                            }
                        >
                            <Outlet />
                        </Suspense>
                    )}
                </main>
            </div>

        </div>
    );
};

export default ProviderLayout;
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

const UserLayout = () => {

    const location = useLocation();

    const isChatPage = location.pathname.startsWith("/chat");

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main
                className={
                    isChatPage
                        ? "flex-1 overflow-hidden p-6"
                        : "flex-1 p-6"
                }
            >
                <Suspense
                    fallback={
                        <div className="flex items-center justify-center ">
                            <Spinner className="size-10" />
                        </div>
                    }
                >
                    <Outlet />
                </Suspense>
            </main>
            {!isChatPage && <Footer />}
        </div>
    );
}

export default UserLayout;
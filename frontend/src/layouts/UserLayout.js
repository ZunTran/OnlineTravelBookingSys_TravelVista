import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

const UserLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 p-6" >
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
            <Footer />
        </div>
    );
}

export default UserLayout;
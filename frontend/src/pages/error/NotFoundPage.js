import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">

            <h1 className="text-8xl md:text-9xl font-bold tracking-tight">
                404
            </h1>

            <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
                Page Not Found
            </h2>

            <p className="mt-3 max-w-md text-gray-500">
                Không có gì ở đây cả.
            </p>
            <div className="mt-8 flex gap-4">
                <Link to="/">
                    <Button>
                        <ArrowLeft />Về trang chủ
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
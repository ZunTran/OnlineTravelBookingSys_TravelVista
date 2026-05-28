import { Button } from "@/components/ui/button";
import { ArrowLeft, Undo2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
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
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate(-1)}
                >
                    <Undo2 className="mr-2 h-4 w-4" />
                    Quay lại
                </Button>

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
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home, ReceiptText } from "lucide-react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const CheckoutSuccessPage = () => {
    const navigate = useNavigate();


    const location = useLocation();
    const orderId = location.state?.orderId;

    if (!location.state?.success) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="flex min-h-[80vh] items-center justify-center p-5">
            <div className="w-full max-w-md rounded-3xl border bg-white p-8 text-center shadow-sm">
                <CheckCircle2 className="mx-auto mb-4 h-20 w-20 text-green-500" />

                <h1 className="mb-2 text-3xl font-bold">
                    Đặt dịch vụ thành công
                </h1>

                <p className="mb-8 text-muted-foreground">
                    Cảm ơn bạn đã sử dụng TravelVista. Đơn đặt dịch vụ của bạn đã được ghi nhận.
                </p>

                <div className="flex flex-col gap-3">
                    {orderId && (
                        <Button onClick={() => navigate("/user/order")}>
                            <ReceiptText className="mr-2 h-4 w-4" />
                            Xem chi tiết đơn hàng
                        </Button>
                    )}

                    <Button
                        variant="outline"
                        onClick={() => navigate("/")}
                    >
                        <Home className="mr-2 h-4 w-4" />
                        Về trang chủ
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSuccessPage;
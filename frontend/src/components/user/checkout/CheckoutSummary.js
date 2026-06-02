import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/utils/format";

const CheckoutSummary = ({
    totalItems,
    totalPrice,
    onCheckout,
    isLoading = false,
}) => {

    return (
        <Card className="h-fit rounded-2xl lg:static lg:top-24">
            <CardContent className="space-y-5">
                <div className="flex justify-between text-sm">
                    <span>
                        Số loại dịch vụ:
                    </span>
                    <span>{totalItems}</span>
                </div>

                <div className="flex justify-between border-t pt-4 text-xl">
                    <span className="font-semibold">
                        Tổng tiền
                    </span>
                    <span className="text-red-500 font-bold ">
                        {formatPrice(Number(totalPrice))}
                    </span>
                </div>

                <Button
                    className="w-full"
                    disabled={isLoading}
                    onClick={onCheckout}
                >
                    {isLoading ? "Đang sử lý..." : "Xác nhận thanh toán"}

                </Button>
            </CardContent>

        </Card >
    );

}

export default CheckoutSummary;
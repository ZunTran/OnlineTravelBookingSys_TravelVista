import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/utils/format";

const CartSummary = ({ totalItems, totalPrice, onCheckout }) => {

    return (
        <Card className="h-fit rounded-2xl lg:sticky lg:top-24">
            <CardContent className="space-y-4">
                <div className="text-xl font-bold">
                    <span className="font-semibold text">Tổng sản phẩm: </span>
                    <span>{totalItems}</span>
                </div>

                <div className="flex justify-between border-t pt-4 font-semibold text-lg">
                    <span>Tổng tiền trong giỏ:</span>
                    <span className="text-2xl text-green-500">{formatPrice(totalPrice)}</span>
                </div>

                <Button
                    className="w-full"
                    onClick={onCheckout}
                    disabled={totalItems === 0}
                >
                    Thanh toán
                </Button>
            </CardContent>

        </Card>
    );
}

export default CartSummary;
import Loading from "@/components/common/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SUB_LABEL } from "@/constants/FilterMenu";
import useLoginRedirect from "@/hooks/auth/use-login-redirect";
import { useAddToCart } from "@/hooks/user/use-cart";
import { formatPrice } from "@/utils/format";
import { DoorOpen, Minus, Plus } from "lucide-react";
import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";

const SubItemCard = ({ subItem, type, isDisable }) => {

    const redirectToLogin = useLoginRedirect();
    const navigate = useNavigate();


    const [quantity, setQuantity] = useState(1);

    const addtoCartMutation = useAddToCart()

    const isUpdating =
        addtoCartMutation.isPending &&
        addtoCartMutation.variables?.id === subItem.sellableItemId;

    const isAvailable =
        subItem.itemStatus === "AVAILABLE" &&
        subItem.availableSlots > 0;

    const maxQuantity = subItem.availableSlots || 0;

    const text = SUB_LABEL[type] || SUB_LABEL.ROOM;

    const clampQuantity = (value) => {
        const numberValue = Number(value);

        if (Number.isNaN(numberValue) || numberValue < 1) {
            return 1;
        }

        if (numberValue > maxQuantity) {
            return maxQuantity;
        }

        return numberValue;
    };

    const handleQuantityChange = (e) => {
        setQuantity(clampQuantity(e.target.value));
    };

    const handleDecrease = () => {
        setQuantity((prev) => clampQuantity(prev - 1));
    };

    const handleIncrease = () => {
        setQuantity((prev) => clampQuantity(prev + 1));
    };

    const addToCart = () => {
        if (!isAvailable)
            return;

        addtoCartMutation.mutate({
            id: subItem.sellableItemId,
            quantity,
        });
    };


    const handleBuyNow = () => {
        if (!isAvailable)
            return;

        navigate("/checkout?mode=buy-now", {
            state: {
                item: {
                    itemId: subItem.sellableItemId,
                    subItemName: subItem.subItemName,
                    details: subItem.details,
                    price: subItem.price,
                    quantity,
                    serviceType: type
                }
            }
        })
    }


    return (
        <Card className="overflow-hidden rounded-2xl transition hover:shadow-md">

            {isUpdating && <Loading content={"Đang thêm vào giỏ hàng..."} />}
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-bold">
                            {subItem.subItemName}
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {subItem.details}
                        </p>
                    </div>

                    <Badge
                        className={
                            isAvailable
                                ? "bg-green-500"
                                : "bg-red-500"
                        }
                    >
                        {isAvailable
                            ? text.available
                            : text.unavailable}
                    </Badge>
                </div>

                <div className="grid gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <DoorOpen className="h-4 w-4" />
                        Còn {maxQuantity} {text.slot}
                    </div>
                </div>

                {isAvailable && (
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">
                            Số lượng
                        </span>

                        <div className="flex items-center rounded-md border">
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={handleDecrease}
                                disabled={quantity <= 1 || isUpdating}
                            >
                                <Minus className="h-4 w-4" />
                            </Button>

                            <Input
                                type="number"
                                min={1}
                                max={maxQuantity}
                                value={quantity}
                                onChange={handleQuantityChange}
                                disabled={isUpdating}
                                className="h-9 w-16 border-0 text-center focus-visible:ring-0"
                            />

                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={handleIncrease}
                                disabled={quantity >= maxQuantity || isUpdating}
                            >
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                )}

                <div className="flex items-center justify-between border-t pt-4">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            {subItem.price === 0 ? "Miễn phí" : text.price}
                        </p>

                        <p className="text-xl font-bold text-primary">
                            {subItem.price === 0 ? "Miễn phí" : formatPrice(subItem.price)}
                        </p>
                    </div>

                    {isDisable
                        ? (
                            <div className="flex gap-6">
                                <Button
                                    disabled={!isAvailable || isUpdating}
                                    onClick={addToCart}
                                    variant={isAvailable ? "default" : "ghost"}
                                >
                                    {isUpdating
                                        ? "Đang thêm..."
                                        : isAvailable
                                            ? "Thêm vào giỏ"
                                            : "Không khả dụng"
                                    }
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={handleBuyNow}
                                    disabled={!isAvailable || isUpdating}
                                >
                                    {text.button}
                                </Button>
                            </div>)

                        : <Button onClick={() => redirectToLogin()}>
                            Đăng nhập để tiếp tục
                        </Button>
                    }
                </div>
            </CardContent>
        </Card>
    );
};

export default memo(SubItemCard);
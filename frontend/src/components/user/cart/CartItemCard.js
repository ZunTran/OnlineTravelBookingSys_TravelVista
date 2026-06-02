import Confirm from "@/components/common/Confirm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/utils/format";
import { ImageIcon, Minus, Plus, Trash2 } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";

const CartItemCard = ({
    cartItem,
    onUpdateQuantity,
    onDelete,
    isUpdating = false,
}) => {


    const info = cartItem.sellableItemInfo;

    const [quantity, setQuantity] = useState(cartItem.quantity);
    const lastSyncedQuantity = useRef(cartItem.quantity);
    const [open, setOpen] = useState(false);

    const isAvailable =
        info.itemStatus === "AVAILABLE" &&
        info.availableSlots > 0;

    const totalPrice = quantity * info.currentPrice;


    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
            return;
        }

        setOpen(true);
    }

    useEffect(() => {
        lastSyncedQuantity.current = cartItem.quantity;
        setQuantity(cartItem.quantity);
    }, [cartItem.quantity]);

    useEffect(() => {
        if (quantity === lastSyncedQuantity.current) {
            return;
        }

        const timer = setTimeout(() => {
            onUpdateQuantity?.(cartItem.cartItemId, quantity);
            lastSyncedQuantity.current = quantity;
        }, 1000);

        return () => clearTimeout(timer);
    }, [quantity, cartItem.cartItemId, onUpdateQuantity]);

    return (
        <Card className="mb-4 grid gap-5 p-5 sm:grid-cols-[120px_1fr_auto]">
            <div className="h-28 overflow-hidden rounded-xl bg-muted">
                {info.thumbnailUrl ? (
                    <img
                        src={info.thumbnailUrl}
                        alt={info.serviceName}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <ImageIcon className="h-8 w-8" />
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold">{info.serviceName}</h3>

                    <Badge className={isAvailable ? "bg-green-500" : "bg-red-400"}>
                        {isAvailable ? "Khả dụng" : "Tạm ngưng"}
                    </Badge>
                </div>

                <p className="text-sm font-semibold">{info.subItemType}</p>

                <p className="text-sm text-muted-foreground">
                    Còn {info.availableSlots} slots
                </p>

                <p className="text-lg font-semibold">
                    {formatPrice(info.currentPrice)}
                </p>
            </div>

            <div className="flex flex-col items-end justify-between gap-4">
                <Button
                    variant="ghost"
                    size="icon"
                    disabled={isUpdating}
                    onClick={() => setOpen(true)}
                >
                    <Trash2 className="h-4 w-4 text-red-500" />
                </Button>

                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        disabled={isUpdating || !isAvailable}
                        onClick={handleDecrease}
                    >
                        <Minus className="h-4 w-4" />
                    </Button>

                    <span className="w-8 text-center font-semibold">
                        {quantity}
                    </span>

                    <Button
                        variant="outline"
                        size="icon"
                        disabled={
                            isUpdating ||
                            !isAvailable ||
                            quantity >= info.availableSlots
                        }
                        onClick={() =>
                            setQuantity((prev) =>
                                Math.min(info.availableSlots, prev + 1)
                            )
                        }
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>

                <p className="font-bold">
                    {formatPrice(totalPrice)}
                </p>
            </div>

            <Confirm
                open={open}
                setOpen={setOpen}
                onConfirm={() => onDelete?.(cartItem.cartItemId)}
                description="Bạn có muốn xóa dịch vụ này khỏi giỏ hàng không?"
                confirmText="Xóa"
            />

        </Card>
    );
};

export default memo(CartItemCard);
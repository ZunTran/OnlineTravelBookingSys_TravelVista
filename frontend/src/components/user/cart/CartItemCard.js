import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/utils/format";
import { ImageIcon, Minus, Plus, Trash2 } from "lucide-react";
import { memo } from "react";

const CartItemCard = ({ cartItem }) => {

    const info = cartItem.sellableItemInfo;

    const isAvailable =
        info.itemStatus === "AVAILABLE" &&
        info.availabelSlots > 0;

    const totalPrice = cartItem.quantity * info.currentPrice;

    return (
        <Card className="grid gap-5 mb-4 p-5 sm:grid-cols-[120px_1fr_auto]">
            <div className="h-28 overflow-hidden rounded-xl">
                {info.thumbnailUrl
                    ? (
                        <img
                            src={info.thumbnailUrl}
                            alt={info.serviceName}
                            className="h-full w-full object-fill"
                            loading="lazy"
                        />
                    )
                    : (
                        <div className="flex h-full items-center justify-center">
                            <ImageIcon className="h-8 w-8" />
                        </div>
                    )
                }
            </div>

            <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                    <h3>{info.serviceName}</h3>
                    <Badge className={isAvailable ? "bg-green-500" : "bg-red-400"}>
                        {isAvailable ? "Khả dụng" : "Tạm ngưng"}
                    </Badge>
                </div>
                <p className="text-sm font-semibold">
                    {info.subItemType}
                </p>

                <p className="text-sm">
                    Còn {info.availableSlots} slots
                </p>

                <p className="font-semibold text-lg">
                    {formatPrice(info.currentPrice)}
                </p>
            </div>

            <div className="flex flex-col items-end justify-between gap-4">
                <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4 text-red-500" />
                </Button>

                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        disabled={!isAvailable || cartItem.quantity <= 1}
                    >
                        <Minus className="h-4 w-4" />
                    </Button>

                    <span className="w-8 text-center font-semibold">
                        {cartItem.quantity}
                    </span>

                    <Button
                        variant="outline"
                        size="icon"
                        disabled={
                            !isAvailable ||
                            cartItem.quantity >= info.availableSlots
                        }
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
                <p className="font-bold">
                    {formatPrice(totalPrice)}
                </p>

            </div>
        </Card>
    );
}

export default memo(CartItemCard);
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/utils/format";
import { ImageIcon } from "lucide-react";
import { memo } from "react";

const CheckoutItemCard = ({ item }) => {

    const total = item.price * item.quantity;

    return (
        <Card className="grid rounded-2xl m-4 p-4 sm:grid-cols-[120px_1fr_auto]">
            <div className="h28 overflow-hidden rounded-xl">
                {item.thubnailUrl ? (
                    <img
                        src={item.thubnailUrl}
                        alt={item.name}
                        className="h-full w-full object-cover"
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
                <h3 className="font-bold">
                    {item.name || item.subItemName || "Dịch vụ"}
                </h3>
                <p className="text-sm font-semibold">
                    {item.details}
                </p>

                <p className="text-sm">
                    Số lượng: {" "}
                    <span className="font-semibold">
                        {item.quantity}
                    </span>
                </p>
            </div>

            <div className="flex flex-col item-end justify-between">
                <p className="text-sm">Đơn giá</p>

                <p className="font-semibold">{formatPrice(item.price)}</p>
                <p className="text-lg font-bold text-primary">{formatPrice(total)}</p>
            </div>
        </Card>
    );
}

export default memo(CheckoutItemCard);
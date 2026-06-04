import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/utils/format";

const ProviderOrderDetailCard = ({ item = {} }) => {

    return (

        <div
            key={item.detailId}
            className="rounded-xl border p-4"
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="font-semibold">
                        {item.serviceNameSnapshot}
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Nhà cung cấp: {item.providerNameSnapshot}
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                        {item.itemDescriptionSnapshot || "Không có mô tả"}
                    </p>
                </div>

                <Badge variant="outline">
                    {item.bookingStatus}
                </Badge>
            </div>

            <div className="mt-4 flex items-center justify-between border-t pt-3 text-sm">
                <span>
                    Số lượng: {item.quantity}
                </span>

                <span className="font-semibold">
                    {formatPrice(item.priceSnapshot)}
                </span>
            </div>
        </div>
    );
}

export default ProviderOrderDetailCard;
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/utils/format";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const ProviderOrderCart = ({
    order,
}) => {
    const navigate = useNavigate();

    const handleCard = (id) => {
        navigate(`/provider/order-detail/${id}`)
    }


    return (
        <Card
            key={order.orderId}
            className="p-4 cursor-pointer"
            onClick={() => handleCard(order.orderId)}
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-semibold">
                        #{order.orderId}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        {order.customerName}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        {order.customerPhone}
                    </p>
                </div>

                <div className="text-right">
                    <p className="font-bold">
                        {formatPrice(order.totalAmount)}
                    </p>

                    <p className="text-sm">
                        {order.paymentMethod}
                    </p>

                    <p
                        className={`text-sm font-medium ${order.paymentStatus ===
                            "PAY"
                            ? "text-green-600"
                            : "text-orange-600"
                            }`}
                    >
                        {order.paymentStatus}
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default memo(ProviderOrderCart);
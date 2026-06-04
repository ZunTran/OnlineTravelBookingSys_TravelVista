import CustomerInfoSkeleton from "@/components/common/skeleton/CustomerInfoSkeleton";
import OrderSkeleton from "@/components/common/skeleton/OrderSkeleton";
import ProviderOrderDetailCard from "@/components/provider/order/ProviderOrderDetailCard";
import { Badge } from "@/components/ui/badge";
import CustomerInfoBox from "@/components/user/checkout/CustomerInfoBox";
import SectionHeader from "@/components/user/SectionHeader";
import { useDetailProviderOrder } from "@/hooks/provider/use-provider-orders";
import { formatDateTime } from "@/utils/format";
import { useParams } from "react-router-dom";

export const ProviderOrderDetailPage = () => {
    const { id } = useParams();

    const orderId = Number(id);

    const { data, isLoading } = useDetailProviderOrder(orderId);

    const order = data?.data || {};

    if (!order) return null;


    const customer = order.customerInfo;


    if (isLoading)
        return (
            <section className="space-y-5">
                <CustomerInfoSkeleton />
                <OrderSkeleton />
            </section>
        );


    return (
        <section className="space-y-5">
            <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">
                        Đơn hàng #{order.orderId}
                    </h1>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>
                            {formatDateTime(order.createdAt)}
                        </span>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Badge variant="outline">
                        {order.paymentMethodName}
                    </Badge>

                    <Badge>
                        {order.paymentStatus}
                    </Badge>
                </div>
            </div>
            <CustomerInfoBox customer={customer} />

            <SectionHeader
                title={"Dịch vụ đã đặt"}
            />
            {order.orderDetailsList.map((item) => (
                <ProviderOrderDetailCard key={item.detailId} item={item} />
            ))}

        </section>
    );

}

export default ProviderOrderDetailPage;
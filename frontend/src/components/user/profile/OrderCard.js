import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatPrice } from "@/utils/format";
import { fromNow } from "@/utils/date";
import { memo } from "react";
import { Button } from "@/components/ui/button";

const OrderCard = ({ order }) => {
    return (
        <Card className="rounded-2xl mx-5">
            <CardHeader className="border-b">
                <div className="flex flex-col gap-2 pb-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="font-bold">
                            Đơn hàng #{order.orderId}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {order.providerName} • {fromNow(order.createdAt)}
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Badge>{order.paymentMethod}</Badge>
                        <Badge variant="outline">
                            {order.paymentStatus}
                        </Badge>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-4 p-5">
                {order.orderDetailsList?.map((item) => (
                    <div
                        key={item.detailId}
                        className="flex items-start justify-between gap-4 rounded-xl border p-4"
                    >
                        <div>
                            <p className="font-semibold">
                                {item.serviceName}
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Số lượng: {item.quantity}
                            </p>

                            <p className="text-sm ">
                                Trạng thái booking: {item.bookingStatus}
                            </p>
                        </div>

                        <div className="text-right">
                            {item.isReviewed
                                ? <p className="text-green-500">Đã đánh giá</p>
                                : <Button
                                    variant="outline"
                                >
                                    Đánh giá
                                </Button>}

                            <p className="font-semibold text-lg mt-2">
                                {formatPrice(item.priceSnapshot)}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="flex justify-end border-t pt-4">
                    <p className="text-lg font-bold">
                        Tổng tiền: {formatPrice(order.totalAmount)}
                    </p>
                </div>

            </CardContent>
        </Card>
    );
};

export default memo(OrderCard);
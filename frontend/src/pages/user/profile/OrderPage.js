import EmptyState from "@/components/common/Empty";
import OrderSkeleton from "@/components/common/skeleton/OrderSkeleton";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import OrderCard from "@/components/user/profile/OrderCard";
import { useOrders } from "@/hooks/user/use-order";

const OrderPage = () => {

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
    } = useOrders();

    const orders = data?.pages.flatMap((page) => page.data.content) || [];

    if (isLoading) {
        return (<OrderSkeleton />);
    }

    return (
        <Card className="space-y-5">
            <CardHeader CardHeader >
                <CardTitle className="text-2xl font-bold">
                    Lịch sử đặt dịch vụ
                </CardTitle>
                <CardDescription >
                    Theo dõi các đơn dịch vụ bạn đã đặt.
                </CardDescription>
            </CardHeader >

            {orders.length === 0
                ? (<EmptyState
                    title="Không có gì ở đây cả"
                    description="Booking dịch vụ để có lịch sử"

                />)
                : (
                    <>
                        <div className="space-y-4">
                            {orders.map((order) => (
                                <OrderCard
                                    key={order.orderId}
                                    order={order}
                                />
                            ))}
                        </div>

                        {hasNextPage ? (
                            <Button
                                onClick={() => fetchNextPage()}
                                disabled={isFetchingNextPage}
                            >
                                {isFetchingNextPage
                                    ? "Đang tải..."
                                    : "Xem thêm"}
                            </Button>
                        )
                            : <p className="text-center ">Hết rồi.</p>
                        }
                    </>
                )}

        </Card>
    );

}

export default OrderPage;
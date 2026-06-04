import EmptyState from "@/components/common/Empty";
import OrderSkeleton from "@/components/common/skeleton/OrderSkeleton";
import PaymentStatusFilter from "@/components/provider/order/PaymentStatusFilter";
import ProviderOrderCard from "@/components/provider/order/ProviderOrderCard";
import { Button } from "@/components/ui/button";
import useSearchFilter from "@/hooks/common/use-search-filter";
import { useProviderOrders } from "@/hooks/provider/use-provider-orders";

const ProviderOrderPage = () => {

    const {
        getParam, clearAllParams, handleFilterChange
    } = useSearchFilter();

    const filters = {
        paymentStatus: getParam("paymentStatus", ""),
        // transactionReference: getParam("paymentStatus", null)
    }


    const {
        data,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useProviderOrders(filters);

    const orders =
        data?.pages.flatMap(
            (page) => page?.data?.content || []
        ) || [];

    if (isLoading)
        return (
            <OrderSkeleton />
        );


    if (orders.length === 0)
        return (
            <EmptyState
                title="Không có đơn hàng phù hợp"
                description="Thay đổi bộ lọc thử xem."
                action={<Button onClick={clearAllParams}>Bỏ lọc</Button>}
            />
        );

    return (
        <section className="space-y-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <PaymentStatusFilter filters={filters} onChange={handleFilterChange} isShowLabel={false} />
                <Button onClick={clearAllParams}>Bỏ lọc</Button>
            </div>


            {orders.map((order) => (
                <ProviderOrderCard key={order.orderId} order={order} />
            ))}

            {hasNextPage
                ? (
                    <div className="flex justify-center pt-4">
                        <Button
                            onClick={() => fetchNextPage()}
                            disabled={isFetchingNextPage}
                        >
                            {isFetchingNextPage ? "Đang tải..." : "Xem thêm"}
                        </Button>
                    </div>
                )
                : <p className="text-center ">Hết rồi.</p>

            }

        </section>
    );

}

export default ProviderOrderPage;
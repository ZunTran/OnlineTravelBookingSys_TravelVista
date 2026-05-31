import EmptyState from "@/components/common/Empty";
import ServiceCard from "@/components/common/ServiceCard";
import ServiceCardSkeleton from "@/components/common/skeleton/ServiceCardSkeleton";
import { Button } from "@/components/ui/button";
import ServiceFilter from "@/components/user/ServiceFilter";
import useSearchFilter from "@/hooks/common/use-search-filter";
import { useServices } from "@/hooks/service/use-service";
import { useMemo } from "react";

const HomePage = () => {

    const {
        getParam,
        handleFilterChange,
    } = useSearchFilter();

    const filters = useMemo(() => ({
        page: Number(getParam("page", 1)),
        size: 20,
        serviceType: getParam("serviceType", null),
        cateId: getParam("cateId", null),
        name: getParam("name", null),
    }), [getParam]);


    const {
        data,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useServices(filters);

    const services = data?.pages.flatMap((page) => page.content) || [];

    const hasServices = services.length > 0;

    return (
        <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">

            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">
                    Dịch vụ du lịch
                </h1>

                <p className="text-muted-foreground">
                    Kết nối với nhiều tour, khách sạn và phương tiện
                </p>
            </div>

            <ServiceFilter
                filters={filters}
                categories={[]}
                onChange={handleFilterChange}
                showServiceType={true}
            />

            {isLoading ? (
                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                    <ServiceCardSkeleton length={8} />
                </div>
            ) : !hasServices ? (
                <div className="flex min-h-[40vh] flex-col items-center justify-center5rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-8">
                    <EmptyState
                        title="Không tìm thấy dịch vụ phù hợp."
                        description="Thử thay đổi từ khóa hoặc bộ lọc để tìm kiếm lại xem sao nhé."
                    />
                </div>
            ) : (<>
                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.serviceId}
                            service={service}
                        />
                    ))}
                </div>
                (
                (hasNextPage) ? (
                <div className="flex justify-center">
                    <Button
                        onClick={() => fetchNextPage()}
                        disabled={isFetchingNextPage}
                    >
                        {
                            isFetchingNextPage
                                ? "Đang tải..."
                                : "Xem thêm"
                        }
                    </Button>
                </div>
                )
                : <p className="text-center">Hết</p>
                )

            </>
            )}
        </div>
    );
}

export default HomePage;
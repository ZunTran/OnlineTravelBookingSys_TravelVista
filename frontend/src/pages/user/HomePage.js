import EmptyState from "@/components/common/Empty";
import ServiceCard from "@/components/common/ServiceCard";
import ServiceCardSkeleton from "@/components/common/skeleton/ServiceCardSkeleton";
import { Button } from "@/components/ui/button";
import ServiceFilter from "@/components/user/ServiceFilter";
import useSearchFilter from "@/hooks/common/use-search-filter";
import { useCategories, useServices } from "@/hooks/service/use-service";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    const { getParam, handleFilterChange, clearAllParams } = useSearchFilter();

    const filters = useMemo(() => ({
        page: Number(getParam("page", 1)),
        size: 20,

        serviceType: getParam("serviceType", ""),
        cateId: getParam("cateId", ""),
        name: getParam("name", ""),

        location: getParam("location", ""),
        minPrice: getParam("minPrice", ""),
        maxPrice: getParam("maxPrice", ""),
        sortBy: getParam("sortBy", ""),
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

    const { data: cateData, isLoading: isLoadingCate } = useCategories();

    const categories = cateData?.data || [];


    const handleDetail = (serviceType, serviceId) => {
        navigate(`/${serviceType}/${serviceId}`);
    };


    const renderContent = () => {
        if (isLoading || isLoadingCate) {
            return (
                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                    <ServiceCardSkeleton length={8} />
                </div>
            );
        }

        if (!hasServices) {
            return (
                <EmptyState
                    title="Không có dịch vụ."
                    description="Hôm khác quay lại nhé."
                />
            );
        }

        return (
            <section className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.serviceId}
                            service={service}
                            onClick={handleDetail}
                        />
                    ))}
                </div>

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
    };


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
                categories={categories}
                onChange={handleFilterChange}
                showServiceType={true}
                onReset={clearAllParams}
            />

            {renderContent()}
        </div>
    );
}

export default HomePage;
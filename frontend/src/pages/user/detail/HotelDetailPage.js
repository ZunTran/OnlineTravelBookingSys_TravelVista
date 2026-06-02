import ServiceOverviewSkeleton from "@/components/common/skeleton/ServiceOverviewSkeleton";
import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import DetailHeader from "@/components/user/detail/review/DetailHeader";
import HotelInfoCards from "@/components/user/detail/hotel/HotelInfoCards";
import SaleOptions from "@/components/user/detail/SaleOptions";
import ServiceOverview from "@/components/user/detail/ServiceOverview";
import { useServiceDetail, useSubItemService } from "@/hooks/service/use-service";
import NotFoundPage from "@/pages/error/NotFoundPage";
import { useParams } from "react-router-dom";
import { ReviewSection } from "@/routers/LazyPages";

const HotelDetailPage = () => {
    const { id } = useParams();

    const hotelId = Number(id);

    const {
        data: servicesData,
        isLoading: isLoadingService,
        error } = useServiceDetail(hotelId);

    const {
        data: subItemData,
        isLoading: isLoadingSubItem,
    } = useSubItemService(hotelId);


    if (error || Number.isNaN(hotelId))
        return (<NotFoundPage />);

    const hotel = servicesData?.data || [];
    const subItems = subItemData?.data?.sellableGiaoDienList || [];

    return (
        <section className="space-y-5">
            <DetailHeader title={hotel.name} />

            {isLoadingService
                ? (
                    <>
                        <StatsSkeleton length={3} />
                        <ServiceOverviewSkeleton />
                    </>
                )
                : (
                    <>
                        <HotelInfoCards details={hotel.hotelDetails} />
                        <ServiceOverview service={hotel} />
                        <SaleOptions
                            items={subItems}
                            isLoading={isLoadingSubItem}
                            type="ROOM"
                        />
                        <ReviewSection serviceId={hotelId} />
                    </>
                )
            }
        </section>
    );

}

export default HotelDetailPage;
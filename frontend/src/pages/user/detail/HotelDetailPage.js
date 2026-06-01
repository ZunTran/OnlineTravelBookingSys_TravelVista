import ServiceOverviewSkeleton from "@/components/common/skeleton/ServiceOverviewSkeleton";
import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import DetailHeader from "@/components/user/detail/review/DetailHeader";
import HotelInfoCards from "@/components/user/detail/hotel/HotelInfoCards";
import SaleOptions from "@/components/user/detail/SaleOptions";
import ServiceOverview from "@/components/user/detail/ServiceOverview";
import { useReviews, useServiceDetail, useSubItemService } from "@/hooks/service/use-service";
import NotFoundPage from "@/pages/error/NotFoundPage";
import { useParams } from "react-router-dom";
import ReviewSection from "@/components/user/detail/review/ReviewSection";

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

    const {
        data: reviewData,
        isLoading: isLaodingReview,
    } = useReviews(hotelId);

    if (error || Number.isNaN(hotelId))
        return (<NotFoundPage />);

    const hotel = servicesData?.data || [];
    const subItems = subItemData?.data?.sellableGiaoDienList || [];
    const reviews = reviewData?.data?.customerReviewsFeedback || [];

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
                        <ReviewSection
                            isLoading={isLaodingReview}
                            reviews={reviews}
                        />
                    </>
                )
            }
        </section>
    );

}

export default HotelDetailPage;
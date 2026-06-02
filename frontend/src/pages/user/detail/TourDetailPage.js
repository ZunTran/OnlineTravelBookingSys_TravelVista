import ServiceOverviewSkeleton from "@/components/common/skeleton/ServiceOverviewSkeleton";
import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import DetailHeader from "@/components/user/detail/review/DetailHeader";
import ReviewSection from "@/components/user/detail/review/ReviewSection";
import SaleOptions from "@/components/user/detail/SaleOptions";
import ServiceOverview from "@/components/user/detail/ServiceOverview";
import TourInfoCards from "@/components/user/detail/tour/TourInfoCards";
import { useReviews, useServiceDetail, useSubItemService } from "@/hooks/service/use-service";
import NotFoundPage from "@/pages/error/NotFoundPage";
import { useParams } from "react-router-dom";

const TourDetailPage = () => {

    const { id } = useParams();
    const tourId = Number(id);

    const {
        data: tourData,
        isLoading: loadingTour,
        error } = useServiceDetail(tourId);

    const {
        data: subItemData,
        isLoading: loadingSubitem
    } = useSubItemService(tourId);

    const {
        data: reviewData,
        isLoading: loadingReviews,
    } = useReviews(tourId);

    if (error || Number.isNaN(tourId))
        return (<NotFoundPage />);

    const subItems = subItemData?.data?.sellableGiaoDienList || [];
    const tour = tourData?.data || [];
    const reviews = reviewData?.data?.customerReviewsFeedback || [];

    return (
        <section className="space-y-6">
            <DetailHeader title={tour?.name} />

            {loadingTour
                ? (
                    <>
                        <StatsSkeleton />
                        <ServiceOverviewSkeleton />
                    </>
                )
                : (
                    <>
                        <TourInfoCards tourDetails={tour?.tourDetails} />
                        <ServiceOverview service={tour} />
                        <SaleOptions
                            items={subItems}
                            isLoading={loadingSubitem}
                            type="SCHEDULE"
                        />
                        <ReviewSection
                            isLoading={loadingReviews}
                            reviews={reviews}
                        />
                    </>
                )
            }

        </section>
    );
}

export default TourDetailPage;
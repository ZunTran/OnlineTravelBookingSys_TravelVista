import ServiceOverviewSkeleton from "@/components/common/skeleton/ServiceOverviewSkeleton";
import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import { ReviewSection, SaleOptions } from "@/components/LazyComponent";
import DetailHeader from "@/components/user/detail/review/DetailHeader";
import ServiceOverview from "@/components/user/detail/ServiceOverview";
import TourInfoCards from "@/components/user/detail/tour/TourInfoCards";
import { useAuth } from "@/hooks/auth/use-auth";
import { useReviews, useServiceDetail, useSubItemService } from "@/hooks/service/use-service";
import NotFoundPage from "@/pages/error/NotFoundPage";
import { useParams } from "react-router-dom";

const TourDetailPage = () => {

    const { isAuthenticated } = useAuth();

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
                        isAuthenticated={isAuthenticated}
                        <ServiceOverview service={tour} isAuthenticated={isAuthenticated} />
                        <SaleOptions
                            items={subItems}
                            isLoading={loadingSubitem}
                            type="SCHEDULE"
                            isAuthenticated={isAuthenticated}
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
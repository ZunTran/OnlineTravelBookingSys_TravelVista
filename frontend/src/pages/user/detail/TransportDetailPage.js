import ServiceOverviewSkeleton from "@/components/common/skeleton/ServiceOverviewSkeleton";
import { ReviewSection, SaleOptions } from "@/components/LazyComponent";
import DetailHeader from "@/components/user/detail/review/DetailHeader";
import ServiceOverview from "@/components/user/detail/ServiceOverview";
import { useReviews, useServiceDetail, useSubItemService } from "@/hooks/service/use-service";
import NotFoundPage from "@/pages/error/NotFoundPage";
import { useParams } from "react-router-dom";

const TransportDetailPage = () => {

    const { id } = useParams()
    const transportId = Number(id);

    const {
        data: transportData,
        isLoading: loadingTransport,
        error } = useServiceDetail(transportId);

    const {
        data: subitemData,
        isLoading: loadingSubitem
    } = useSubItemService(transportId);

    const {
        data: reviewsData,
        isLoading: loadingReviews
    } = useReviews(transportId);


    if (error || Number.isNaN(transportId))
        return (<NotFoundPage />);


    const transport = transportData?.data || [];
    const subItems = subitemData?.data?.sellableGiaoDienList || [];
    const reviews = reviewsData?.data?.customerReviewsFeedback || [];

    return (
        <section className="space-y-6">
            <DetailHeader title={transport?.name} />

            {loadingTransport
                ? (
                    <ServiceOverviewSkeleton />
                )
                : (
                    <div className="space-y-20">
                        <ServiceOverview service={transport} />
                        <SaleOptions
                            items={subItems}
                            isLoading={loadingSubitem}
                            type="TICKET"
                        />
                        <ReviewSection
                            reviews={reviews}
                            isLoading={loadingReviews}
                        />
                    </div>
                )
            }

        </section>
    );
}

export default TransportDetailPage;
import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import DetailHeader from "@/components/user/detail/DetailHeader";
import SaleOptions from "@/components/user/detail/SaleOptions";
import ServiceOverview from "@/components/user/detail/ServiceOverview";
import TourInfoCards from "@/components/user/detail/tour/TourInfoCards";
import { useServiceDetail, useSubItemService } from "@/hooks/service/use-service";
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

    if (error || Number.isNaN(tourId))
        return (<NotFoundPage />);

    const subItems = subItemData?.data?.sellableGiaoDienList || [];

    const tour = tourData?.data || [];

    return (
        <section className="space-y-6">
            <DetailHeader title={tour?.name} />

            {loadingTour
                ? (
                    <>
                        <StatsSkeleton />
                        <ServiceOverview />
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
                    </>
                )
            }

        </section>
    );
}

export default TourDetailPage;
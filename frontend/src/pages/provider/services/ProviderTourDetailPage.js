import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import TableSkeleton from "@/components/common/skeleton/TableSkeleton";
import DetailHeader from "@/components/provider/services-detail/DetailHeader";
import TourInfoCards from "@/components/provider/services-detail/TourInfoCard";
import TourSchedulesTable from "@/components/provider/services-detail/TourSchedulesTable";
import { useProviderTourDetail } from "@/hooks/provider/use-provider-services";
import { useParams } from "react-router-dom";

const ProviderTourDetailPage = () => {

    const { id } = useParams();
    const tourId = Number(id);

    const { data, isLoading } = useProviderTourDetail(tourId);

    const tour = data || [];


    return (
        <section className="space-y-6">
            <DetailHeader title={tour?.name} />

            {isLoading
                ? (
                    <>
                        <StatsSkeleton length={3} />
                        <TableSkeleton columns={4} />
                    </>
                )
                : (
                    <>
                        <TourInfoCards tour={tour} />

                        <TourSchedulesTable schedules={tour?.schedules || []} />
                    </>
                )
            }


        </section>
    );
};

export default ProviderTourDetailPage;
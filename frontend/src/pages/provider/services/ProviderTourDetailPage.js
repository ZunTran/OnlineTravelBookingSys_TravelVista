import DetailHeader from "@/components/provider/services-detail/DetailHeader";
import TourInfoCards from "@/components/provider/services-detail/TourInfoCard";
import TourSchedulesTable from "@/components/provider/services-detail/TourSchedulesTable";

const ProviderTourDetailPage = () => {

    const tour = [];

    return (
        <section className="space-y-6">
            <DetailHeader title={tour?.name} />

            <TourInfoCards tour={tour} />

            <TourSchedulesTable schedules={tour?.schedules || []} />
        </section>
    );
};

export default ProviderTourDetailPage;
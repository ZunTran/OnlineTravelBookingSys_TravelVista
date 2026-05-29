import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import TableSkeleton from "@/components/common/skeleton/TableSkeleton";
import DetailHeader from "@/components/provider/services-detail/DetailHeader";
import HotelInfoCards from "@/components/provider/services-detail/HotelInfoCard";
import HotelRoomsTable from "@/components/provider/services-detail/HotelRoomsTable";
import { useProviderHotelDetail } from "@/hooks/provider/use-provider-services";
import NotFoundPage from "@/pages/error/NotFoundPage";
import { useParams } from "react-router-dom";

const ProviderHotelDetailPage = () => {
    const { id } = useParams();
    const hotelId = Number(id);

    const { data, isLoading, error, isError } = useProviderHotelDetail(hotelId);


    if (error?.response?.status === 404 || isError || Number.isNaN(hotelId))
        return (
            <NotFoundPage />
        );

    const hotel = data || [];

    return (
        <section className="space-y-6">
            <DetailHeader title={hotel?.name} />

            {isLoading
                ? (
                    <>
                        <StatsSkeleton length={3} />
                        <TableSkeleton columns={6} />
                    </>
                )
                : (
                    <>
                        <HotelInfoCards hotel={hotel} />
                        <HotelRoomsTable rooms={hotel?.rooms || []} />
                    </>
                )}
        </section>
    );
};

export default ProviderHotelDetailPage;
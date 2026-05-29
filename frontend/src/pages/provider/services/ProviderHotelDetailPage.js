import DetailHeader from "@/components/provider/services-detail/DetailHeader";
import HotelInfoCards from "@/components/provider/services-detail/HotelInfoCard";
import HotelRoomsTable from "@/components/provider/services-detail/HotelRoomsTable";

const ProviderHotelDetailPage = () => {
    const hotel = [];

    return (
        <section className="space-y-6">
            <DetailHeader title={hotel?.name} />

            <HotelInfoCards hotel={hotel} />

            <HotelRoomsTable rooms={hotel?.rooms || []} />
        </section>
    );
};

export default ProviderHotelDetailPage;
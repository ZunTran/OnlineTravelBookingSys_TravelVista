import DetailHeader from "@/components/provider/services-detail/DetailHeader";
import TransportInfoCards from "@/components/provider/services-detail/TransportInoCard";
import TransportTicketsTable from "@/components/provider/services-detail/TransportTicketsTable";

const ProviderTransportDetailPage = () => {

    const transport = [];


    return (
        <section className="space-y-6">
            <DetailHeader title={transport?.name} />

            <TransportInfoCards transport={transport} />

            <TransportTicketsTable
                tickets={transport?.tickets || []}
            />
        </section>
    );
};

export default ProviderTransportDetailPage;
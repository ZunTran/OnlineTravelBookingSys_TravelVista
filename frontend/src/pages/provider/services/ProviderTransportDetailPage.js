import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import TableSkeleton from "@/components/common/skeleton/TableSkeleton";
import DetailHeader from "@/components/provider/services-detail/DetailHeader";
import TransportInfoCards from "@/components/provider/services-detail/TransportInoCard";
import TransportTicketsTable from "@/components/provider/services-detail/TransportTicketsTable";
import { useProviderTransportDetail } from "@/hooks/provider/use-provider-services";
import { useParams } from "react-router-dom";

const ProviderTransportDetailPage = () => {

    const { id } = useParams();
    const transportId = Number(id);

    const { data, isLoading } = useProviderTransportDetail(transportId);
    const transport = data || [];


    return (
        <section className="space-y-6">
            <DetailHeader title={transport?.name} />

            {isLoading
                ? (
                    <>
                        <StatsSkeleton length={4} />
                        <TableSkeleton columns={6} rows={5} />
                    </>
                )
                : (
                    <>
                        <TransportInfoCards transport={transport} />
                        <TransportTicketsTable
                            tickets={transport?.tickets || []}
                        />
                    </>
                )
            }
        </section>
    );
};

export default ProviderTransportDetailPage;
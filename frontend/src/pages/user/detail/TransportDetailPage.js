import ServiceOverviewSkeleton from "@/components/common/skeleton/ServiceOverviewSkeleton";
import DetailHeader from "@/components/user/detail/DetailHeader";
import SaleOptions from "@/components/user/detail/SaleOptions";
import ServiceOverview from "@/components/user/detail/ServiceOverview";
import { useServiceDetail, useSubItemService } from "@/hooks/service/use-service";
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


    if (error || Number.isNaN(transportId))
        return (<NotFoundPage />);


    const transport = transportData?.data || [];
    const subItems = subitemData?.data?.sellableGiaoDienList || [];


    return (
        <section className="space-y-6">
            <DetailHeader title={transport?.name} />

            {loadingTransport
                ? (
                    <ServiceOverviewSkeleton />
                )
                : (
                    <>
                        <ServiceOverview service={transport} />
                        <SaleOptions
                            items={subItems}
                            isLoading={loadingSubitem}
                            type="TICKET"
                        />
                    </>
                )
            }

        </section>
    );
}

export default TransportDetailPage;
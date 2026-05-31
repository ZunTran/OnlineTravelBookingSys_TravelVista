import { useServiceDetail } from "@/hooks/service/use-service";
import NotFoundPage from "@/pages/error/NotFoundPage";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const TransportDetailPage = () => {

    const { id } = useParams()
    const transportId = Number(id);
    const { data, isLoading, error } = useServiceDetail(transportId);

    if (isLoading) {
        toast.warning("Dang tai...");
    }

    if (error || Number.isNaN(transportId))
        return (<NotFoundPage />);

    const transport = data?.data || [];
    console.log("data: ", transport);



    return (
        <div>transport detail</div>
    );
}

export default TransportDetailPage;
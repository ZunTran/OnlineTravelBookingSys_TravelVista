import { useServiceDetail } from "@/hooks/service/use-service";
import NotFoundPage from "@/pages/error/NotFoundPage";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const TourDetailPage = () => {

    const { id } = useParams();
    const tourId = Number(id);

    const { data, isLoading, error } = useServiceDetail(tourId);

    if (error || Number.isNaN(tourId))
        return (<NotFoundPage />);
    if (isLoading)
        toast.warning('Dang tai...');

    const tour = data?.data || [];
    console.log("data: ", tour);

    return (
        <div>Tour detail</div>
    );
}

export default TourDetailPage;
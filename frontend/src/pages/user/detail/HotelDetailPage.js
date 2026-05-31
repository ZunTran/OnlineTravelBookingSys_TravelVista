import { useServiceDetail } from "@/hooks/service/use-service";
import NotFoundPage from "@/pages/error/NotFoundPage";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const HotelDetailPage = () => {
    const { id } = useParams();

    const hotelId = Number(id);

    const { data, isLoading, error } = useServiceDetail(hotelId);


    if (isLoading) {
        toast.warning('Dang tai...');
    }

    if (error || Number.isNaN(hotelId))
        return (<NotFoundPage />);

    const hotel = data?.data || [];
    console.log('data: ', hotel);



    return (
        <div>HOtel detail</div>
    );

}

export default HotelDetailPage;
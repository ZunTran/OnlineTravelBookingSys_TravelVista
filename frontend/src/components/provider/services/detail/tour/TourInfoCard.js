import InfoCard from "../InfoCard";
import { CalendarDays, MapPin } from "lucide-react";

const TourInfoCards = ({ tour }) => {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            <InfoCard
                icon={MapPin}
                label="Điểm khởi hành"
                value={tour?.departureLocation}
            />

            <InfoCard
                icon={MapPin}
                label="Điểm đến"
                value={tour?.destinationLocation}
            />

            <InfoCard
                icon={CalendarDays}
                label="Số lịch trình"
                value={tour?.schedules?.length || 0}
            />
        </div>
    );
};

export default TourInfoCards;
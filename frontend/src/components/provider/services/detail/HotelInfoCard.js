import InfoCard from "./InfoCard";
import { Building2, MapPin, DoorOpen } from "lucide-react";

const HotelInfoCards = ({ hotel }) => {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            <InfoCard
                icon={Building2}
                label="Tên khách sạn"
                value={hotel?.name}
            />

            <InfoCard
                icon={MapPin}
                label="Địa chỉ"
                value={hotel?.address}
            />

            <InfoCard
                icon={DoorOpen}
                label="Số loại phòng"
                value={hotel?.rooms?.length || 0}
            />
        </div>
    );
};

export default HotelInfoCards;
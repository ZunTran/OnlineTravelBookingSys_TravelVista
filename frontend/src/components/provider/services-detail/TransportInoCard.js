import InfoCard from "./InfoCard";
import { Bus, MapPin, Users } from "lucide-react";

const TransportInfoCards = ({ transport }) => {
    return (
        <div className="grid gap-4 md:grid-cols-4">
            <InfoCard
                icon={Bus}
                label="Hãng xe"
                value={transport?.brandName}
            />

            <InfoCard
                icon={Users}
                label="Loại xe"
                value={transport?.vehicleType}
            />

            <InfoCard
                icon={MapPin}
                label="Điểm đi"
                value={transport?.departureStation}
            />

            <InfoCard
                icon={MapPin}
                label="Điểm đến"
                value={transport?.arrivalStation}
            />
        </div>
    );
};

export default TransportInfoCards;
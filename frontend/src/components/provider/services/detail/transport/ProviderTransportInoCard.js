import InfoCard from "@/components/common/InfoCard";
import { MapPin, Plane, Users } from "lucide-react";


const ProviderTransportInfoCards = ({ transport }) => {

    const defaultValue = "Chưa cập nhật"
    console.log(transport)

    const items = [
        {
            icon: Plane,
            label: "Brand",
            value: transport?.brandName || defaultValue,
        },

        {
            icon: Users,
            label: "Loại phương tiện",
            value: transport?.vehicleType || defaultValue,
        },
        {
            icon: MapPin,
            label: "Điểm đi",
            value: transport?.departureStation || defaultValue,
        },
        {
            icon: MapPin,
            label: "Điểm đến",
            value: transport?.arrivalStation || defaultValue,
        },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-4">
            {items.map((item) => {
                const Icon = item.icon;

                return (
                    <InfoCard
                        key={item.label}
                        icon={Icon}
                        label={item.label}
                        value={item.value}
                    />
                );
            })}
        </div>
    );
};

export default ProviderTransportInfoCards;
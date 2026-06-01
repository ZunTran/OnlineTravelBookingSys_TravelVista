import InfoCard from "@/components/common/InfoCard";
import { Calendar1, MapPin, } from "lucide-react";

const TourInfoCards = ({ tourDetails }) => {
    const defaultValue = "Chưa cập nhật";

    const items = [
        {
            icon: MapPin,
            label: "Điểm khởi hành",
            value: tourDetails?.departure || defaultValue,
        },
        {
            icon: MapPin,
            label: "Điểm đến",
            value: tourDetails?.destination || defaultValue,
        },
        {
            icon: Calendar1,
            label: "Số ngày",
            value: tourDetails?.days || 0,
        },
        {
            icon: Calendar1,
            label: "Số đêm",
            value: tourDetails?.nights || 0,
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

export default TourInfoCards;
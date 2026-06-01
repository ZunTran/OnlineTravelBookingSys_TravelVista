import InfoCard from "@/components/common/InfoCard";
import { MapPin, Star, Wifi } from "lucide-react";

const HotelInfoCards = ({ details }) => {
    const defaultValue = "Chưa cập nhật";

    const items = [
        {
            icon: MapPin,
            label: "Địa chỉ",
            value: `${details?.address || defaultValue}, ${details?.city || defaultValue}`,
        },
        {
            icon: Star,
            label: "Hạng sao",
            value: `${details?.starRating ?? 0} sao`,
        },
        {
            icon: Wifi,
            label: "Tiện ích",
            value: details?.amenities || defaultValue,
        },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-3">
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

export default HotelInfoCards;
import InfoCard from "@/components/common/InfoCard";
import { Building2, DoorOpen, MapPin } from "lucide-react";

const ProviderHotelInfoCards = ({ hotel }) => {

    const defaultValue = "Chưa cập nhật"

    const items = [
        {
            icon: Building2,
            label: "Tên khách sạn",
            value: hotel?.name || defaultValue,
        },

        {
            icon: MapPin,
            label: "Địa chỉ",
            value: hotel?.address || defaultValue,
        },
        {
            icon: DoorOpen,
            label: "Số loại phòng",
            value: hotel?.rooms.length || defaultValue,
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
                        value={item.value
                        }
                    />
                );
            })}
        </div>
    );
};

export default ProviderHotelInfoCards;
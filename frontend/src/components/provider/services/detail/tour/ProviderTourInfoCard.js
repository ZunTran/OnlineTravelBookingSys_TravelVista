import InfoCard from "@/components/common/InfoCard";
import { CalendarDays, MapPin } from "lucide-react";

const ProviderTourInfoCards = ({ tour }) => {
    console.log(tour);
    const defaultValue = "Chưa cập nhật"

    const items = [
        {
            icon: MapPin,
            label: "Điểm khởi hành",
            value: tour?.departureLocation || defaultValue,
        },

        {
            icon: MapPin,
            label: "Điểm đến",
            value: tour?.destinationLocation || defaultValue,
        },
        {
            icon: CalendarDays,
            label: "Số lịch trình",
            value: tour?.schedules?.length,
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

export default ProviderTourInfoCards;
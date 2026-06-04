import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/utils/format";
import { BriefcaseBusiness, CheckCircle } from "lucide-react";

const ProviderServiceStats = ({ total = 0, totalBookings = 0, totalRevenue = 0 }) => {
    const items = [
        {
            label: "Tổng dịch vụ",
            value: total,
            icon: BriefcaseBusiness,
        },
        {
            label: "Tổng lượt đặt",
            value: totalBookings,
            icon: CheckCircle,
        },
        {
            label: "Tổng doanh thu",
            value: formatPrice(totalRevenue),
            icon: CheckCircle,
        },
    ];


    return (
        <div className="grid gap-4 md:grid-cols-3">
            {items.map((item) => {
                const Icon = item.icon;

                return (
                    <Card key={item.label}>
                        <CardContent className="flex items-center gap-4 p-5">
                            <div className="rounded-xl bg-muted p-3">
                                <Icon className="h-6 w-6" />
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    {item.label}
                                </p>
                                <h3 className="text-2xl font-bold">
                                    {item.value}
                                </h3>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}

export default ProviderServiceStats;
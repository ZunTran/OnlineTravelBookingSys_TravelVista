import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseBusiness, CheckCircle, PauseCircle } from "lucide-react";

const ProviderServiceStats = ({ total = 0, active = 0, inactive = 0 }) => {
    const items = [
        {
            label: "Tổng dịch vụ",
            value: total,
            icon: BriefcaseBusiness,
        },
        {
            label: "Đang hoạt động",
            value: active,
            icon: CheckCircle,
        },
        {
            label: "Không hoạt động",
            value: inactive,
            icon: PauseCircle,
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
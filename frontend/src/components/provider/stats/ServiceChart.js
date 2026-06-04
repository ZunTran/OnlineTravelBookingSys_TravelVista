import EmptyState from "@/components/common/Empty";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/utils/format";
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const ServiceChart = ({
    serviceStats = [],
}) => {

    const data = serviceStats.map((item) => ({
        label: item.serviceName,
        revenue: item.revenue,
        bookings: item.bookingCount,
    }));

    if (data.length === 0) {

        return (

            <EmptyState title="Chưa có dữ liệu thống kê" />
        );
    }

    return (
        <Card className="p-5">
            <div className="mb-5">
                <h2 className="text-lg font-bold">
                    Thong ke
                </h2>
                <p className="text-sm text-muted-foreground">
                    "Doanh thu và lượt booking theo từng dịch vụ"

                </p>
            </div>

            <div className="h-[360px]">
                <ResponsiveContainer width="100%" height="100%">

                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 120,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            type="number"
                            tickFormatter={(value) =>
                                `${value / 1000000}tr`
                            }
                        />

                        <YAxis
                            type="category"
                            dataKey="label"
                            width={120}
                            tick={{
                                fontSize: 12,
                            }}
                        />

                        <Tooltip
                            formatter={(value, name) => {
                                return [
                                    formatPrice(value),
                                    "Booking",
                                ];
                            }}
                        />

                        <Bar
                            dataKey="revenue"
                            name="Doanh thu"
                            radius={[0, 8, 8, 0]}
                        />
                    </BarChart>

                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default ServiceChart;
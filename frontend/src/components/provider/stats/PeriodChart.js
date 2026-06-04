import EmptyState from "@/components/common/Empty";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/utils/format";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const PeriodChart = ({
    periodStats = [],
}) => {


    const data = periodStats.map((item) => ({
        label: item.periodLabel,
        revenue: item.revenue,
        bookings: item.orderCount,
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
                    "Doanh thu và lượt booking theo thời gian"
                </p>
            </div>

            <div className="h-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 10,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="label" />

                        <YAxis
                            tickFormatter={(value) =>
                                `${value / 1000000}tr`
                            }
                        />

                        <Tooltip
                            formatter={(value) => {
                                return [
                                    formatPrice(value),
                                    "Booking",
                                ];
                            }}
                        />

                        <Area
                            type="monotone"
                            dataKey="revenue"
                            name="Doanh thu"
                        />
                    </AreaChart>

                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default PeriodChart;
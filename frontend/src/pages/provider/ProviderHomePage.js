import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import ProviderServiceStats from "@/components/provider/services/ProviderServiceStats";
import PeriodStats from "@/components/provider/stats/PeriodChart";
import ServiceChart from "@/components/provider/stats/ServiceChart";
import ServiceStatsTable from "@/components/provider/stats/ServiceStatsTable";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PERIOD_OPTIONS } from "@/constants/FilterMenu";
import { useProviderServices } from "@/hooks/provider/use-provider-service";
import { useProviderStats } from "@/hooks/provider/use-provider-stats";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProviderHomePage = () => {

    const { data, isLoading } = useProviderServices({
        page: 1,
        size: 20,
    });


    const [period, setPeriod] = useState("year");
    const [searchParams, setSearchParams] = useSearchParams();

    const { data: statsData, isLoading: isLoadStats } = useProviderStats({ period });

    const stats = statsData?.data || [];

    if (isLoading || isLoadStats) {
        return (
            <StatsSkeleton length={3} />
        );
    }

    const handleChangePeriod = (period) => {
        const params = new URLSearchParams(searchParams);

        params.set("period", period);
        setPeriod(period)

        setSearchParams(params);
    };



    return (
        <section className="space-y-6">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        {
                            PERIOD_OPTIONS.find(
                                (item) => item.value === period
                            )?.label
                        }

                        <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-white">
                    {PERIOD_OPTIONS.map((item) => (
                        <DropdownMenuItem
                            key={item.value}
                            onClick={() =>
                                handleChangePeriod(item.value)
                            }
                        >
                            {item.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <ProviderServiceStats
                total={data?.totalElements || 0}
                totalBookings={stats.summaryTotalBookings}
                totalRevenue={stats.summaryTotalRevenue}
            />

            <PeriodStats
                periodStats={stats.byPeriodStats}
            />

            <ServiceChart
                serviceStats={stats.byServiceStats}
            />

            <ServiceStatsTable serviceStats={stats.byServiceStats} />
        </section>
    );
}

export default ProviderHomePage;
import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import ProviderServiceStats from "@/components/provider/services/ProviderServiceStats";
import { useProviderServices } from "@/hooks/provider/use-provider-service";

const ProviderHomePage = () => {

    const { data, isLoading } = useProviderServices({
        page: 1,
        size: 20,
    });

    const services = data?.content || [];

    const active = services.filter(
        (item) => item.status === "ACTIVATE"
    ).length;

    if (isLoading) {
        return (
            <StatsSkeleton length={3} />
        );
    }

    return (
        <section className="space-y-6">

            <ProviderServiceStats
                total={data?.totalElements || 0}
                active={active}
                inactive={services.length - active}
            />

        </section>
    );
}

export default ProviderHomePage;
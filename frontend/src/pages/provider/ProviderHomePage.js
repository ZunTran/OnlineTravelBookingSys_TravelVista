import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import ProviderServiceStats from "@/components/provider/services/ProviderServiceStats";
import { useProviderServices } from "@/hooks/provider/use-provider-services";

const ProviderHomePage = () => {

    const { data, isLoading } = useProviderServices({
        page: 1,
        size: 20,
    });

    const services = data?.data.content || [];


    const active = services.filter(
        (item) => item.status === "ACTIVATE"
    ).length;

    if (isLoading) {
        return (
            <StatsSkeleton />
        );
    }

    return (
        <section className="space-y-6">
            <ProviderServiceStats
                total={data.data?.totalElements || 0}
                active={active}
                inactive={services.length - active}
            />

        </section>
    );
}

export default ProviderHomePage;
import ServiceImagesSkeleton from "@/components/common/skeleton/ServiceImagesSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const ServiceOverviewSkeleton = () => {
    return (
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <ServiceImagesSkeleton />

            <div className="h-fit rounded-3xl border bg-white p-6 shadow-sm">
                <div className="space-y-5">
                    <Skeleton className="h-6 w-24 rounded-full" />

                    <div className="space-y-3">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-4/5" />

                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>

                    <div className="space-y-4">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceOverviewSkeleton;
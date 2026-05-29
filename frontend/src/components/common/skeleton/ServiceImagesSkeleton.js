import { Skeleton } from "@/components/ui/skeleton";

const ServiceImagesSkeleton = () => {
    return (
        <div className="space-y-4">
            <Skeleton className="h-72 w-full rounded-xl md:h-96" />

            <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton
                        key={index}
                        className="h-20 w-full rounded-lg md:h-24"
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceImagesSkeleton;
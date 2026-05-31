import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ServiceCardSkeleton = ({ length = 4 }) => {


    return (
        Array.from({ length }).map((_, index) => (
            <Card key={index} className="overflow-hidden rounded-2xl">
                <Skeleton className="h-48 w-full" />

                <CardContent className="space-y-3 p-4">
                    <Skeleton className="h-6 w-24" />

                    <div className="space-y-2">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-3/4" />
                    </div>

                    <Skeleton className="h-4 w-1/2" />

                    <div className="flex gap-2">
                        <Skeleton className="h-6 w-20 rounded-full" />
                        <Skeleton className="h-6 w-24 rounded-full" />
                    </div>

                    <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-20" />
                    </div>
                </CardContent>
            </Card>
        ))
    );
};

export default ServiceCardSkeleton;
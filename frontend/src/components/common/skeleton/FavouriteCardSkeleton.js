import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const FavouriteCardSkeleton = ({ length = 8 }) => {
    return (
        <>
            {Array.from({ length }).map((_, index) => (
                <Card key={index} className="rounded-2xl border bg-white p-5">
                    <div className="mb-4 flex items-center justify-between">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-5 w-5 rounded-full" />
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-4/5" />

                        <Skeleton className="h-4 w-40" />
                    </div>

                    <div className="mt-6 flex justify-between">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-24" />
                    </div>

                    <div className="mt-4 border-t pt-3">
                        <Skeleton className="h-4 w-28" />
                    </div>
                </Card>
            ))}
        </>

    );
};

export default FavouriteCardSkeleton;
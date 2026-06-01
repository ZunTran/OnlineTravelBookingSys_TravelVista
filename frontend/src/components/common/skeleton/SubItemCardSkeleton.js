import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const HotelRoomsCardSkeleton = ({ length = 4 }) => {
    return (
        <>
            {Array.from({ length }).map((_, index) => (
                <Card key={index} className="overflow-hidden rounded-2xl transition hover:shadow-md">
                    <CardContent className="space-y-4 p-5">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-6 w-40" />

                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-4/5" />
                            </div>

                            <Skeleton className="h-6 w-24 rounded-full" />
                        </div>

                        <div className="space-y-3">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-4 w-40" />
                        </div>

                        <div className="flex items-center justify-between border-t pt-4">
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-16" />
                            </div>

                            <Skeleton className="h-10 w-28 rounded-md" />
                        </div>
                    </CardContent>
                </Card>
            ))
            }
        </>
    );
};

export default HotelRoomsCardSkeleton;
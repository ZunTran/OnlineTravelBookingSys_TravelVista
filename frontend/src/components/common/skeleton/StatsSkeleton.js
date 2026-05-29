import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const StatsSkeleton = ({ length = 3 }) => {

    return (
        <div className={`grid gap-4 md:grid-cols-${length}`}>

            {Array.from({ length }).map((_, index) => (

                <Card key={index}>
                    <CardContent className="flex items-center gap-4 p-5">

                        <Skeleton className="h-12 w-12 rounded-xl" />

                        <div className="space-y-2">
                            <Skeleton className="h-4 w-28" />
                            <Skeleton className="h-8 w-16" />
                        </div>

                    </CardContent>
                </Card>

            ))}

        </div>
    );
};

export default StatsSkeleton;
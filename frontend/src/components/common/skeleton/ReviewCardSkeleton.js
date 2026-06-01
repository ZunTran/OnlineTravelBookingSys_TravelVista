import { Card, CardContent } from "@/components/ui/card";

const ReviewCardSkeleton = ({ length = 3 }) => {
    return (
        <div className="grid gap-4">
            {Array.from({ length }).map((_, index) => (
                <Card key={index} className="rounded-2xl">
                    <CardContent className="space-y-3 p-5">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-muted" />

                            <div className="space-y-2">
                                <div className="h-4 w-32 rounded bg-muted" />
                                <div className="h-3 w-24 rounded bg-muted" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="h-4 w-full rounded bg-muted" />
                            <div className="h-4 w-4/5 rounded bg-muted" />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>

    );
};

export default ReviewCardSkeleton;
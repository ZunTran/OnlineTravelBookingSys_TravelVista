import { Skeleton } from "@/components/ui/skeleton";

const OrderSkeleton = () => {
    return (
        <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
                <div
                    key={index}
                    className="rounded-2xl border p-5"
                >
                    <div className="mb-4 flex justify-between">
                        <div className="space-y-2">
                            <Skeleton className="h-5 w-40" />
                            <Skeleton className="h-4 w-56" />
                        </div>

                        <Skeleton className="h-6 w-24" />
                    </div>

                    <Skeleton className="mb-3 h-20 w-full rounded-xl" />
                    <Skeleton className="h-6 w-40 ml-auto" />
                </div>
            ))}
        </div>
    );
};

export default OrderSkeleton;
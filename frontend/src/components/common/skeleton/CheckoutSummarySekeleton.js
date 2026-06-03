import { Skeleton } from "@/components/ui/skeleton";

const CheckoutSummarySkeleton = () => {
    return (

        <div className="h-fit rounded-2xl border p-6">
            <Skeleton className="mb-5 h-7 w-40" />

            <div className="space-y-4">
                <div className="flex justify-between">
                    <Skeleton className="h-5 w-28" />
                    <Skeleton className="h-5 w-16" />
                </div>

                <div className="flex justify-between">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-5 w-20" />
                </div>

                <div className="border-t pt-4">
                    <Skeleton className="h-8 w-full" />
                </div>

                <Skeleton className="h-11 w-full rounded-lg" />
            </div>
        </div>
    );
}

export default CheckoutSummarySkeleton;
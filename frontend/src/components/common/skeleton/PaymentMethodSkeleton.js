import { Skeleton } from "@/components/ui/skeleton";

const PaymentMethodSkeleton = () => {
    return (
        <div className="rounded-2xl border p-6">
            <Skeleton className="mb-5 h-7 w-40" />

            <div className="space-y-4">
                {Array.from({ length: 2 }).map((_, index) => (
                    <div
                        key={index}
                        className="grid gap-4 sm:grid-cols-[120px_1fr_auto]"
                    >
                        <Skeleton className="h-20 w-20 rounded-xl" />

                        <div className="space-y-3">
                            <Skeleton className="h-5 w-50" />
                            <Skeleton className="h-4 w-40" />
                        </div>

                    </div>
                ))}
            </div>
        </div>

    );

}

export default PaymentMethodSkeleton;
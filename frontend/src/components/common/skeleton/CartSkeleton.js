import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CartSkeleton = ({ length = 3 }) => {
    return (
        <Card >
            <div className="space-y-2 m-3">
                <Skeleton className="h-9 w-40" />
                <Skeleton className="h-4 w-64" />
            </div>

            {Array.from({ length }).map((_, index) => (
                <Card
                    key={index}
                    className="rounded-2xl border bg-white mt-5 m-5"
                >
                    <div className="border-b p-5">
                        <Skeleton className="h-6 w-80" />
                    </div>

                    <div className="space-y-4 p-4">
                        <div className="grid gap-4 sm:grid-cols-[120px_1fr_auto]">
                            <Skeleton className="h-28 rounded-xl" />
                            <div className="space-y-3">
                                <Skeleton className="h-5 w-80" />
                                <Skeleton className="h-4 w-52" />
                                <Skeleton className="h-4 w-32" />
                            </div>
                            <Skeleton className="h-24 w-32" />
                        </div>
                    </div>
                </Card>

            ))}

            {/* // <div className="h-fit rounded-2xl border bg-white p-6">
            //     <Skeleton className="mb-6 h-7 w-40" />
            //     <Skeleton className="mb-4 h-5 w-full" />
            //     <Skeleton className="mb-6 h-8 w-full" />
            //     <Skeleton className="h-10 w-full" />
            // </div> */}
        </Card>
    );
};

export default CartSkeleton;
import { Skeleton } from "@/components/ui/skeleton";

const CustomerInfoSkeleton = () => {

    return (
        <div className="rounded-2xl border p-6">
            <Skeleton className="mb-4 h-7 w-48" />

            <div className="space-y-3">
                <Skeleton className="h-5 w-64" />
                <Skeleton className="h-5 w-56" />
                <Skeleton className="h-5 w-72" />
            </div>
        </div>
    );

}

export default CustomerInfoSkeleton;
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ChatListSkeleton = ({ length = 6 }) => {
    return (
        <Card className="mx-auto space-y-4 p-5">
            {[...Array(length)].map((_, index) => (
                <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl border p-4"
                >
                    <Skeleton className="h-12 w-12 rounded-full" />

                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-40" />
                        <Skeleton className="h-3 w-24" />
                    </div>
                </div>
            ))}
        </Card>
    );
};

export default ChatListSkeleton;
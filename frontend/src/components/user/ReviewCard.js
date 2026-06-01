import { AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card"
import { fromNow } from "@/utils/date";
import { Avatar } from "@radix-ui/react-avatar";
import { Star, UserIcon } from "lucide-react";
import { memo } from "react"

const reviewCard = ({ review }) => {
    return (
        <Card className="rounded-2xl m-5">
            <CardContent className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarFallback>
                                <UserIcon className="h-4 w-4" />
                            </AvatarFallback>
                        </Avatar>

                        <div>
                            <p className="font-bold">
                                {review.clientName || "Người dùng"}
                            </p>

                            <p className="text-sm text-muted-foreground">
                                {fromNow(review.reviewDate)}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 font-medium">
                        <Star className="h-4 w-4 fill-green-500" />
                        {review.ratingStar ?? 0}
                    </div>
                </div>

                <p className="text-sm leading-6 text-muted-foreground">
                    {review.commentText || "Không có nội dung đánh giá."}
                </p>

                {review.subItemSnapshot && (
                    <p className="rounded-xl bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
                        Dịch vụ đã đặt: {review.subItemSnapshot}
                    </p>
                )}
            </CardContent>
        </Card>
    );
}

export default memo(reviewCard);
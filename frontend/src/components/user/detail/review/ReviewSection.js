import EmptyState from "@/components/common/Empty";
import ReviewCardSkeleton from "@/components/common/skeleton/ReviewCardSkeleton";
import { Card } from "@/components/ui/card";
import ReviewHeader from "@/components/user/detail/review/ReviewHeader";
import ReviewCard from "@/components/user/detail/review/ReviewCard";
import { useReviews } from "@/hooks/service/use-service";
import { Button } from "@/components/ui/button";

const ReviewSection = ({
    serviceId
}) => {

    const {
        data: reviewData,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
    } = useReviews(serviceId);


    const reviews = reviewData?.pages.flatMap(
        (page) => page?.data?.customerReviewsFeedback || []) || [];


    if (reviews.length === 0) {
        return (
            <section className="space-y-4">
                <ReviewHeader />

                <EmptyState
                    title="Chưa có đánh giá"
                    description="Dịch vụ này hiện chưa có đánh giá từ người dùng."
                />
            </section>
        );
    }

    return (
        <section className="space-y-4">

            {isLoading
                ? (
                    <>
                        <ReviewHeader />
                        <ReviewCardSkeleton />
                    </>
                )
                : (
                    <>
                        <ReviewHeader count={reviews.length} />

                        <Card className="grid">
                            {reviews.map((review) => (
                                <ReviewCard
                                    key={review.reviewId}
                                    review={review}
                                />
                            ))}

                            {hasNextPage ? (
                                <Button
                                    variant="outline"
                                    onClick={() => fetchNextPage()}
                                    disabled={isFetchingNextPage}
                                >
                                    {isFetchingNextPage ? "Đang tải..." : "Xem thêm đánh giá"}
                                </Button>
                            )
                                : <p className="text-center ">Hết rồi.</p>
                            }

                        </Card>

                    </>
                )}

        </section>
    );
};
export default ReviewSection;
import EmptyState from "@/components/common/Empty";
import ReviewCardSkeleton from "@/components/common/skeleton/ReviewCardSkeleton";
import { Card } from "@/components/ui/card";
import ReviewHeader from "@/components/user/detail/review/ReviewHeader";
import ReviewCard from "@/components/user/detail/review/ReviewCard";
import { useReviews } from "@/hooks/service/use-service";

const ReviewSection = ({
    serviceId
}) => {

    const {
        data: reviewData,
        isLoading,
    } = useReviews(serviceId);

    const reviews = reviewData?.data?.customerReviewsFeedback || [];

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
                        </Card>
                    </>
                )}

        </section>
    );
};
export default ReviewSection;
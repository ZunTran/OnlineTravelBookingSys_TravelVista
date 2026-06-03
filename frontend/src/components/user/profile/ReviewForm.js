import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { Star } from "lucide-react";
import { useState } from "react";

const ReviewForm = ({
    onSubmit,
    isLoading = false,
}) => {
    const [ratingStar, setRatingStar] = useState(5);
    const [commentText, setCommentText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit?.({
            ratingStar,
            commentText: commentText.trim(),
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5"
        >
            <div className="space-y-2">
                <Label >Số sao đánh giá</Label>

                <div className="flex gap-2 items-center justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() =>
                                setRatingStar(star)
                            }
                        >
                            <Star
                                className={`h-8 w-8 transition ${star <= ratingStar
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-muted-foreground"
                                    }`
                                }
                                strokeWidth={1}
                            />
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <Label>Nhận xét</Label>

                <Textarea
                    rows={5}
                    maxLength={500}
                    placeholder="Chia sẻ trải nghiệm của bạn..."
                    value={commentText}
                    onChange={(e) =>
                        setCommentText(
                            e.target.value
                        )
                    }
                />

                <p className="text-right text-xs text-muted-foreground">
                    {commentText.length}/500
                </p>
            </div>

            <div className="flex justify-end">
                <Button
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading
                        ? <Spinner />
                        : "Gửi đánh giá"}
                </Button>
            </div>
        </form>
    );
};

export default ReviewForm;
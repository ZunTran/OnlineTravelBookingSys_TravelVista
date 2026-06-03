import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FavouriteButton from "@/components/user/favorite/FavouriteButton";
import { fromNow } from "@/utils/date";
import { getServiceTypeLabel } from "@/utils/helper";
import { Star } from "lucide-react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const FavouriteCard = ({ favourite }) => {
    const navigate = useNavigate();

    const serviceType = getServiceTypeLabel(favourite.serviceType);
    const type = favourite.serviceType.toLowerCase();

    return (
        <Card
            className="group rounded-2xl transition hover:-translate-y-1"
        >
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between">
                    <Badge>
                        {serviceType}
                    </Badge>
                </div>

                <div>
                    <h3 className="line-clamp-2 min-h-[3rem] text-base font-bold">
                        {favourite.name}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                        {favourite.providerName}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current" />

                        <span className="font-medium">
                            {favourite.averageRating ?? 0}
                        </span>
                    </div>

                    <span className="text-sm text-muted-foreground">
                        {favourite.reviewCount ?? 0} đánh giá
                    </span>
                </div>

                <div className="border-t pt-3 text-xs text-muted-foreground">
                    Đã lưu {fromNow(favourite.likedAt)}
                </div>

                <div className="flex justify-between items-center">
                    <Button
                        onClick={() =>
                            navigate(`/${type}/${favourite.serviceId}`)
                        }
                    >
                        Xem chi tiết
                    </Button>
                    <FavouriteButton
                        id={Number(favourite.serviceId)}
                        isLike={true}
                        size={35}
                    />

                </div>
            </CardContent>
        </Card>
    );
};

export default memo(FavouriteCard);
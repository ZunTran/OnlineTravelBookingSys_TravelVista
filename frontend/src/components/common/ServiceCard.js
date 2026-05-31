import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getServiceTypeLabel } from "@/utils/helper";
import { Star, ImageIcon } from "lucide-react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const navigate = useNavigate();

    const {
        serviceId,
        name,
        serviceType,
        providerName,
        thumbnailUrl,
        categories = [],
        averageRating,
        reviewCount,
    } = service;

    const handleClick = () => {
        navigate(`/services/${serviceId}`);
    };

    return (
        <Card
            onClick={handleClick}
            className="group cursor-pointer overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-lg"
        >
            <div className="relative h-48 bg-muted">
                {thumbnailUrl ? (
                    <img
                        src={thumbnailUrl}
                        alt={name}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                        <ImageIcon className="h-10 w-10" />
                    </div>
                )}

                <Badge className="absolute left-3 top-3">
                    {getServiceTypeLabel(serviceType)}
                </Badge>
            </div>

            <CardContent className="space-y-3 p-4">
                <div className="space-y-1">
                    <h3 className="line-clamp-2 min-h-[3rem] text-base font-bold">
                        {name}
                    </h3>

                    <p className="line-clamp-1 text-sm text-muted-foreground">
                        {providerName}
                    </p>
                </div>

                {categories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {categories.slice(0, 2).map((category) => (
                            <Badge
                                key={category.categoryId}
                                variant="secondary"
                                className="text-xs"
                            >
                                {category.categoryName}
                            </Badge>
                        ))}
                    </div>
                )}

                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 font-medium">
                        <Star className="h-4 w-4 fill-current" />
                        <span>{averageRating || 0}</span>
                    </div>

                    <span className="text-muted-foreground">
                        {reviewCount || 0} đánh giá
                    </span>
                </div>
            </CardContent>
        </Card>
    );
};

export default memo(ServiceCard);
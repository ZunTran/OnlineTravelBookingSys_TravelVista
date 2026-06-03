import ServiceImages from "@/components/common/ServicesImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import FavouriteButton from "@/components/user/favorite/FavouriteButton";
import { createChatRoomApi } from "@/services/chat.service";
import { getServiceTypeLabel } from "@/utils/helper";
import { Building2, Star, Ticket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ServiceOverview = ({ service }) => {

    const navigate = useNavigate();

    const handleOpenChat = async () => {
        try {
            const res = await createChatRoomApi({
                providerName: service.providerCompany,
            });

            navigate(`/chat/${res.roomId}`);
        }
        catch (error) {
            toast.error(error?.response?.data?.message || "Không thể mở phòng chat")
        };


    }

    return (
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <ServiceImages
                images={service?.albumImages || []}
                title={service?.name}
            />

            <Card className="h-fit rounded-3xl p-6 shadow-sm">
                <CardContent className="space-y-5">
                    <Badge>
                        {getServiceTypeLabel(service?.serviceType)}
                    </Badge>

                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold leading-tight">
                            {service?.name}
                        </h1>

                        <p >
                            {service?.description}
                        </p>
                    </div>

                    <div className="grid gap-3 text-sm">
                        <InfoLine icon={Building2}>
                            {service?.providerCompany || "Chưa cập nhật"}
                        </InfoLine>

                        <InfoLine icon={Star}>
                            {service?.averageRating || 0} điểm đánh giá
                        </InfoLine>

                        <InfoLine icon={Ticket}>
                            {service?.bookingCount || 0} lượt đặt
                        </InfoLine>

                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <FavouriteButton
                        isLike={service.isFavorited}
                        id={service.serviceId}
                        size={45}
                        content={"like"}
                    />

                    <Button
                        variant="outline"
                        onClick={handleOpenChat}
                    >
                        Chat với nhà cung cấp
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

const InfoLine = ({ icon: Icon, children }) => {
    return (
        <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-muted-foreground" />
            <span>{children}</span>
        </div>
    );
};

export default ServiceOverview;
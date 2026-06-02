import ServiceImages from "@/components/common/ServicesImage";
import { Badge } from "@/components/ui/badge";
import { getServiceTypeLabel } from "@/utils/helper";
import { Building2, Star, Ticket } from "lucide-react";

const ServiceOverview = ({ service }) => {


    return (
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <ServiceImages
                images={service?.albumImages || []}
                title={service?.name}
            />

            <div className="h-fit rounded-3xl border bg-white p-6 shadow-sm">
                <div className="space-y-5">
                    <Badge>
                        {getServiceTypeLabel(service?.serviceType)}
                    </Badge>

                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold leading-tight">
                            {service?.name}
                        </h1>

                        <p className="text-muted-foreground">
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
                </div>
            </div>
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
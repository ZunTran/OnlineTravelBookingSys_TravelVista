import { Card, CardContent } from "@/components/ui/card";

const InfoCard = ({ icon: Icon, label, value }) => {
    return (
        <Card>
            <CardContent className="flex items-center gap-3 p-5">
                <Icon className="h-6 w-6" />

                <div>
                    <p className="text-sm text-muted-foreground">
                        {label}
                    </p>

                    <p className="font-semibold">
                        {value || "Chưa có"}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default InfoCard;
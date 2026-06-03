import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone, User } from "lucide-react";

const CustomerInfoBox = ({ customer }) => {
    return (
        <Card className="rounded-2xl">
            <CardHeader className="text-2xl font-bold">
                Thông tin khách hàng
            </CardHeader>

            <CardContent className="grid gap-3 text-sm">
                <div className="flex items-center gap-4">
                    <User className="h-6 w-6 " />
                    <span className="font-semibold text-lg">{customer.fullName}</span>
                </div>

                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 " />
                    <span className="font-semibold text-lg">{customer.phone || "Chưa cập nhật"}</span>
                </div>

                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 " />
                    <span className="font-semibold text-lg">{customer.email || "Chưa cập nhật"}</span>
                </div>
            </CardContent>
        </Card>
    );
}

export default CustomerInfoBox;
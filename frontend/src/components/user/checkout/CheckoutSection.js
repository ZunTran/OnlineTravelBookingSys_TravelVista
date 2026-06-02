import { Card, CardHeader } from "@/components/ui/card";
import CheckoutItemCard from "@/components/user/checkout/CheckoutItemCard";

const CheckoutSection = ({ items = [] }) => {

    return (
        <Card className="space-y-5">

            <CardHeader className="text-2xl font-bold">
                Dịch vụ đã chọn
            </CardHeader>

            <div className="space-y-5">
                {items.map((item) => (
                    <CheckoutItemCard
                        key={item.sellableItemId}
                        item={item} />
                ))}
            </div>

        </Card>
    );
}

export default CheckoutSection;
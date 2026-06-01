import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CartItemCard from "@/components/user/cart/CartItemCard";
import { Building, Phone } from "lucide-react";

const CartProviderSection = ({ provider }) => {

    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                        <Building className="h-5 w-5" />
                        {provider.companyName}
                    </div>

                    <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        {provider.hotline}
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                {provider.items.map((item) => (
                    <CartItemCard
                        key={item.cartItemId}
                        cartItem={item}
                    />
                ))}
            </CardContent>

        </Card>
    );

}

export default CartProviderSection;
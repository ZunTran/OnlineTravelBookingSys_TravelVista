import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CartItemCard from "@/components/user/cart/CartItemCard";
import { useDeleteCart, useUpdateCart } from "@/hooks/user/use-cart";

import { Building, Phone } from "lucide-react";

const CartProviderSection = ({ provider }) => {
    const updateCartMutation = useUpdateCart();
    const deleteCartMutation = useDeleteCart();

    const handleUpdateQuantity = (cartItemId, quantity) => {
        updateCartMutation.mutate({
            id: cartItemId,
            quantity,
        });
    };

    const handleDelete = (cartItemId) => {
        deleteCartMutation.mutate(cartItemId);
    };

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
                {provider.items.map((item) => {
                    const isUpdating =
                        updateCartMutation.isPending &&
                        updateCartMutation.variables?.id === item.cartItemId;

                    const isDeleting =
                        deleteCartMutation.isPending &&
                        deleteCartMutation.variables?.id === item.cartItemId;

                    return (
                        <CartItemCard
                            key={item.cartItemId}
                            cartItem={item}
                            onUpdateQuantity={handleUpdateQuantity}
                            onDelete={handleDelete}
                            isUpdating={isUpdating || isDeleting}
                        />
                    );
                })}
            </CardContent>
        </Card>
    );
};

export default CartProviderSection;
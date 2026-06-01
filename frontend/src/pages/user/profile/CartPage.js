import EmptyState from "@/components/common/Empty";
import MyBreadcrumb from "@/components/common/MyBreadcrumb";
import CartSkeleton from "@/components/common/skeleton/CartSkeleton";
import CartProviderSection from "@/components/user/cart/CartProviderSection";
import CartSummary from "@/components/user/cart/CartSummary";
import { useCart } from "@/hooks/user/use-cart";
import { toast } from "sonner";

const CartPage = () => {

    const { data, isLoading } = useCart();
    const cart = data?.data || [];


    const providers = cart?.content || [];
    const allItems = providers.flatMap((provider) => provider.items || []);

    const totalPrice = allItems.reduce((sum, item) => {
        return sum + item.quantity * item.sellableItemInfo.currentPrice;
    }, 0);


    if (isLoading)
        return (<CartSkeleton />);

    if (cart?.totalItems === 0) {
        return (
            <div className="mx-auto max-w-5xl px-4 py-10">
                <EmptyState
                    title="Giỏ hàng trống"
                    description="Hãy thêm dịch vụ yêu thích vào giỏ hàng."
                />
            </div>
        );
    }

    return (
        <section className="mx-auto grid max-w-8xl gap-6 p-5 ">

            <div className="space-y-3">
                <MyBreadcrumb path={"Giỏ hàng"} />
                <h1 className="font-bold text-4xl">Giỏ hàng</h1>
            </div>

            {providers.map((pro) => (
                <CartProviderSection
                    key={pro.providerId}
                    provider={pro}
                />
            ))
            }
            <CartSummary
                totalItems={cart?.totalItems}
                totalPrice={totalPrice}
                onCheckout={() => toast.info("checkout")}
            />

        </section>
    );
}

export default CartPage;
import EmptyState from "@/components/common/Empty";
import CartSkeleton from "@/components/common/skeleton/CartSkeleton";
import { Button } from "@/components/ui/button";
import CartProviderSection from "@/components/user/cart/CartProviderSection";
import CartSummary from "@/components/user/cart/CartSummary";
import DetailHeader from "@/components/user/detail/review/DetailHeader";
import { useCart } from "@/hooks/user/use-cart";
import { Link } from "react-router-dom";
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

    if (cart?.totalItems === 0 || cart.length === 0) {
        return (
            <div className="mx-auto max-w-5xl px-4 py-10">
                <EmptyState
                    title="Giỏ hàng trống"
                    description="Hãy thêm dịch vụ yêu thích vào giỏ hàng."
                    action={
                        <Link to="/">
                            <Button>
                                Khám phá dịch vụ
                            </Button>
                        </Link>
                    }
                />
            </div>
        );
    }
    return (
        <section className="mx-auto grid max-w-8xl gap-6 p-5 ">

            <DetailHeader title={"Giỏ hàng"} />

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
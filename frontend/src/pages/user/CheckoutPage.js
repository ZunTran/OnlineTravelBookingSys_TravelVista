import CheckoutSection from "@/components/user/checkout/CheckoutSection";
import CheckoutSummary from "@/components/user/checkout/CheckoutSummary";
import CustomerInfoBox from "@/components/user/checkout/CustomerInfoBox";
import DetailHeader from "@/components/user/detail/review/DetailHeader";
import { useAuth } from "@/hooks/auth/use-auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

const CheckoutPage = () => {
    const location = useLocation();
    const checkoutData = location.state;
    const item = checkoutData.item;


    const { user } = useAuth();
    const items = [item] || [];

    // const buyNow = checkoutData.mode === "BUY_NOW";


    if (items.length === 0) {
        return <Navigate to="/" replace />
    }

    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );


    const handleCheckout = () => {
        toast.success("Checkout");
    }

    return (
        <section className="mx-auto grid max-w-7xl gap-5 p-5 lg:grid-cols-[1fr_360px]">

            <div className="space-y-5">
                <DetailHeader title={"Thanh toán"} />
                <CustomerInfoBox customer={user} />
                <CheckoutSection items={items} />
            </div>

            <div className="space-y-5 ">
                <CheckoutSummary
                    totalItems={items.length}
                    totalPrice={totalPrice}
                    onCheckout={handleCheckout}

                />

            </div>
        </section>
    );

}
export default CheckoutPage;
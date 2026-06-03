import Loading from "@/components/common/Loading";
import CartSkeleton from "@/components/common/skeleton/CartSkeleton";
import CheckoutSummarySkeleton from "@/components/common/skeleton/CheckoutSummarySekeleton";
import CustomerInfoSkeleton from "@/components/common/skeleton/CustomerInfoSkeleton";
import PaymentMethodSkeleton from "@/components/common/skeleton/PaymentMethodSkeleton";
import CheckoutSection from "@/components/user/checkout/CheckoutSection";
import CheckoutSummary from "@/components/user/checkout/CheckoutSummary";
import CustomerInfoBox from "@/components/user/checkout/CustomerInfoBox";
import PaymentMethods from "@/components/user/checkout/PaymentMethods";
import DetailHeader from "@/components/user/detail/review/DetailHeader";
import { useAuth } from "@/hooks/auth/use-auth";
import { useBuyNow, usePaymentMethod } from "@/hooks/user/use-checkout";
import { useState } from "react";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const CheckoutPage = () => {

    const [searchParams] = useSearchParams();
    const mode = searchParams.get("mode");
    const location = useLocation();

    const { user } = useAuth();

    const isBuyNow = mode === "buy-now";
    const { data: methodsData, isLoading: isGetPayments } = usePaymentMethod();

    const paymentMethods = methodsData?.data || [];
    const [selectedMethodId, setSelectedMethodId] = useState(paymentMethods[0]?.methodId || 1);

    const items = [location.stat?.item];

    const buyNowMutation = useBuyNow();
    const isCheckout = buyNowMutation.isPending;


    if (isGetPayments) {
        return (
            <section className="mx-auto grid max-w-7xl gap-5 p-5 lg:grid-cols-[1fr_360px]">
                <div className="space-y-5">
                    <CustomerInfoSkeleton />
                    <CartSkeleton length={1} />
                </div>

                <div className="space-y-5">
                    <PaymentMethodSkeleton />
                    <CheckoutSummarySkeleton />
                </div>
            </section>
        );
    }


    if (items.length === 0 || !location.state?.item) {
        return <Navigate to="/" replace />
    }

    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleCheckout = () => {
        if (isBuyNow) {
            buyNowMutation.mutate(
                {
                    buyNow: true,
                    itemId: items[0].itemId,
                    quantity: items[0].quantity,
                    paymentMethodId: selectedMethodId,

                }
            )

        } else {
            toast.info("Commingsoon");
        }



    }


    return (
        <section className=" max-w-7xl p-5 space-y-5">

            {isCheckout && <Loading content={"Đang thanh toán..."} />}

            <DetailHeader title="Thanh toán" />

            <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
                <div className="space-y-5">
                    <CustomerInfoBox customer={user} />
                    <CheckoutSection items={items} />
                </div>

                <div className="space-y-5">
                    <PaymentMethods
                        paymentMethods={paymentMethods}
                        selectedMethodId={selectedMethodId}
                        chooseMethod={setSelectedMethodId}
                    />

                    <CheckoutSummary
                        totalItems={items.length}
                        totalPrice={totalPrice}
                        onCheckout={handleCheckout}
                    />
                </div>
            </div>
        </section>
    );

}
export default CheckoutPage;
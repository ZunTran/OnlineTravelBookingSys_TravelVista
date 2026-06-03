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
import {
    useBuyNow,
    usePaymentMethod,
    usePreview,
} from "@/hooks/user/use-checkout";
import { useState } from "react";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const CheckoutPage = () => {
    const [searchParams] = useSearchParams();
    const mode = searchParams.get("mode");
    const location = useLocation();

    const { user } = useAuth();

    const isBuyNow = mode === "buy-now";
    const isCartMode = mode === "cart";

    const cartItemIds = location.state?.cartItemIds || [];

    const {
        data: methodsData,
        isLoading: isGetPayments,
    } = usePaymentMethod();

    const paymentMethods = methodsData?.data || [];

    const [selectedMethodId, setSelectedMethodId] = useState(1);

    const {
        data: previewData,
        isLoading: isLoadPreview,
    } = usePreview(
        {
            cartItemIds,
        },
        isCartMode && cartItemIds.length > 0
    );

    const checkoutMutation = useBuyNow();
    const isCheckout = checkoutMutation.isPending;

    const buyNowItem = location.state?.item || null;


    if (!isBuyNow && !isCartMode) {
        return <Navigate to="/" replace />;
    }

    if (isBuyNow && !buyNowItem) {
        return <Navigate to="/" replace />;
    }

    if (isCartMode && cartItemIds.length === 0) {
        return <Navigate to="/user/cart" replace />;
    }

    if (isGetPayments || isLoadPreview) {
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

    const cartPreviewItems = previewData?.items?.map((item) => ({
        itemId: item.sellableItemId,
        cartItemId: item.cartItemId,
        subItemName: item.serviceName,
        details: item.providerName,
        price: item.price,
        quantity: item.requestedQuantity,
        thumbnailUrl: item.thumbnailUrl,
        isAvailable: item.isAvailable,
    })) || [];



    const items = isBuyNow
        ? buyNowItem ? [buyNowItem] : []
        : cartPreviewItems;

    if (items.length === 0) {
        return <Navigate to={isCartMode ? "/user/cart" : "/"} replace />;
    }

    const totalPrice = isBuyNow
        ? items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        )
        : previewData?.totalCartPrice || 0;

    const handleCheckout = () => {
        if (!selectedMethodId) {
            toast.warning("Vui lòng chọn phương thức thanh toán");
            return;
        }

        if (isCartMode && previewData?.isAllAvailable === false) {
            toast.warning(
                previewData?.message ||
                "Có dịch vụ không khả dụng, vui lòng kiểm tra lại"
            );
            return;
        }

        if (isBuyNow) {
            checkoutMutation.mutate({
                buyNow: true,
                itemId: items[0].itemId,
                quantity: items[0].quantity,
                paymentMethodId: selectedMethodId,
            });

            return;
        }

        checkoutMutation.mutate({
            buyNow: false,
            cartItemIds,
            paymentMethodId: selectedMethodId,
        });
    };

    return (
        <section className="max-w-7xl space-y-5 p-5">
            {isCheckout && <Loading content="Đang thanh toán..." />}

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
};

export default CheckoutPage;
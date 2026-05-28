import ProviderPendingBanner from "@/components/provider/banners/ProviderPendingBanner";
import ProviderRejectBanner from "@/components/provider/banners/ProviderRejectBanner";

const ProviderStatusPage = ({ user }) => {

    if (user?.statusReason)
        return (
            <ProviderRejectBanner statusReason={user?.statusReason || "Bạn không phù hợp."} />
        );

    if (user?.isApproved)
        return null;

    return (
        <ProviderPendingBanner />
    );




}

export default ProviderStatusPage;
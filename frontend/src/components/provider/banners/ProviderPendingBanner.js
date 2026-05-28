import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const ProviderPendingBanner = () => {

    return (
        <Alert
            className="
                border-yellow-300
                bg-yellow-50
                text-yellow-900
            "
        >
            <AlertTriangle className="h-5 w-5" />

            <div className="space-y-1">
                <AlertTitle className="text-base font-semibold">
                    Tài khoản đang chờ phê duyệt
                </AlertTitle>

                <AlertDescription>
                    Tài khoản đối tác của bạn đang được quản trị viên xem xét.
                    Trong thời gian này bạn sẽ chưa thể sử dụng các chức năng
                    của chúng tôi. Vui lòng chờ duyệt, XIN CẢM ƠN.
                </AlertDescription>
            </div>
        </Alert>
    );
}

export default ProviderPendingBanner;
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { XCircle } from "lucide-react";

const ProviderRejectBanner = ({ statusReason }) => {
    return (
        <Alert className="border-red-300 bg-red-50 text-red-900">
            <XCircle className="h-5 w-5" />
            <div className="space-y-2">
                <AlertTitle className="text-base font-semibold">
                    Tài khoản đối tác đã bị từ chối
                </AlertTitle>

                <AlertDescription>
                    <p>
                        Hồ sơ đăng ký đối tác của bạn chưa được phê duyệt.
                    </p>

                    <div
                        className="
                                mt-2 rounded-md
                                border border-red-200
                                bg-white
                                p-3 text-sm
                            "
                    >
                        <span className="font-semibold">
                            Lý do:
                        </span>

                        <p className="mt-1">
                            {statusReason}
                        </p>
                    </div>
                </AlertDescription>
            </div>
        </Alert>
    )
}

export default ProviderRejectBanner;
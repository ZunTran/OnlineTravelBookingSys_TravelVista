import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PAYMENT_STATUS_FILTER } from "@/constants/FilterMenu";

const PaymentStatusFilter = ({ filters, onChange, isShowLabel = true }) => {
    return (
        <div className="w-full">
            {isShowLabel && <label className="mb-2 block text-sm font-medium">
                phương thức thanh toán
            </label>}

            <Select
                value={filters.paymentStatus || "all"}
                onValueChange={(value) =>
                    onChange(
                        "paymentStatus",
                        value === "all" ? "" : value
                    )
                }
            >
                <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Tất cả" />
                </SelectTrigger>

                <SelectContent className="bg-white">
                    <SelectItem value="all">
                        Tất cả
                    </SelectItem>

                    {PAYMENT_STATUS_FILTER.map((item) => (
                        <SelectItem value={item.value} key={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}

                </SelectContent>
            </Select>
        </div>
    );
}

export default PaymentStatusFilter;
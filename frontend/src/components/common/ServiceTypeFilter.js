import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SERVICE_TYPES } from "@/constants/FilterMenu";

const ServiceTypeFilter = ({ filters, onChange, isShowLabel = true }) => {
    return (
        <div>
            <div>
                {isShowLabel && <label className="mb-2 block text-sm font-medium">
                    Loại dịch vụ
                </label>}

                <Select
                    value={filters.serviceType || "all"}
                    onValueChange={(value) =>
                        onChange(
                            "serviceType",
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

                        {SERVICE_TYPES.map((item) => (
                            <SelectItem value={item.value} key={item.value}>
                                {item.label}
                            </SelectItem>
                        ))}

                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}

export default ServiceTypeFilter;
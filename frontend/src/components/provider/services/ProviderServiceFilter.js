import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SERVICE_STATUS, SERVICE_TYPES } from "@/constants/provider/FilterMenu";


const ProviderServiceFilter = ({ filters, categories = [], onChange, }) => {

    return (
        <div className="grid gap-4 rounded-xl border bg-white p-4 md:grid-cols-3">
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Loại dịch vụ
                </label>

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

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Trạng thái
                </label>

                <Select
                    value={filters.status || "all"}
                    onValueChange={(value) =>
                        onChange(
                            "status",
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
                        {SERVICE_STATUS.map((item) => (
                            <SelectItem value={item.value} key={item.value}>
                                {item.label}
                            </SelectItem>
                        ))}

                    </SelectContent>
                </Select>
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Danh mục
                </label>

                <Select
                    value={
                        filters.categoryId
                            ? String(filters.categoryId)
                            : "all"
                    }
                    onValueChange={(value) =>
                        onChange(
                            "categoryId",
                            value === "all"
                                ? ""
                                : Number(value)
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

                        {categories.map((item) => (
                            <SelectItem
                                key={item.id}
                                value={String(item.id)}
                            >
                                {item.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default ProviderServiceFilter;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SERVICE_TYPES } from "@/constants/FilterMenu";
import { useEffect, useState } from "react";

const ServiceFilter = ({
    filters,
    categories = [],
    onChange,
    showServiceType = true,
    onReset
}) => {

    const [kw, setKw] = useState("");

    const handleEnter = (e) => {
        if (e.key === "Enter")
            onChange("name", kw.trim())
    }

    useEffect(() => {
        setKw(filters.name || "");
    }, [filters.name]);

    return (
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <div className="grid gap-5 md:grid-cols-4">
                <Input
                    placeholder="Tìm kiếm dịch vụ..."
                    value={kw}
                    onChange={(e) => setKw(e.target.value)}
                    onKeyDown={handleEnter}
                />

                {showServiceType && (
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
                            <SelectValue placeholder="Loại dịch vụ" />
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
                )}

                <Select
                    value={filters.cateId || "all"}
                    onValueChange={(value) =>
                        onChange("cateId", value === "all" ? "" : value)
                    }
                >
                    <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Danh mục" />
                    </SelectTrigger>

                    <SelectContent className="bg-white">
                        <SelectItem value="all">
                            Tất cả danh mục
                        </SelectItem>

                        {categories.map((category) => (
                            <SelectItem
                                key={category.categoryId}
                                value={String(category.categoryId)}
                            >
                                {category.categoryName}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Button onClick={() => onReset()}>Xóa bộ lọc</Button>
            </div>
        </div>
    );
};

export default ServiceFilter;
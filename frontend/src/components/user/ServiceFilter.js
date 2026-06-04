import ServiceTypeFilter from "@/components/common/ServiceTypeFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PRICE_RANGES, SORT_OPTIONS } from "@/constants/FilterMenu";
import { useEffect, useState } from "react";

const ServiceFilter = ({
    filters,
    categories,
    onChange,
    showServiceType = true,
    onReset
}) => {


    const [kw, setKw] = useState("");
    const [location, setLocation] = useState("")

    const handleEnter = (e) => {
        if (e.key !== "Enter") return;

        onChange("name", kw.trim());
        onChange("location", location.trim());
    };

    useEffect(() => {
        setKw(filters.name || "");
        setLocation(filters.location || "")

    }, [filters.name, filters.location]);

    return (
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Input
                    placeholder="Tìm kiếm dịch vụ..."
                    value={kw}
                    onChange={(e) => setKw(e.target.value)}
                    onKeyDown={handleEnter}
                />

                {showServiceType && (
                    <ServiceTypeFilter isShowLabel={false} filters={filters} onChange={onChange} />
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
                                key={category.id}
                                value={String(category.id)}
                            >
                                {category.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Input
                    placeholder="Địa điểm..."
                    value={location}
                    onChange={(e) =>
                        setLocation(e.target.value)
                    }
                    onKeyDown={handleEnter}
                />
                <Select
                    onValueChange={(value) => {
                        const range = PRICE_RANGES.find(
                            (item) => item.value === value
                        );

                        if (!range) {
                            onChange("minPrice", "");
                            onChange("maxPrice", "");
                            return;
                        }
                        console.log(range);

                        onChange("minPrice", value = range.minPrice);
                        onChange("maxPrice", range.maxPrice);
                    }}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Khoảng giá" />
                    </SelectTrigger>

                    <SelectContent className="bg-white">
                        <SelectItem value="all">
                            Tất cả mức giá
                        </SelectItem>

                        {PRICE_RANGES.map((item) => (
                            <SelectItem
                                key={item.value}
                                value={item.value}
                            >
                                {item.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>


                <Select
                    value={filters.sortBy || "all"}
                    onValueChange={(value) =>
                        onChange(
                            "sortBy",
                            value === "all" ? "" : value
                        )
                    }
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Sắp xếp" />
                    </SelectTrigger>

                    <SelectContent className="bg-white">
                        <SelectItem value="all">
                            Mặc định
                        </SelectItem>

                        {SORT_OPTIONS.map((item) => (
                            <SelectItem
                                key={item.value}
                                value={item.value}
                            >
                                {item.label}
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
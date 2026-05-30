import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, X } from "lucide-react";
import { useState } from "react";

const MultiSelect = ({
    items = [],
    selectedValues = [],
    onChange,

    labelKey = "label",
    valueKey = "value",

    placeholder = "Chọn giá trị",
}) => {
    const [open, setOpen] = useState(false);

    const getValue = (item) => item[valueKey];
    const getLabel = (item) => item[labelKey];

    const selectedItems = items.filter((item) =>
        selectedValues.includes(getValue(item))
    );

    const toggleValue = (value) => {
        const isSelected = selectedValues.includes(value);

        if (isSelected) {
            onChange(selectedValues.filter((item) => item !== value));
        } else {
            onChange([...selectedValues, value]);
        }
    };

    return (
        <div className="relative">
            <Button
                type="button"
                variant="outline"
                onClick={() => setOpen((prev) => !prev)}
                className="min-h-10 w-full justify-between bg-white"
            >
                <div className="flex flex-wrap gap-1">
                    {selectedItems.length === 0 ? (
                        <span className="text-muted-foreground">
                            {placeholder}
                        </span>
                    ) : (
                        selectedItems.map((item) => {
                            const value = getValue(item);

                            return (
                                <Badge
                                    key={value}
                                    variant="secondary"
                                    className="gap-1"
                                >
                                    {getLabel(item)}

                                    <span
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleValue(value);
                                        }}
                                    >
                                        <X className="h-3 w-3" />
                                    </span>
                                </Badge>
                            );
                        })
                    )}
                </div>

                <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
            </Button>

            {open && (
                <div className="absolute z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-md border bg-white p-1 shadow-lg">
                    {items.map((item) => {
                        const value = getValue(item);
                        const isSelected = selectedValues.includes(value);

                        return (
                            <button
                                key={value}
                                type="button"
                                onClick={() => toggleValue(value)}
                                className="flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm hover:bg-muted"
                            >
                                <span>{getLabel(item)}</span>

                                {isSelected && (
                                    <Check className="h-4 w-4" />
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default MultiSelect;
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SUB_LABEL } from "@/constants/FilterMenu";
import { formatPrice } from "@/utils/format";
import { DoorOpen } from "lucide-react";
import { memo } from "react";

const SubItemCard = ({ subItem, type, onSelectRoom }) => {

    const isAvailable =
        subItem.itemStatus === "AVAILABLE" &&
        subItem.availableSlots > 0 &&
        subItem.price > 0;



    const text = SUB_LABEL[type] || SUB_LABEL.ROOM;

    return (
        <Card className="overflow-hidden rounded-2xl transition hover:shadow-md">
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-bold">
                            {subItem.subItemName}
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {subItem.details}
                        </p>
                    </div>

                    <Badge
                        className={
                            isAvailable
                                ? "bg-green-500"
                                : "bg-red-500"
                        }
                    >
                        {isAvailable
                            ? text.available
                            : text.unavailable}
                    </Badge>
                </div>

                <div className="grid gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <DoorOpen className="h-4 w-4" />
                        Còn {subItem.availableSlots || 0} {text.slot}
                    </div>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            {text.price}
                        </p>

                        <p className="text-xl font-bold text-primary">
                            {formatPrice(subItem.price)}
                        </p>
                    </div>

                    <Button
                        disabled={!isAvailable}
                        // onClick={() => onSelect?.(subItem)}
                        variant={isAvailable ? "default" : "ghost"}
                    >
                        {isAvailable
                            ? text.button
                            : "Không khả dụng"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default memo(SubItemCard);
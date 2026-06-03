import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard } from "lucide-react";
import { memo } from "react";

const PaymentMethodCard = ({ config, isSelected, onClick }) => {
    const Icon = config.icon || CreditCard;

    return (
        <Card
            onClick={onClick}
            className={`cursor-pointer rounded-2xl transition  
            ${isSelected
                    ? "border-green-500 ring-2 ring-green-500"
                    : "hover:border-primary/30"}
            `}
        >
            <CardContent className="p-4 flex items-center justify-between gap-4">

                <div className="flex items-center gap-3 flex-1">
                    <div className={`p-2 rounded-lg ${isSelected ? "text-primary bg-white shadow-sm" : "text-gray-500 bg-gray-50"}`}>
                        <Icon className="h-5 w-5" />
                    </div>

                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-medium text-sm sm:text-base text-gray-900">
                                {config.label}
                            </h3>
                            {isSelected && (
                                <Badge variant="subtle" className="bg-primary/20 text-primary-dark font-normal text-[11px] px-2 py-0">
                                    Mặc định
                                </Badge>
                            )}
                        </div>
                        <p className="text-xs text-gray-500">
                            {config.description}
                        </p>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
};

export default memo(PaymentMethodCard);
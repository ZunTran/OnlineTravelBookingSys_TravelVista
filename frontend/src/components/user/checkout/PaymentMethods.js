import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PaymentMethodCard from "@/components/user/checkout/PaymentMethodCard";
import { PAYMENT_METHOD_UI } from "@/constants/FilterMenu";
import { ChevronDown, ChevronUp } from "lucide-react"; // Thêm icon cho sinh động

const PaymentMethods = ({ paymentMethods, selectedMethodId, chooseMethod }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const currentSelectedMethod = paymentMethods.find(m => m.methodId === selectedMethodId) || paymentMethods[0];

    const handleSelect = (methodId) => {
        chooseMethod(methodId);
        setIsExpanded(false);
    };

    return (
        <Card className="overflow-hidden transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <h2 className="text-xl font-bold">Phương thức thanh toán</h2>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-1 text-sm font-medium text-primary transition"
                >
                    {isExpanded ? (
                        <>Thu gọn <ChevronUp className="h-4 w-4" /></>
                    ) : (
                        <>Thay đổi <ChevronDown className="h-4 w-4" /></>
                    )}
                </button>
            </CardHeader>

            <CardContent>
                <div className="grid gap-3">
                    {isExpanded ? (
                        paymentMethods.map((method) => {
                            const config = PAYMENT_METHOD_UI[method.methodName] || {};
                            const isSelected = selectedMethodId === method.methodId;

                            return (
                                <PaymentMethodCard
                                    key={method.methodId}
                                    config={config}
                                    isSelected={isSelected}
                                    onClick={() => handleSelect(method.methodId)}
                                />
                            );
                        })
                    ) : (
                        (() => {
                            const config = PAYMENT_METHOD_UI[currentSelectedMethod?.methodName] || {};
                            return (
                                <PaymentMethodCard
                                    config={config}
                                    isSelected={true}
                                    onClick={() => setIsExpanded(true)}
                                />
                            );
                        })()
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default PaymentMethods;
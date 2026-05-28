import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BusSearchForm from "@/components/user/transport/BusSearchForm";
import PlaneSearchForm from "@/components/user/transport/PlaneSearchForm";
import TrainSearchForm from "@/components/user/transport/TrainSearchForm";
import { Bus, Plane, Train } from "lucide-react";
import { useState } from "react";

const TransportSearchForm = () => {

    const [type, setType] = useState("flight");

    const transports = [
        {
            icon: Plane,
            type: "flight",
            label: "Máy bay"
        },
        {
            icon: Bus,
            type: "bus",
            label: "Xe khách"
        },
        {
            icon: Train,
            type: "train",
            label: "Tàu hỏa"
        }
    ];


    return (
        <div className="w-full flex justify-center items-center py-10">
            <Card className="w-full max-w-xl  flex justify-center items-center">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center" >Đặt vé di chuyển</CardTitle>
                    <CardDescription>Chọn một phương thức di chuyển và đặt vé ngày nào</CardDescription>
                </CardHeader>
                <div className="mb-5 flex gap-3">
                    {transports.map((trans) => {

                        const Icon = trans.icon;
                        return (
                            <Button
                                variant={type === trans.type ? "default" : "outline"}
                                onClick={() => setType(trans.type)}
                            >
                                <Icon className="mr-2 h-4 w-4" /> {trans.label}
                            </Button>
                        );
                    })}
                </div>
                <CardContent>
                    {type === 'flight'
                        ? <PlaneSearchForm />
                        : type === "bus"
                            ? <BusSearchForm />
                            : <TrainSearchForm />
                    }
                </CardContent>
            </Card>
        </div>
    );
}

export default TransportSearchForm;
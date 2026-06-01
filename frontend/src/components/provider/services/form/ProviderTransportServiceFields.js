import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProviderTransportServiceFields = ({ formService, handleChange, }) => {

    return (

        <div className="rounded-xl border bg-white p-5 space-y-5">
            <h3 className="text-lg font-semibold">
                Thông tin phương tiện
            </h3>
            <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>Hãng</Label>

                    <Input
                        name="brandName"
                        value={formService.brandName}
                        onChange={handleChange}
                        placeholder="Vd: Phương Trang FuTa"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Loại phương tiện</Label>

                    <Input
                        name="vehicleType"
                        value={formService.vehicleType}
                        onChange={handleChange}
                        placeholder="Limousine 22"

                    />
                </div>

                <div className="space-y-2">
                    <Label>Điểm xuất phát</Label>
                    <Input
                        name="departureStation"
                        value={formService.departureStation}
                        onChange={handleChange}
                        placeholder="Hồ Chí Minh"

                    />
                </div>

                <div className="space-y-2">
                    <Label>Điểm đến</Label>

                    <Input
                        name="arrivalStation"
                        value={formService.arrivalStation}
                        onChange={handleChange}
                        placeholder="Hà Nội"

                    />
                </div>

            </div>
        </div>
    );
};

export default ProviderTransportServiceFields;
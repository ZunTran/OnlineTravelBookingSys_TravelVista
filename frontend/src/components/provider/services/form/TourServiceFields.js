import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TourFields = ({ formService, handleChange }) => {
    return (
        <div className="rounded-xl border bg-white p-5 space-y-5">
            <h3 className="text-lg font-semibold">
                Thông tin tour
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>Điểm khởi hành</Label>
                    <Input
                        name="departureLocation"
                        value={formService.departureLocation}
                        onChange={handleChange}
                        placeholder="VD: TP.HCM"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Điểm đến</Label>
                    <Input
                        name="destinationLocation"
                        value={formService.destinationLocation}
                        onChange={handleChange}
                        placeholder="VD: Đà Lạt"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Số ngày</Label>
                    <Input
                        type="number"
                        name="durationDays"
                        value={formService.durationDays}
                        onChange={handleChange}
                        min={1}
                        max={30}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Số đêm</Label>
                    <Input
                        type="number"
                        name="durationNights"
                        value={formService.durationNights}
                        onChange={handleChange}
                        min={0}
                        max={30}
                    />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <Label>Phương tiện di chuyển chính</Label>
                    <Input
                        name="transportMode"
                        value={formService.transportMode}
                        onChange={handleChange}
                        placeholder="VD: Xe khách cao cấp"
                    />
                </div>
            </div>
        </div>
    );
};

export default TourFields;
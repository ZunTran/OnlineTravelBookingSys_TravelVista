import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const HotelServiceFields = ({ formService, handleChange, }) => {

    return (
        <div className="rounded-xl border bg-white p-5 space-y-5">
            <h3 className="text-lg font-semibold">
                Thông tin khách sạn
            </h3>

            <div className="space-y-2">
                <Label>Địa chỉ</Label>
                <Input
                    name="address"
                    value={formService.address}
                    onChange={handleChange}
                    placeholder="VD: 123 Trần Hưng Đạo, Quận 1"
                />
            </div>
        </div>
    );
};

export default HotelServiceFields;
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProviderHotelServiceFields = ({ formService, handleChange, }) => {

    return (
        <div className="space-y-5 rounded-xl border bg-white p-5">
            <h3 className="text-lg font-semibold">Thông tin khách sạn</h3>

            <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>Địa chỉ</Label>
                    <Input
                        name="address"
                        value={formService.address}
                        onChange={handleChange}
                        placeholder="123 Đường Lê Lợi..."
                    />
                </div>

                <div className="space-y-2">
                    <Label>Thành phố</Label>
                    <Input
                        name="city"
                        value={formService.city}
                        onChange={handleChange}
                        placeholder="Hồ Chí Minh"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Số sao</Label>
                    <Input
                        type="number"
                        name="starRating"
                        value={formService.starRating}
                        onChange={handleChange}
                        min={1}
                        max={5}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Tiện nghi</Label>
                    <Input
                        name="amenities"
                        value={formService.amenities}
                        onChange={handleChange}
                        placeholder="Wifi, Hồ bơi, Spa..."
                    />
                </div>

                <div className="space-y-2">
                    <Label>Giờ nhận phòng</Label>
                    <Input
                        type="time"
                        name="checkinTime"
                        value={formService.checkinTime}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Giờ trả phòng</Label>
                    <Input
                        type="time"
                        name="checkoutTime"
                        value={formService.checkoutTime}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProviderHotelServiceFields;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const HotelRoomForm = ({
    formData,
    handleChange,
    onSubmit,
    isLoading,
}) => {
    return (
        <form
            onSubmit={onSubmit}
            className="space-y-6"
        >
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>Loại phòng</Label>
                    <Input
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Sức chứa</Label>
                    <Input
                        type="number"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        min={0}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Loại giường</Label>
                    <Input
                        name="bedType"
                        value={formData.bedType}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Diện tích (m²)</Label>
                    <Input
                        type="number"
                        name="roomSizeM2"
                        value={formData.roomSizeM2}
                        onChange={handleChange}
                        min={0}
                    />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <Label>Tiện nghi phòng</Label>
                    <Input
                        name="roomAmenities"
                        value={formData.roomAmenities}
                        onChange={handleChange}
                        min={0}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Giá</Label>
                    <Input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        min={0}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Số lượng còn</Label>
                    <Input
                        type="number"
                        name="availableSlots"
                        value={formData.availableSlots}
                        onChange={handleChange}
                        min={0}
                    />
                </div>
            </div>

            <Button
                type="submit"
                disabled={isLoading}
                className="w-full"
            >
                {isLoading ? "Đang lưu..." : "Lưu phòng"}
            </Button>
        </form>
    );
};

export default HotelRoomForm;
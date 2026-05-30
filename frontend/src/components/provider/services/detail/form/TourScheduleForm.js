import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addDaysToDateTime } from "@/utils/format";

const TourScheduleForm = ({
    formData,
    handleChange,
    setFormData,
    onSubmit,
    isLoading,
    durationDays,
    durationNights
}) => {
    console.log(durationDays);

    const handleChangeDeparture = (e) => {
        const departureTime = e.target.value;

        setFormData((prev) => ({
            ...prev,
            departureTime,
            returnTime: addDaysToDateTime(
                departureTime,
                durationDays
            ),
        }));
    }

    return (
        <form
            onSubmit={onSubmit}
            className="space-y-6"
        >
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>Ngày khởi hành (mm/dd/yyyy)</Label>
                    <Input
                        type="datetime-local"
                        name="departureTime"
                        value={formData.departureTime}
                        onChange={handleChangeDeparture}
                        min={new Date().toISOString().slice(0, 16)}
                    />
                </div>

                {/* <div className="space-y-2">
                    <Label>
                        Thời lượng dự kiến (phút)
                    </Label>
                    <Input
                        type="number"
                        name="durationHours"
                        value={
                            formData.durationHours
                        }
                        onChange={handleDurationChange}
                        min={1}
                    />
                </div> */}

                <div className="space-y-2">
                    <Label>
                        Ngày kết thúc dự kiến
                    </Label>
                    <Input
                        type="datetime-local"
                        value={formData.returnTime}
                        readOnly
                        className="bg-muted"
                    />
                </div>

                <div className="space-y-2">
                    <Label>
                        Số khách tối đa
                    </Label>
                    <Input
                        type="number"
                        name="maxParticipants"
                        value={
                            formData.maxParticipants
                        }
                        onChange={handleChange}
                        min={0}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Giá tour (VNĐ)</Label>
                    <Input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        min={0}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Số chỗ còn</Label>
                    <Input
                        type="number"
                        name="availableSlots"
                        value={
                            formData.availableSlots
                        }
                        onChange={handleChange}
                        min={0}
                        max={formData.maxParticipants}
                    />
                </div>
            </div>

            <Button
                type="submit"
                disabled={isLoading}
                className="w-full"
            >
                {isLoading
                    ? "Đang lưu..."
                    : "Lưu lịch trình"}
            </Button>
        </form>
    );
};

export default TourScheduleForm;
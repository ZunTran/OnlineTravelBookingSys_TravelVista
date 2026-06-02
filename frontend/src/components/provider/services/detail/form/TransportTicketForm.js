import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addMinutesToDateTime, getTomorrowStartDateTimeLocal } from "@/utils/format";

const TransportTicketForm = ({
    formData,
    onChange,
    onSubmit,
    setFormData,
    isLoading,
}) => {
    const handleDepartureChange = (e) => {
        const departureTime = e.target.value;

        setFormData((prev) => ({
            ...prev,
            departureTime,
            arrivalTime: addMinutesToDateTime(
                departureTime,
                prev.durationMinutes
            ),
        }));
    };

    const handleDurationChange = (e) => {
        const durationMinutes = Number(e.target.value);

        setFormData((prev) => ({
            ...prev,
            durationMinutes,
            arrivalTime: addMinutesToDateTime(
                prev.departureTime,
                durationMinutes
            ),
        }));
    };

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>Giờ khởi hành</Label>
                    <Input
                        type="datetime-local"
                        name="departureTime"
                        value={formData.departureTime}
                        onChange={handleDepartureChange}
                        min={getTomorrowStartDateTimeLocal()}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label>Thời lượng (phút)</Label>
                    <Input
                        type="number"
                        name="durationMinutes"
                        value={formData.durationMinutes}
                        onChange={handleDurationChange}
                        min={1}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label>Giờ đến dự kiến</Label>
                    <Input
                        type="datetime-local"
                        name="arrivalTime"
                        value={formData.arrivalTime}
                        readOnly
                        className="bg-muted"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Hạng ghế</Label>
                    <Input
                        name="seatClass"
                        value={formData.seatClass}
                        onChange={onChange}
                        minLength={2}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label>Giá vé</Label>
                    <Input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={onChange}
                        min={1000}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label>Số ghế còn</Label>
                    <Input
                        type="number"
                        name="availableSlots"
                        value={formData.availableSlots}
                        onChange={onChange}
                        min={1}
                        required
                    />
                </div>
            </div>

            <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? "Đang lưu..." : "Lưu vé"}
            </Button>
        </form>
    );
};

export default TransportTicketForm;
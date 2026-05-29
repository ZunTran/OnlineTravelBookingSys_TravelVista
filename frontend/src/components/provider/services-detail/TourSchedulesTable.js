import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Users } from "lucide-react";

const formatDateTime = (timestamp) =>
    new Date(timestamp).toLocaleString("vi-VN");

const formatPrice = (price) =>
    Number(price).toLocaleString("vi-VN") + " đ";

const TourSchedulesTable = ({ schedules = [] }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Lịch khởi hành</CardTitle>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Ngày khởi hành</TableHead>
                            <TableHead>Số khách tối đa</TableHead>
                            <TableHead>Giá</TableHead>
                            <TableHead>Số chỗ còn lại</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {schedules.map((schedule) => (
                            <TableRow key={schedule.scheduleId}>
                                <TableCell className="font-medium">
                                    {formatDateTime(schedule.departureTime)}
                                </TableCell>

                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4" />
                                        {schedule.maxParticipants}
                                    </div>
                                </TableCell>

                                <TableCell>
                                    {formatPrice(schedule.item?.price)}
                                </TableCell>

                                <TableCell>
                                    <Badge
                                        variant={
                                            schedule.item?.availableSlots > 0
                                                ? "default"
                                                : "destructive"
                                        }
                                    >
                                        {schedule.item?.availableSlots} chỗ
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default TourSchedulesTable;
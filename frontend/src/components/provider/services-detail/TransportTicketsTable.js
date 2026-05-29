import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Clock } from "lucide-react";

const formatDateTime = (timestamp) =>
    new Date(timestamp).toLocaleString("vi-VN");

const formatPrice = (price) =>
    Number(price).toLocaleString("vi-VN") + " đ";

const formatDuration = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;

    return `${h} giờ ${m} phút`;
};

const TransportTicketsTable = ({ tickets = [] }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Danh sách vé</CardTitle>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Hạng ghế</TableHead>
                            <TableHead>Khởi hành</TableHead>
                            <TableHead>Đến nơi</TableHead>
                            <TableHead>Thời lượng</TableHead>
                            <TableHead>Giá</TableHead>
                            <TableHead>Số chỗ</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {tickets.map((ticket) => (
                            <TableRow key={ticket.ticketId}>
                                <TableCell className="font-medium">
                                    {ticket.seatClass}
                                </TableCell>

                                <TableCell>
                                    {formatDateTime(ticket.departureTime)}
                                </TableCell>

                                <TableCell>
                                    {formatDateTime(ticket.arrivalTime)}
                                </TableCell>

                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        {formatDuration(ticket.durationMinutes)}
                                    </div>
                                </TableCell>

                                <TableCell>
                                    {formatPrice(ticket.sellItem?.price)}
                                </TableCell>

                                <TableCell>
                                    <Badge
                                        variant={
                                            ticket.sellItem?.availableSlots > 0
                                                ? "default"
                                                : "destructive"
                                        }
                                    >
                                        {ticket.sellItem?.availableSlots} chỗ
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

export default TransportTicketsTable;
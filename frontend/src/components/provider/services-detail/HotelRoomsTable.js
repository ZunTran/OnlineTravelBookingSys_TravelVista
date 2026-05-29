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
import { BedDouble, Users, Ruler } from "lucide-react";

const formatPrice = (price) =>
    Number(price).toLocaleString("vi-VN") + " đ";

const HotelRoomsTable = ({ rooms = [] }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Danh sách phòng</CardTitle>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Loại phòng</TableHead>
                            <TableHead>Sức chứa</TableHead>
                            <TableHead>Giường</TableHead>
                            <TableHead>Diện tích</TableHead>
                            <TableHead>Giá</TableHead>
                            <TableHead>Số phòng còn</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {rooms.map((room) => (
                            <TableRow key={room.roomId}>
                                <TableCell className="font-medium">
                                    {room.roomType}
                                </TableCell>

                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4" />
                                        {room.capacity} khách
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <BedDouble className="h-4 w-4" />
                                        {room.bedType}
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Ruler className="h-4 w-4" />
                                        {room.roomSizeM2} m²
                                    </div>
                                </TableCell>

                                <TableCell>
                                    {formatPrice(room.sellItem?.price)}
                                </TableCell>

                                <TableCell>
                                    <Badge
                                        variant={
                                            room.sellItem?.availableSlots > 0
                                                ? "default"
                                                : "destructive"
                                        }
                                    >
                                        {room.sellItem?.availableSlots} phòng
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

export default HotelRoomsTable;
import HotelRoomRow from "@/components/provider/services/detail/hotel/HotelRoomRow";
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
                        {rooms.length === 0
                            && <TableCell
                                colSpan={5}
                                className="h-32 text-center text-muted-foreground"
                            >
                                Chưa có phòng nào.
                            </TableCell>
                        }

                        {rooms.map((room) => (
                            <HotelRoomRow key={room.roomId} room={room} />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default HotelRoomsTable;
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { formatPrice } from "@/utils/format";
import { BedDouble, Ruler, Users } from "lucide-react";
import { memo } from "react";

const HotelRoomRow = ({ room }) => {
    return (
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
                {formatPrice(room.sellItem?.price || 0)}
            </TableCell>

            <TableCell>
                <Badge
                    variant={
                        room.sellItem?.availableSlots > 0
                            ? "default"
                            : "destructive"
                    }
                >
                    {room.sellItem?.availableSlots || 0} phòng
                </Badge>
            </TableCell>
        </TableRow>
    );
}

export default memo(HotelRoomRow);
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { formatDateTime, formatPrice } from "@/utils/format";
import { Users } from "lucide-react";
import { memo } from "react"

const TourSchedulesRow = ({ schedule }) => {
    return (
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
    );
}

export default memo(TourSchedulesRow)
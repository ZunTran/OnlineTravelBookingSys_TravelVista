import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { formatDateTime, formatDuration, formatPrice } from "@/utils/format";
import { Clock } from "lucide-react";
import { memo } from "react";

const ProviderTransportTicketRow = ({ ticket }) => {
    return (
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
    );
}

export default memo(ProviderTransportTicketRow);
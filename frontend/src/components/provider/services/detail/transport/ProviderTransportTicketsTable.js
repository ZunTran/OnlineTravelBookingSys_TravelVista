import TransportTicketRow from "@/components/provider/services/detail/transport/ProviderTransportTicketRow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const ProviderTransportTicketsTable = ({ tickets = [] }) => {
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
                            <TransportTicketRow
                                key={ticket.ticketId}
                                ticket={ticket}
                            />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default ProviderTransportTicketsTable;
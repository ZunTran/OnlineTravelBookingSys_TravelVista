import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatPrice } from "@/utils/format";

const ServiceStatsTable = ({
    serviceStats = [],
}) => {
    return (
        <Card className="p-5">
            <CardHeader>
                <CardTitle> Thống kê dịch vụ</CardTitle>
                <CardDescription>  Chi tiết doanh thu và lượt đặt theo dịch vụ</CardDescription>
            </CardHeader>


            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Dịch vụ
                        </TableHead>

                        <TableHead className="text-center">
                            Booking
                        </TableHead>

                        <TableHead className="text-right">
                            Doanh thu
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {serviceStats.map((item) => (
                        <TableRow
                            key={item.serviceId}
                        >
                            <TableCell className="font-medium">
                                {item.serviceName}
                            </TableCell>

                            <TableCell className="text-center">
                                {item.bookingCount}
                            </TableCell>

                            <TableCell className="text-right font-semibold">
                                {formatPrice(
                                    item.revenue
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
};

export default ServiceStatsTable;
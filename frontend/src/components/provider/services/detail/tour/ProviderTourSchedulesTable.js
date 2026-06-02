import TourScheduleRow from "@/components/provider/services/detail/tour/ProviderTourScheduleRow";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";


const ProviderTourSchedulesTable = ({ schedules = [] }) => {
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
                            <TourScheduleRow
                                key={schedule.scheduleId}
                                schedule={schedule}
                            />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default ProviderTourSchedulesTable;
import ProviderServiceRow from "@/components/provider/services/ProviderServiceRow";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";


const ProviderServiceTable = ({ services = [], onDelete }) => {


    return (
        <div className="rounded-xl border bg-white">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[90px]">Ảnh</TableHead>
                        <TableHead>Tên dịch vụ</TableHead>
                        <TableHead>Loại</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead>Ngày tạo</TableHead>
                        <TableHead className="text-right">Thao tác</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {services.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={5}
                                className="h-32 text-center text-muted-foreground"
                            >
                                Chưa có dịch vụ nào.
                            </TableCell>
                        </TableRow>
                    ) : (
                        services.map((service) =>
                            <ProviderServiceRow key={services.id} service={service} onDelete={onDelete} />
                        )
                    )}
                </TableBody>
            </Table>
        </div >
    );
};

export default ProviderServiceTable;
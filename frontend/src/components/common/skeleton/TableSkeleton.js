import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const TableSkeleton = () => {

    return (
        <div className="rounded-xl border bg-white">

            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHead>Tên dịch vụ</TableHead>
                        <TableHead>Loại</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead>Ngày tạo</TableHead>
                        <TableHead className="text-right">
                            Thao tác
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>

                    {Array.from({ length: 5 }).map((_, index) => (

                        <TableRow key={index}>

                            <TableCell>
                                <Skeleton className="h-5 w-56" />
                            </TableCell>

                            <TableCell>
                                <Skeleton className="h-5 w-24" />
                            </TableCell>

                            <TableCell>
                                <Skeleton className="h-6 w-32 rounded-full" />
                            </TableCell>

                            <TableCell>
                                <Skeleton className="h-5 w-28" />
                            </TableCell>

                            <TableCell>
                                <div className="flex justify-end gap-4">
                                    <Skeleton className="h-9 w-9 rounded-md" />
                                    <Skeleton className="h-9 w-9 rounded-md" />
                                </div>
                            </TableCell>

                        </TableRow>

                    ))}

                </TableBody>

            </Table>

        </div>
    );
};

export default TableSkeleton;
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SERVICE_STATUS = {
    DRAFT: {
        label: "Bản nháp",
        variant: "secondary",
    },
    ACTIVATE: {
        label: "Đang hoạt động",
        variant: "default",
    },
    SUSPENDED: {
        label: "Tạm khóa",
        variant: "destructive",
    },
    DELETED: {
        label: "Đã xóa",
        variant: "outline",
    },
};


const ProviderServiceTable = ({ services = [], onDelete }) => {
    const navigate = useNavigate();

    const handleDetail = (service) => {

        switch (service.serviceType) {

            case "TOUR":
                navigate(
                    `/provider/tours/${service.id}`
                );
                break;

            case "HOTEL":
                navigate(
                    `/provider/hotels/${service.id}`
                );
                break;

            case "TRANSPORT":
                navigate(
                    `/provider/transports/${service.id}`
                );
                break;

            default:
                break;

        }
    };


    return (
        <div className="rounded-xl border bg-white">
            <Table>
                <TableHeader>
                    <TableRow>
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
                        services.map((service) => {

                            const status =
                                SERVICE_STATUS[service.status] || {
                                    label: service.status,
                                    variant: "outline",
                                };

                            return (
                                <TableRow key={service.id
                                }                                >
                                    <TableCell
                                        className="font-medium hover:cursor-pointer"
                                        onClick={() => handleDetail(service)}
                                    >
                                        {service.name}
                                    </TableCell>

                                    <TableCell>{service.serviceType}</TableCell>

                                    <TableCell>
                                        <Badge variant={status.variant}>
                                            {status.label}
                                        </Badge>
                                    </TableCell>

                                    <TableCell>
                                        {new Date(service.createdAt).toLocaleDateString("vi-VN")}
                                    </TableCell>

                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-4">
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                            // onClick={() => handleEdit(service)}
                                            >
                                                <Pencil className="h-5 w-5" />
                                            </Button>

                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                onClick={() => onDelete(service.id)}
                                            >
                                                <Trash2 className="h-5 w-5 stroke-red-600" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    )}
                </TableBody>
            </Table>
        </div >
    );
};

export default ProviderServiceTable;
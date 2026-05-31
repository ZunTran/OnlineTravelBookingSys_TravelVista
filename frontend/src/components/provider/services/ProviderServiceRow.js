import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { getServiceImage } from "@/utils/format";
import { ImageIcon, Lock, LockOpen, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SERVICE_STATUS = {
    DRAFT: {
        label: "DRAFT",
        variant: "secondary",
        className: "bg-yellow-200"
    },
    ACTIVATE: {
        label: "ACTIVATE",
        variant: "default",
        className: "bg-green-500"
    },
    SUSPENDED: {
        label: "SUSPENDED",
        variant: "destructive",
        className: "bg-red-500 text-white"
    },
    DELETED: {
        label: "DELETED",
        variant: "outline",
    },
};



const ProviderServiceRow = ({ service, onDelete, onUpdateStatus, onEdit }) => {
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

    const status =
        SERVICE_STATUS[service.status] || {
            label: service.status,
            variant: "outline",
        };

    const imageUrl = service.images?.[0];

    return (
        <TableRow key={service.id} >
            <TableCell className="hover:cursor-pointer">
                {imageUrl ? (
                    <img
                        src={getServiceImage(service)}
                        alt={service.name}
                        className="h-14 w-20 rounded-lg object-cover"
                        loading="lazy"
                        onError={(e) => {
                            e.currentTarget.src = "/defaultProduct.png"
                        }}
                    />
                ) : (
                    <div className="flex h-14 w-20 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                        <ImageIcon className="h-5 w-5" />
                    </div>
                )}
            </TableCell>
            <TableCell
                className="font-medium hover:cursor-pointer"
                onClick={() => handleDetail(service)}
            >
                {service.name}
            </TableCell>

            <TableCell>{service.serviceType}</TableCell>

            <TableCell>
                <Badge variant={status.variant} className={`${status.className}`}>
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
                        onClick={() => onUpdateStatus(Number(service.id), service.status)}
                    >
                        {service.status === "ACTIVATE"
                            ? <LockOpen className="h-5 w-5" />
                            : <Lock className="h-5 w-5" />
                        }
                    </Button>

                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => onEdit(service)}
                    >
                        <Pencil className="h-5 w-5" />
                    </Button>

                    <Button
                        size="icon"
                        variant="ghost"
                        onDelete={onDelete}
                    >
                        <Trash2 className="h-5 w-5 stroke-red-600" />
                    </Button>
                </div>
            </TableCell>
        </TableRow>
    );
}

export default ProviderServiceRow;
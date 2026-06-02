import Loading from "@/components/common/Loading";
import ServiceImages from "@/components/common/ServicesImage";
import ServiceImagesSkeleton from "@/components/common/skeleton/ServiceImagesSkeleton";
import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import TableSkeleton from "@/components/common/skeleton/TableSkeleton";
import TransportTicketForm from "@/components/provider/services/detail/form/TransportTicketForm";
import ProviderDetailHeader from "@/components/provider/services/detail/ProviderDetailHeader";
import ProviderTransportInfoCards from "@/components/provider/services/detail/transport/ProviderTransportInoCard";
import TransportTicketsTable from "@/components/provider/services/detail/transport/ProviderTransportTicketsTable";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import useServiceDetailForm from "@/hooks/forms/service-form/use-service-detail-form";
import { useCreateProviderDetailService } from "@/hooks/provider/use-provider-detail-service";
import { useProviderTransportDetail } from "@/hooks/provider/use-provider-service";
import NotFoundPage from "@/pages/error/NotFoundPage";
import { useState } from "react";
import { useParams } from "react-router-dom";


const initialTransportTicket = {
    departureTime: "",
    arrivalTime: "",
    durationMinutes: 0,
    seatClass: "",
    price: 0,
    availableSlots: 0,
};


const ProviderTransportDetailPage = () => {

    const { formData, handleChange, resetForm, setFormData } = useServiceDetailForm(initialTransportTicket);
    const [open, setOpen] = useState(false);
    const { id } = useParams();
    const transportId = Number(id);

    const { data, isLoading, error, isError } = useProviderTransportDetail(transportId);

    const createTicketMutation = useCreateProviderDetailService();
    const isCreating = createTicketMutation.isPending;

    if (error?.response?.status === 404 || isError || Number.isNaN(transportId))
        return (
            <NotFoundPage />
        );

    const transport = data || [];
    const payload = {
        serviceType: 'TRANSPORT',
        transportTickets: [
            formData,
        ]
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        createTicketMutation.mutate({
            id: transportId,
            serviceType: "TRANSPORT",
            data: payload,
        }, {
            onSuccess: () => {
                setOpen(false);
                resetForm();
            }
        })
    }

    return (
        <section className="space-y-6">

            {isCreating && <Loading content={"Đang tạo..."} />}

            <ProviderDetailHeader title={transport?.name} onOpen={setOpen} />

            {isLoading
                ? (
                    <>
                        <StatsSkeleton length={4} />
                        <ServiceImagesSkeleton />
                        <TableSkeleton columns={6} rows={5} />
                    </>
                )
                : (
                    <>
                        <ProviderTransportInfoCards transport={transport} />
                        <ServiceImages images={transport?.images} />
                        <TransportTicketsTable
                            tickets={transport?.tickets || []}
                        />
                    </>
                )
            }

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>
                            Thêm vé
                        </DialogTitle>
                    </DialogHeader>

                    <TransportTicketForm
                        formData={formData}
                        setFormData={setFormData}
                        onChange={handleChange}
                        isLoading={isCreating}
                        onSubmit={handleSubmit}
                    />
                </DialogContent>
            </Dialog>

        </section>
    );
};

export default ProviderTransportDetailPage;
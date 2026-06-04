import { ReviewSection } from "@/components/LazyComponent";
import Loading from "@/components/common/Loading";
import ServiceImages from "@/components/common/ServicesImage";
import ServiceImagesSkeleton from "@/components/common/skeleton/ServiceImagesSkeleton";
import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import TableSkeleton from "@/components/common/skeleton/TableSkeleton";
import ProviderDetailHeader from "@/components/provider/services/detail/ProviderDetailHeader";
import TourScheduleForm from "@/components/provider/services/detail/form/TourScheduleForm";
import TourInfoCards from "@/components/provider/services/detail/tour/ProviderTourInfoCard";
import TourSchedulesTable from "@/components/provider/services/detail/tour/ProviderTourSchedulesTable";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import useServiceDetailForm from "@/hooks/forms/service-form/use-service-detail-form";
import { useCreateProviderDetailService } from "@/hooks/provider/use-provider-detail-service";
import { useProviderTourDetail } from "@/hooks/provider/use-provider-service";
import NotFoundPage from "@/pages/error/NotFoundPage";
import { useState } from "react";
import { useParams } from "react-router-dom";


const initialTourSchedule = {
    departureTime: "",
    returnTime: "",
    maxParticipants: 0,
    price: 0,
    availableSlots: 0,
};


const ProviderTourDetailPage = () => {

    const { formData, handleChange, resetForm, setFormData } = useServiceDetailForm(initialTourSchedule);
    const [open, setOpen] = useState(false);
    const { id } = useParams();
    const tourId = Number(id);

    const { data, isLoading, error, isError } = useProviderTourDetail(tourId);

    const createScheduleMutation = useCreateProviderDetailService();
    const isCreating = createScheduleMutation.isPending;


    if (error?.response?.status === 404 || isError || Number.isNaN(tourId))
        return (
            <NotFoundPage />
        );


    const tour = data || [];

    console.log("Tour: ", tour);

    const payload = {
        serviceType: "TOUR",
        tourSchedules: [
            formData
        ],
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        createScheduleMutation.mutate({
            id: tourId,
            serviceType: 'TOUR',
            data: payload
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

            <ProviderDetailHeader title={tour?.name} onOpen={setOpen} />

            {isLoading
                ? (
                    <>
                        <StatsSkeleton length={3} />
                        <ServiceImagesSkeleton />
                        <TableSkeleton columns={4} />
                    </>
                )
                : (
                    <>
                        <TourInfoCards tour={tour} />
                        <ServiceImages images={tour?.images} />
                        <TourSchedulesTable schedules={tour?.schedules || []} />
                        <ReviewSection serviceId={tourId} />
                    </>
                )
            }

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>
                            Thêm phòng
                        </DialogTitle>
                    </DialogHeader>

                    <TourScheduleForm
                        formData={formData}
                        setFormData={setFormData}
                        onChange={handleChange}
                        durationDays={tour.durationDays || 2}
                        durationNights={tour.durationNights || 1}
                        onSubmit={handleSubmit}
                        isLoading={isCreating}
                    />
                </DialogContent>
            </Dialog>


        </section>
    );
};

export default ProviderTourDetailPage;
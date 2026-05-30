import ServiceImages from "@/components/common/ServicesImage";
import ServiceImagesSkeleton from "@/components/common/skeleton/ServiceImagesSkeleton";
import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import TableSkeleton from "@/components/common/skeleton/TableSkeleton";
import DetailHeader from "@/components/provider/services/detail/DetailHeader";
import TourInfoCards from "@/components/provider/services/detail/TourInfoCard";
import TourSchedulesTable from "@/components/provider/services/detail/TourSchedulesTable";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useProviderTourDetail } from "@/hooks/provider/use-provider-services";
import NotFoundPage from "@/pages/error/NotFoundPage";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProviderTourDetailPage = () => {

    const [open, setOpen] = useState(false);
    const { id } = useParams();
    const tourId = Number(id);

    const { data, isLoading, error, isError } = useProviderTourDetail(tourId);

    if (error?.response?.status === 404 || isError || Number.isNaN(tourId))
        return (
            <NotFoundPage />
        );

    const tour = data || [];


    return (
        <section className="space-y-6">
            <DetailHeader title={tour?.name} onOpen={() => setOpen(true)} />

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

                    {/* <HotelRoomForm /> */}
                </DialogContent>
            </Dialog>


        </section>
    );
};

export default ProviderTourDetailPage;
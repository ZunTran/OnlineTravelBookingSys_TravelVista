import Loading from "@/components/common/Loading";
import ServiceImages from "@/components/common/ServicesImage";
import ServiceImagesSkeleton from "@/components/common/skeleton/ServiceImagesSkeleton";
import StatsSkeleton from "@/components/common/skeleton/StatsSkeleton";
import TableSkeleton from "@/components/common/skeleton/TableSkeleton";
import HotelRoomForm from "@/components/provider/services/detail/form/HotelRoomForm";
import ProviderDetailHeader from "@/components/provider/services/detail/ProviderDetailHeader";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import useServiceDetailForm from "@/hooks/forms/service-form/use-service-detail-form";
import { useCreateProviderDetailService } from "@/hooks/provider/use-provider-detail-service";
import { useProviderHotelDetail } from "@/hooks/provider/use-provider-service";
import NotFoundPage from "@/pages/error/NotFoundPage";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProviderHotelInfoCards from "@/components/provider/services/detail/hotel/ProviderHotelInfoCard";
import ProviderHotelRoomsTable from "@/components/provider/services/detail/hotel/ProviderHotelRoomsTable";


const initialHotelRoom = {
    roomType: "",
    capacity: 1,
    bedType: "",
    roomSizeM2: 0,
    roomAmenities: "",
    price: 0,
    availableSlots: 0,
};


const ProviderHotelDetailPage = () => {

    const [open, setOpen] = useState(false);
    const { formData, handleChange, resetForm, } = useServiceDetailForm(initialHotelRoom);


    const { id } = useParams();
    const hotelId = Number(id);

    const { data, isLoading, error, isError } = useProviderHotelDetail(hotelId);

    const createRoomMutation = useCreateProviderDetailService();
    const isCreating = createRoomMutation.isPending;

    if (error?.response?.status === 404 || isError || Number.isNaN(hotelId))
        return (
            <NotFoundPage />
        );

    const hotel = data || [];

    const payload = {
        serviceType: "HOTEL",
        hotelRooms: [formData],
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        createRoomMutation.mutate(
            {
                id: hotelId,
                serviceType: 'HOTEL',
                data: payload,
            },
            {
                onSuccess: () => {
                    setOpen(false);
                    resetForm();
                }
            }
        )
    }

    return (
        <section className="space-y-6">

            {isCreating && <Loading content={"Đang tạo..."} />}

            <ProviderDetailHeader title={hotel?.name} onOpen={setOpen} />

            {isLoading
                ? (
                    <>
                        <StatsSkeleton length={3} />
                        <ServiceImagesSkeleton />
                        <TableSkeleton columns={6} />
                    </>
                )
                : (
                    <>
                        <ProviderHotelInfoCards hotel={hotel} />
                        <ServiceImages images={hotel?.images} />
                        <ProviderHotelRoomsTable rooms={hotel?.rooms || []} />
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

                    <HotelRoomForm
                        formData={formData}
                        handleChange={handleChange}
                        onSubmit={handleSubmit}
                    />

                </DialogContent>
            </Dialog>

        </section>
    );
};

export default ProviderHotelDetailPage;
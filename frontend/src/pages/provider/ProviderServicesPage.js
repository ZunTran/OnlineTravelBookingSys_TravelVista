import AppPagination from "@/components/common/AppPagination";
import Loading from "@/components/common/Loading";
import TableSkeleton from "@/components/common/skeleton/TableSkeleton";
import ProviderServiceFilter from "@/components/provider/services/ProviderServiceFilter";
import ProviderServiceForm from "@/components/provider/services/ProviderServiceForm";
import ProviderServiceTable from "@/components/provider/services/ProviderServiceTable";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import useSearchFilter from "@/hooks/common/use-search-filter";
import useProviderServiceForm from "@/hooks/forms/service-form/use-provider-services-form";
import { useCreateProviderService, useProviderServices, useUpdateProviderService } from "@/hooks/provider/use-provider-service";
import { normalizeHotelTime } from "@/utils/format";
import { useState } from "react";
import { toast } from "sonner";

const ProviderServicesPage = () => {
    const [open, setOpen] = useState(false);
    const {
        formProviderService,
        images,
        handleChange,
        updateField,
        handleServiceTypeChange,
        handleChangeFile,
        resetForm,
    } = useProviderServiceForm();

    const {
        getParam,
        handleFilterChange,
        handlePageChange,
    } = useSearchFilter();

    const filters = {
        page: Number(getParam("page", 1)),
        size: 20,
        serviceType: getParam("serviceType", null),
        status: getParam("status", null),
        categoryId: getParam("categoryId", null),
    };


    const { data, isLoading } = useProviderServices(filters);
    const services = data?.content || [];

    const createServiceMutation = useCreateProviderService();
    const isCreating = createServiceMutation.isPending;

    const updateStatusMutation = useUpdateProviderService();
    const isUpdating = updateStatusMutation.isPending;

    const payload =
        formProviderService.serviceType === "HOTEL"
            ? {
                ...formProviderService,
                checkinTime: normalizeHotelTime(formProviderService.checkinTime),
                checkoutTime: normalizeHotelTime(formProviderService.checkoutTime),
            }
            : formProviderService;


    const handleSubmit = (e) => {
        e.preventDefault();
        createServiceMutation.mutate(
            {
                data: payload,
                images,
            },
            {
                onSuccess: () => {
                    setOpen(false);
                    resetForm();
                },
            }
        );
    };

    const handleUpdateStatus = (id, currentStatus) => {
        if (currentStatus === "DRAFT" || currentStatus === "DELETED") {
            toast.warning(`Không thể thay đổi khi ở trạng thái ${currentStatus}`)
            return;
        }

        updateStatusMutation.mutate({
            id,
            params: {
                status:
                    currentStatus === "ACTIVATE"
                        ? "SUSPENDED"
                        : "ACTIVATE",
            },
            formData: null,
        });

    };

    return (
        <div className="space-y-6">
            {(isCreating || isUpdating) && <Loading content={"Đang xử lý..."} />}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Quản lý dịch vụ
                    </h1>
                    <p className="text-muted-foreground">
                        Quản lý các dịch vụ du lịch bạn đang cung cấp.
                    </p>
                </div>

                <Button onClick={() => setOpen(true)}>
                    Thêm dịch vụ
                </Button>
            </div>

            <ProviderServiceFilter
                filters={filters}
                onChange={handleFilterChange}
            />

            {(isLoading) ? (
                <TableSkeleton columns={6} />
            ) : (
                <>
                    <p className="font-bold">Tổng: {data?.totalElements}</p>
                    <ProviderServiceTable
                        services={services}
                        onEdit={(service) => console.log(service)}
                        onDelete={() => toast.info("comming soon")}
                        onUpdateStatus={handleUpdateStatus}
                    />
                </>
            )}

            <AppPagination
                page={data?.page || filters.page}
                size={data?.size || filters.size}
                totalElements={data?.totalElements || 0}
                onPageChange={handlePageChange}
            />

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold">
                            Thêm dịch vụ
                        </DialogTitle>
                    </DialogHeader>
                    <DialogDescription>Thêm mới một dịch vụ</DialogDescription>

                    <ProviderServiceForm
                        formService={formProviderService}
                        images={images}
                        onChange={handleChange}
                        updateField={updateField}
                        onServiceTypeChange={handleServiceTypeChange}
                        onChangeFile={handleChangeFile}
                        onSubmit={handleSubmit}
                        isLoading={isCreating}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ProviderServicesPage;
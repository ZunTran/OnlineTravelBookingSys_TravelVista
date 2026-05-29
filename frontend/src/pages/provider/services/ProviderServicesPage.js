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
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import useProviderServiceForm from "@/hooks/forms/service-form/use-provider-services-form";
import { useCreateProviderService, useProviderServices } from "@/hooks/provider/use-provider-services";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

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
    const [searchParams, setSearchParams] = useSearchParams();

    const filters = {
        page: Number(searchParams.get("page")) || 1,
        size: 20,
        serviceType: searchParams.get("serviceType") || undefined,
        status: searchParams.get("status") || undefined,
        categoryId: searchParams.get("categoryId") || undefined,
    };

    const { data, isLoading } = useProviderServices(filters);

    const services = data?.content || [];

    const handleFilterChange = (key, value) => {
        const params = new URLSearchParams(searchParams);

        if (!value) {
            params.delete(key);
        } else {
            params.set(key, String(value));
        }

        params.set("page", "1");

        setSearchParams(params);
    };



    const handlePageChange = (newPage) => {
        const pageValue =
            typeof newPage === "object"
                ? newPage.page
                : newPage;

        const params = new URLSearchParams(searchParams);

        params.set("page", String(pageValue));

        setSearchParams(params);
    };
    const handleAdd = () => {
        setOpen(true);
    };

    const createServiceMutation = useCreateProviderService();
    const isCreating = createServiceMutation.isPending;

    const handleSubmit = (e) => {
        e.preventDefault();

        createServiceMutation.mutate(
            {
                data: formProviderService,
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
    return (
        <section className="space-y-6">
            {isCreating && <Loading content={"Đang tạo..."} />}

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Quản lý dịch vụ
                    </h1>
                    <p className="text-muted-foreground">
                        Quản lý các dịch vụ du lịch bạn đang cung cấp.
                    </p>
                </div>

                <Button onClick={handleAdd}>
                    Thêm dịch vụ
                </Button>
            </div>

            <ProviderServiceFilter
                filters={filters}
                onChange={handleFilterChange}
            />

            {isLoading ? (
                <TableSkeleton columns={6} />
            ) : (
                <>
                    <p className="font-bold">Tổng: {data?.totalElements}</p>
                    <ProviderServiceTable
                        services={services}
                        onEdit={(service) => console.log(service)}
                        onDelete={(id) => console.log(id)}
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

                    <ProviderServiceForm
                        formService={formProviderService}
                        images={images}
                        handleChange={handleChange}
                        updateField={updateField}
                        handleServiceTypeChange={handleServiceTypeChange}
                        handleChangeFile={handleChangeFile}
                        onSubmit={handleSubmit}
                        isLoading={isCreating}
                    />
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default ProviderServicesPage;
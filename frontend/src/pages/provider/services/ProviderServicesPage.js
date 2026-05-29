import AppPagination from "@/components/common/AppPagination";
import TableSkeleton from "@/components/common/skeleton/TableSkeleton";
import ProviderServiceForm from "@/components/provider/services/ProviderServiceForm";
import ProviderServiceTable from "@/components/provider/services/ProviderServiceTable";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useProviderServiceForm } from "@/hooks/forms/use-provider-service-form";
import { useProviderServices } from "@/hooks/provider/use-provider-services";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProviderServicesPage = () => {
    const [open, setOpen] = useState(false);
    const { formService, handleChange } = useProviderServiceForm();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;


    const { data, isLoading } = useProviderServices({
        page: page,
        size: 20,
    });

    const services = data?.data.content || [];

    const handleAdd = (service) => {
        setOpen(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();



        setOpen(false);
    };




    return (
        <section className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Quản lý dịch vụ
                    </h1>
                    <p className="text-muted-foreground">
                        Quản lý các dịch vụ du lịch bạn đang cung cấp.
                    </p>
                </div>

                <Button onClick={handleAdd}>Thêm dịch vụ</Button>
            </div>

            {isLoading
                ? (
                    <TableSkeleton />

                )
                : (
                    <ProviderServiceTable
                        services={services}
                        onEdit={(service) => console.log(service)}
                        onDelete={(id) => console.log(id)}
                    />
                )
            }

            <AppPagination
                page={data?.data.page || page}
                size={data?.data.size || 20}
                totalElements={data?.data.totalElements || 0}
                onPageChange={setSearchParams}
            />

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="font-bold text-xl">
                            Thêm dịch vụ
                        </DialogTitle>
                    </DialogHeader>

                    <ProviderServiceForm
                        formData={formService}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        isLoading={false}
                    />
                </DialogContent>
            </Dialog>

        </section>
    );
}

export default ProviderServicesPage;
import AppPagination from "@/components/common/AppPagination";
import TableSkeleton from "@/components/common/skeleton/TableSkeleton";
import ProviderServiceTable from "@/components/provider/services/ProviderServiceTable";
import { Button } from "@/components/ui/button";
import { useProviderServices } from "@/hooks/provider/use-provider-services";
import { useState } from "react";

const ProviderServicesPage = () => {
    const [page, setPage] = useState(1);

    const { data, isLoading } = useProviderServices({
        page: page,
        size: 20,
    });

    const services = data?.data.content || [];


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

                <Button >Thêm dịch vụ</Button>
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
                onPageChange={setPage}
            />

        </section>
    );
}

export default ProviderServicesPage;
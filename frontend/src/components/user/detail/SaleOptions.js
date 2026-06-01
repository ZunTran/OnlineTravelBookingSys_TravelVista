import EmptyState from "@/components/common/Empty";
import SubItemCardSkeleton from "@/components/common/skeleton/SubItemCardSkeleton";
import SubItemCard from "@/components/user/detail/SubItemCard";

const SaleOptions = ({
    items = [],
    type = "ROOM",
    isLoading = false,
    onSelect,
}) => {
    if (isLoading) {
        return (
            <section className="space-y-4">
                <SectionHeader />

                <div className="grid gap-4 md:grid-cols-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <SubItemCardSkeleton key={index} />
                    ))}
                </div>
            </section>
        );
    }

    if (items.length === 0) {
        return (
            <EmptyState
                title="Không có lựa chọn khả dụng"
                description="Hiện chưa có dữ liệu để đặt dịch vụ này."
            />
        );
    }

    return (
        <section className="space-y-4">

            <div className="grid gap-4 md:grid-cols-2">
                {items.map((item) => (
                    <SubItemCard
                        key={item.sellableItemId}
                        subItem={item}
                        type={type}
                        onSelect={onSelect}
                    />
                ))}
            </div>
        </section>
    );
};

const SectionHeader = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold">
                Lựa chọn
            </h2>

            <p className="text-muted-foreground">
                Chọn lựa chọn phù hợp với nhu cầu của bạn.
            </p>
        </div>
    );
};

export default SaleOptions;
import EmptyState from "@/components/common/Empty";
import SubItemCardSkeleton from "@/components/common/skeleton/SubItemCardSkeleton";
import SectionHeader from "@/components/user/detail/SectionHeader";
import SubItemCard from "@/components/user/detail/SubItemCard";

const SaleOptions = ({
    items,
    type = "ROOM",
    isLoading = false,
    onSelect,
}) => {

    if (items.length === 0) {
        return (
            <EmptyState
                title="Không có lựa chọn khả dụng"
                description="Không bán"
            />
        );
    }

    return (
        <section className="space-y-5">
            <SectionHeader
                title={"Lựa chọn"}
                content={" Chọn lựa chọn phù hợp với nhu cầu của bạn."}
            />
            {isLoading
                ? (
                    <SubItemCardSkeleton />
                )
                : (
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
                )
            }
        </section>
    );
};


export default SaleOptions;
import EmptyState from "@/components/common/Empty";
import FavouriteCardSkeleton from "@/components/common/skeleton/FavouriteCardSkeleton";
import { Button } from "@/components/ui/button";
import FavouriteCard from "@/components/user/favorite/FavouriteCard";
import SectionHeader from "@/components/user/SectionHeader";
import { useFavourites } from "@/hooks/user/use-favourite";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const FavouritePage = () => {
    const { data, isLoading } = useFavourites();

    const favourites = data?.data || [];


    if (isLoading) {
        return (
            <section className="mx-auto max-w-7xl space-y-8 px-4 py-8">
                <SectionHeader
                    title={" Dịch vụ yêu thích"}
                    content={"Danh sách các dịch vụ đã yêu thích"}
                />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <FavouriteCardSkeleton length={3} />
                </div>
            </section>
        );
    }

    if (favourites.length === 0) {
        return (
            <section className="mx-auto max-w-5xl px-4 py-12">
                <EmptyState
                    icon={Heart}
                    title="Chưa có dịch vụ yêu thích"
                    description="Hãy nhấn vào biểu tượng trái tim để lưu lại những dịch vụ bạn quan tâm."
                    action={
                        <Link to="/">
                            <Button>
                                Khám phá dịch vụ
                            </Button>
                        </Link>
                    }
                />
            </section>
        );
    }

    return (
        <section className="mx-auto max-w-7xl space-y-8 px-4 py-8">
            <SectionHeader
                title={" Dịch vụ yêu thích"}
                content={"Danh sách các dịch vụ đã yêu thích"}
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {favourites.map((item) => (
                    <FavouriteCard
                        key={item.serviceId}
                        favourite={item}
                    />
                ))}
            </div>
        </section>
    );
};

export default FavouritePage;
import { Button } from "@/components/ui/button";
import { useUpdateFavourite } from "@/hooks/user/use-favourite";
import { Heart } from "lucide-react";
import { useState } from "react";

const FavouriteButton = ({ id, isLike = false }) => {

    const [liked, setLiked] = useState(isLike);
    const updateFavouriteMutation = useUpdateFavourite();

    const isUpdating =
        updateFavouriteMutation.isPending &&
        updateFavouriteMutation.variables?.id === id;

    const handleLike = (e) => {
        e.stopPropagation();

        setLiked((prev) => !prev);

        updateFavouriteMutation.mutate(id);
    }

    return (
        <Button
            type="button"
            variant="ghost"
            disabled={isUpdating}
            onClick={handleLike}
        >
            <Heart className={` h-8 w-8 ${liked && "fill-red-500"}`} strokeWidth="1" />
        </Button>
    );

}

export default FavouriteButton;
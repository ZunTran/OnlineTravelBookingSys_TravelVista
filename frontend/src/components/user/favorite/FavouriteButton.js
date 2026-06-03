import { useUpdateFavourite } from "@/hooks/user/use-favourite";
import { Heart } from "lucide-react";
import { useState } from "react";

const FavouriteButton = ({ id, isLike = false, size = 8 }) => {

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
        <button
            type="button"
            variant="ghost"

            disabled={isUpdating}
            onClick={handleLike}
        >
            <Heart
                className={` ${liked ? "fill-red-500 text-red-500" : ""}`}
                strokeWidth={1}
                size={size}
            />
        </button>
    );

}

export default FavouriteButton;
import { ImageIcon } from "lucide-react";
import { useState } from "react";

const normalizeImages = (images = []) => {
    return images.map((img) => {
        if (typeof img === "string") {
            return {
                imageUrl: img,
                isThumbnail: false,
            };
        }
        return img;
    });
};

const ServiceImages = ({ images = [], title = "Ảnh dịch vụ" }) => {
    const normalizedImages = normalizeImages(images);

    const thumbnail =
        normalizedImages.find((img) => img.isThumbnail)?.imageUrl ||
        normalizedImages[0]?.imageUrl;

    const [mainImage, setMainImage] = useState(thumbnail);

    if (!thumbnail) {
        return (
            <div className="flex h-72 items-center justify-center rounded-xl border bg-muted text-muted-foreground">
                <div className="flex flex-col items-center gap-2">
                    <ImageIcon className="h-10 w-10" />
                    <p>Chưa có hình ảnh</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border bg-muted">
                <img
                    src={mainImage}
                    alt={title}
                    className="h-72 w-full object-contain md:h-96"
                />
            </div>
            {normalizedImages.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                    {normalizedImages.map((image, index) => {
                        const isActive = mainImage === image.imageUrl;
                        return (
                            <img
                                key={index}
                                src={image.imageUrl}
                                alt={`${title} ${index + 1}`}
                                onMouseEnter={() => setMainImage(image.imageUrl)}
                                className={`h-20 w-full rounded-lg object-cover md:h-24 cursor-pointer transition-all ${isActive
                                    ? "ring-2 ring-primary border-transparent"
                                    : "hover:opacity-100"
                                    }`}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ServiceImages;
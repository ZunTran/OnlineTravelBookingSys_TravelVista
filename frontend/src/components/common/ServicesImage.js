import { ImageIcon } from "lucide-react";

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
            <img
                src={thumbnail}
                alt={title}
                className="h-72 w-full rounded-xl object-cover md:h-96"
            />

            {normalizedImages.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                    {normalizedImages.map((image, index) => (
                        <img
                            key={index}
                            src={image.imageUrl}
                            alt={`${title} ${index + 1}`}
                            className="h-20 w-full rounded-lg object-cover md:h-24"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ServiceImages;
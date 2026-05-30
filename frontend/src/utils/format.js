export const normalizeHotelTime = (time) => {
    if (!time) return "";

    if (time.length === 5) {
        return `${time}:00`;
    }

    return time;
};

export const getServiceImage = (service) => {
    return (
        service?.images?.[0]?.imageUrl ||
        service?.images?.[0] ||
        "/defaulProduct.png"
    );
};
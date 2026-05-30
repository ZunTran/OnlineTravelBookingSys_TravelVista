export const normalizeHotelTime = (time) => {
    if (!time) return "";

    if (time.length === 5) {
        return `${time}:00`;
    }

    return time;
};
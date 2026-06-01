
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


export const addHoursToDateTime = (
    dateTime,
    hours
) => {
    if (!dateTime || !hours) return "";

    const date = new Date(dateTime);

    date.setHours(
        date.getHours() + Number(hours)
    );

    const offset = date.getTimezoneOffset();

    return new Date(
        date.getTime() - offset * 60000
    )
        .toISOString()
        .slice(0, 16);
};


export const addDaysToDateTime = (dateTime, days) => {
    if (!dateTime || !days) return "";

    const date = new Date(dateTime);
    date.setDate(date.getDate() + Number(days));

    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - offset * 60000);

    return localDate.toISOString().slice(0, 16);
};


export const addMinutesToDateTime = (dateTime, minutes) => {
    if (!dateTime || !minutes)
        return "";

    const date = new Date(dateTime);

    date.setMinutes(
        date.getMinutes() + Number(minutes)
    );

    const offset = date.getTimezoneOffset();

    return new Date(
        date.getTime() - offset * 60000
    )
        .toISOString()
        .slice(0, 16);
};


export const getTomorrowStartDateTimeLocal = () => {
    const date = new Date();

    date.setDate(date.getDate() + 1);
    date.setHours(0, 0, 0, 0);

    const offset = date.getTimezoneOffset();

    const localDate = new Date(
        date.getTime() - offset * 60000
    );

    return localDate.toISOString().slice(0, 16);
};

export const formatPrice = (price) =>
    Number(price).toLocaleString("vi-VN") + " đ";

export const formatDateTime = (timestamp) =>
    new Date(timestamp).toLocaleString("vi-VN");

export const formatDuration = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;

    return `${h} giờ ${m} phút`;
};


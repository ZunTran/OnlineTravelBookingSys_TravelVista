export const SERVICE_TYPES = [
    {
        value: "HOTEL",
        label: "Khách sạn",
        path: "hotel",
    },
    {
        value: "TOUR",
        label: "Tour",
        path: "tour",
    },
    {
        value: "TRANSPORT",
        label: "Di chuyển",
        path: "transport",
    },
];

export const SERVICE_STATUS = [
    {
        value: "DRAFT",
        label: "Bản nháp",
        variant: "secondary",
    },
    {
        value: "ACTIVATE",
        label: "Đang hoạt động",
        variant: "default",
    },
    {
        value: "SUSPENDED",
        label: "Tạm khóa",
        variant: "destructive",
    },
    {
        value: "DELETED",
        label: "Đã xóa",
        variant: "outline",
    },
];


export const SUB_LABEL = {
    ROOM: {
        available: "Còn phòng",
        unavailable: "Hết phòng",
        slot: "phòng",
        button: "Chọn phòng",
        price: "Giá từ",
    },
    TICKET: {
        available: "Còn vé",
        unavailable: "Hết vé",
        slot: "vé",
        button: "Chọn vé",
        price: "Giá vé",
    },
    SCHEDULE: {
        available: "Còn chỗ",
        unavailable: "Hết chỗ",
        slot: "chỗ",
        button: "Chọn lịch",
        price: "Giá tour",
    },
};
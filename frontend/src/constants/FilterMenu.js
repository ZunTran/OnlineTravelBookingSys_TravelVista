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

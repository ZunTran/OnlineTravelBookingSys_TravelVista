import { Banknote, CircleDollarSign, CreditCard, Wallet } from "lucide-react";

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


export const PAYMENT_METHOD_FILTER = [
    {
        value: "PAY",
        label: "tiền mặt",
        path: "hotel",
    },
    {
        value: "MOMO",
        label: "Ví MoMo",
        path: "tour",
    },
    {
        value: "PAYPAL",
        label: "Ví Paypal",
        path: "transport",
    },
    {
        value: "STRIPE",
        label: "thẻ quốc tế",
        path: "transport",
    },
    {
        value: "ZALOPAY",
        label: "Ví ZaloPay",
        path: "transport",
    },
];


export const PAYMENT_STATUS_FILTER = [
    {
        value: "pay",
        label: "Đã thanh toán",
        path: "hotel",
    },
    {
        value: "pending",
        label: "Đang đợi thanh toán",
        path: "tour",
    },
    {
        value: "fail",
        label: "Thất bại",
        path: "transport",
    },
    {
        value: "refund",
        label: "Hoàn tiền",
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


export const SORT_OPTIONS = [
    {
        value: "newest",
        label: "Mới nhất"
    },
    {
        value: "popularity",
        label: "Phổ biến"
    },
    {
        value: "rating",
        label: "Đánh giá"
    }
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



export const PAYMENT_METHOD_UI = {
    CASH: {
        label: "Thanh toán tiền mặt",
        description: "Thanh toán trực tiếp khi sử dụng dịch vụ.",
        icon: Banknote,
    },
    MOMO: {
        label: "Ví MoMo",
        description: "Thanh toán nhanh qua ví điện tử MoMo.",
        icon: Wallet,
    },
    ZALOPAY: {
        label: "ZaloPay",
        description: "Thanh toán qua ví điện tử ZaloPay.",
        icon: Wallet,
    },
    PAYPAL: {
        label: "PayPal",
        description: "Thanh toán quốc tế qua PayPal.",
        icon: CircleDollarSign,
    },
    STRIPE: {
        label: "Thẻ quốc tế",
        description: "Thanh toán bằng thẻ qua Stripe.",
        icon: CreditCard,
    },
};

export const PRICE_RANGES = [
    {
        value: "under500k",
        label: "Dưới 500.000đ",
        minPrice: 0,
        maxPrice: 500000,
    },
    {
        value: "500k-1m",
        label: "500.000đ - 1 triệu",
        minPrice: 500000,
        maxPrice: 1000000,
    },
    {
        value: "1m-3m",
        label: "1 - 3 triệu",
        minPrice: 1000000,
        maxPrice: 3000000,
    },
    {
        value: "3m-5m",
        label: "3 - 5 triệu",
        minPrice: 3000000,
        maxPrice: 5000000,
    },
    {
        value: "over5m",
        label: "Trên 5 triệu",
        minPrice: 5000000,
        maxPrice: null,
    },
];

export const PERIOD_OPTIONS = [
    {
        value: "year",
        label: "Năm",
    },
    {
        value: "month",
        label: "Tháng",
    }, {
        value: "quarter",
        label: "Quý",
    },
]
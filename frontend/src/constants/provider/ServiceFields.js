
export const TRANSPORT = {
    brandName: "",
    vehicleType: "",
    departureStation: "",
    arrivalStation: "",
    transportTickets: [],
};

export const TOUR = {
    departureLocation: "",
    destinationLocation: "",
    durationDays: 1,
    durationNights: 0,
    transportMode: "",
    tourSchedules: [],
};

const HOTEL = {
    starRating: 5,
    address: "",
    city: "",
    checkinTime: "14:00",
    checkoutTime: "12:00",
    amenities: "",
    hotelRooms: [{
        "roomType": "Phòng Deluxe King VIP",
        "capacity": 2,
        "bedType": "1 Giường Cỡ Đại King Size",
        "roomSizeM2": 45,
        "roomAmenities": "Bồn tắm nằm, Máy pha cà phê tự động, Mini Bar",
        "price": 1850000.00,
        "availableSlots": 5
    }],
};

export const EXTRA_FIELDS = {
    TRANSPORT,
    TOUR,
    HOTEL,
};

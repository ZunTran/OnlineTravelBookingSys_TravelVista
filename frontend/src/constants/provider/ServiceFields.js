
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
    hotelRooms: [],
};

export const BASE_FIELDS = {
    name: "",
    description: "",
    serviceType: "TRANSPORT",
    categoryIds: [],
    action: "DRAFT",
};


export const EXTRA_FIELDS = {
    TRANSPORT,
    TOUR,
    HOTEL,
};

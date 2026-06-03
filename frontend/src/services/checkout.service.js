import Apis, { endpoints } from "@/configs/Apis"

export const getPaymentMethodApi = async () => {
    const res = await Apis.get(endpoints.paymentMethod);

    return res.data;
}


export const checkoutApi = async (formData) => {
    const res = await Apis.post(endpoints.checkout,
        formData,
        {
            headers: {
                "Content-Type": 'application/json'
            }
        });

    return res.data;
}

export const previewCartCheckoutApi = async (cartItemIds) => {
    const res = await Apis.post(endpoints.cart.preview,
        cartItemIds, {
        headers: {
            "Content-Type": "application/json"
        }
    }
    );

    return res.data;

}
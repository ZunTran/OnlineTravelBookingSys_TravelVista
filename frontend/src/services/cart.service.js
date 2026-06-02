import Apis, { endpoints } from "@/configs/Apis"

export const getCartApi = async () => {
    const res = await Apis.get(endpoints.cart.list);

    return res.data;
}

export const addToCartApi = async ({ id, quantity }) => {
    const res = await Apis.post(endpoints.cart.update(id), {
        quantity,
    }, {
        headers: {
            "Content-Type": "application/json"
        },
    });

    return res.data;
}

export const updateCartApi = async ({ id, quantity }) => {
    const res = await Apis.put(endpoints.cart.update(id), {
        quantity,
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    return res.data;
}


export const deleteCartApi = async (id) => {
    const res = await Apis.delete(endpoints.cart.update(id));

    return res.data;
}
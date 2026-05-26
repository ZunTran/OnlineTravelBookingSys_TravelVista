import Apis, { endpoints } from "@/configs/Apis";

export const loginApi = async (data) => {
    return Apis.post(endpoints.register, data);

};

export const registerApi = async (formData) => {
    const body = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined)
            body.append(key, value);
    });

    const res = await Apis.post(endpoints.register, body, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })

    return res.data;
}
import Apis, { endpoints } from "@/configs/Apis";

export const loginApi = async (data) => {

    const body = JSON.stringify(data);

    const res = await Apis.post(endpoints.login, body, {
        headers: {
            "Content-Type": "application/json"
        },
    });

    return res.data;
};


export const registerApi = async (formData) => {
    const body = new FormData();
    console.log("Form", formData);

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

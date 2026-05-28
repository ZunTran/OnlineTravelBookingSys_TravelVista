import Apis, { endpoints } from "@/configs/Apis";


export const getProfileApi = async () => {
    const res = await Apis.get(endpoints.profile);

    return res.data;
}

export const profileApi = async (formData) => {
    const body = JSON.stringify(formData);

    const res = await Apis.put(endpoints.updateProfile, body, {
        headers: {
            'Content-Type': "application/json",
        }
    });

    return res.data;
}


export const avatarApi = async (file) => {
    const body = new FormData();

    body.append("avatar", file);

    const res = await Apis.patch(endpoints.avatarUpdate, body, {
        headers: {
            'Content-Type': "multipart/formdata",
        }
    })

    return res.data;
}

export const passwordApi = async (data) => {
    const body = JSON.stringify(data);

    const res = await Apis.put(endpoints.passwordUpdate, body, {
        headers: {
            'Content-Type': "application/json",
        }
    })

    return res.data;
}
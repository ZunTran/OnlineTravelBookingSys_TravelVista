import Apis, { endpoints } from "@/configs/Apis";


export const getProfileApi = async () => {
    const res = await Apis.get(endpoints.auth.profile);

    return res.data;
}

export const profileApi = async (formData) => {
    const body = JSON.stringify(formData);
    const res = await Apis.put(endpoints.auth.profile, body, {
        headers: {
            'Content-Type': "application/json",
        }
    });

    return res.data;
}


export const avatarApi = async (file) => {
    const body = new FormData();

    body.append("avatar", file);

    const res = await Apis.patch(endpoints.auth.profile, body, {
        headers: {
            'Content-Type': "multipart/formdata",
        }
    })

    return res.data;
}

export const passwordApi = async (data) => {
    const body = JSON.stringify(data);

    const res = await Apis.put(endpoints.auth.password, body, {
        headers: {
            'Content-Type': "application/json",
        }
    })

    return res.data;
}
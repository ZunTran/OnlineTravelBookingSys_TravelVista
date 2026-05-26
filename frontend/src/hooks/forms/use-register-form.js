import { useState } from "react";



export const useRegisterForm = (extraFields = {}) => {

    const initialState = {
        "fullName": "",
        "username": "",
        "email": "",
        "phone": "",
        "password": "",
        "confirm": "",
        avatar: null,

        ...extraFields,
    }

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleChangeFile = (e) => {
        const file = e.target.files?.[0];

        if (!file)
            return;

        setFormData(prev => ({
            ...prev, avatar: file
        }));
    }

    const resetForm = () => {
        setFormData(initialState);
    };

    return {
        formData,
        setFormData,
        handleChange,
        handleChangeFile,
        resetForm,
    };


}




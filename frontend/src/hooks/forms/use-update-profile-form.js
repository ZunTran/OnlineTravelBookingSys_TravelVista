import { useState } from "react"


const useUpdateProfileForm = (extraField = {}) => {

    const initialState = {
        "fullName": "",
        "email": "",
        "phone": "",
        "address": "",

        ...extraField,
    }

    const [formUpdate, setFormUpdate] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormUpdate(prev => ({
            ...prev, [name]: value,
        }))

    }

    const resetForm = () => {
        setFormUpdate(initialState);
    }

    return {
        formUpdate,
        setFormUpdate,
        handleChange,
        resetForm,
    }
}

export default useUpdateProfileForm;
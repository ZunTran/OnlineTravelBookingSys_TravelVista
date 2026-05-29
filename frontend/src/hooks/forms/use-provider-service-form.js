import { useState } from "react"

const initialState = {
    'name': '',
    'status': '',
    'serviceType': '',
    image: null,
}

export const useProviderServiceForm = () => {
    const [formService, setFormService] = useState(initialState);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormService(prev => ({
            ...prev, [name]: value,
        }))
    }

    const handleChangeFile = (e) => {
        const file = e.target?.[0];

        setFormService(prev => ({
            ...prev, image: file
        }));
    }

    const resetForm = () => {
        setFormService(initialState);
    }

    return {
        formService, setFormService, handleChange, handleChangeFile, resetForm,
    }
}
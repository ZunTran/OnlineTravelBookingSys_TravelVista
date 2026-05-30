import { useState } from "react";

const useServiceDetailForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "number"
                    ? Number(value)
                    : value,
        }));
    };

    const resetForm = () => {
        setFormData(initialState);
    };

    return {
        formData,
        setFormData,
        handleChange,
        resetForm,
    };
};

export default useServiceDetailForm;
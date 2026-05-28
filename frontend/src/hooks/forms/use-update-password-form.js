import { useState } from "react";

const initialState = {
    "oldPassword": "",
    "newPassword": "",
}

const useUpdatePasswordForm = () => {

    const [formPassword, setFormPassword] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormPassword(prev => ({
            ...prev, [name]: value,
        }))
    }

    const resetForm = () => {
        setFormPassword(initialState);
    }

    return {
        formPassword, setFormPassword, handleChange, resetForm
    }

}

export default useUpdatePasswordForm;
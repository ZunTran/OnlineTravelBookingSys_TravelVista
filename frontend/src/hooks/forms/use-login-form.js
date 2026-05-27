import { useState } from "react"


const initialState = {
    username: "",
    password: "",
}
export const useLoginForm = () => {
    const [formLogin, setFormLogin] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormLogin(prev => ({ ...prev, [name]: value }))
    }

    return {
        formLogin,
        setFormLogin,
        handleChange,
    }
}

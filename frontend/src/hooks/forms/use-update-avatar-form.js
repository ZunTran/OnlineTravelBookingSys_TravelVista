import { useState } from "react";

const useUpdateAvatarForm = () => {
    const [avatarUrl, setAvatarUrl] = useState(null);


    const handleChangeFile = (e) => {
        const file = e.target?.[0];
        setAvatarUrl(file);
    }


    return {
        avatarUrl, setAvatarUrl, handleChangeFile
    }
}

export default useUpdateAvatarForm;
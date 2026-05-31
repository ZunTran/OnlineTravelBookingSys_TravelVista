import { BASE_FIELDS, EXTRA_FIELDS } from "@/constants/ServiceFields";
import { useState } from "react";
import { toast } from "sonner";



const getInitialState = (serviceType = "TRANSPORT", extraFields = {}) => {

    return {
        ...BASE_FIELDS,
        serviceType,
        ...EXTRA_FIELDS[serviceType],
        ...extraFields,
    };
};

const useProviderServiceForm = (extraFields = {}) => {

    const [formProviderService, setFormProviderService] = useState(() =>
        getInitialState(extraFields.serviceType || "TRANSPORT", extraFields)
    );

    const [images, setImages] = useState([]);

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        setFormProviderService((prev) => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value,
        }));
    };

    const updateField = (name, value) => {
        setFormProviderService((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleServiceTypeChange = (serviceType) => {
        setFormProviderService((prev) =>
            getInitialState(serviceType, {
                name: prev.name,
                description: prev.description,
                categoryIds: prev.categoryIds,
                action: prev.action,
            })
        );
    };

    const handleChangeFile = (e) => {
        const files = Array.from(e.target.files || []);

        if (files.length > 5) {
            toast.warning("Chỉ được tải lên tối đa 5 ảnh");
            setImages(null);
            return;
        }
        setImages(files);
    };

    const resetForm = (serviceType = "TRANSPORT") => {
        setFormProviderService(getInitialState(serviceType));
        setImages([]);
    };

    const setFormFromData = (data) => {
        if (!data) return;

        setFormProviderService(
            getInitialState(data.serviceType || "TRANSPORT", data)
        );
    };


    return {
        formProviderService,
        setFormProviderService,

        images,
        setImages,

        handleChange,
        updateField,
        handleServiceTypeChange,
        handleChangeFile,

        resetForm,
        setFormFromData,
    }

}

export default useProviderServiceForm;
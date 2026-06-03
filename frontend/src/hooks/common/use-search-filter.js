import { useSearchParams } from "react-router-dom";

const useSearchFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const getParam = (key, defaultValue = "") => {
        return searchParams.get(key) || defaultValue;
    };


    const handleFilterChange = (key, value) => {
        const params = new URLSearchParams(searchParams);

        if (!value || value === "" || value === null || value === undefined) {
            params.delete(key);
        } else {
            params.set(key, String(value));
        }

        params.set("page", "1");
        setSearchParams(params);
    };

    const handlePageChange = (newPage) => {
        const pageValue =
            typeof newPage === "object"
                ? newPage.page
                : newPage;

        const params = new URLSearchParams(searchParams);
        params.set("page", String(pageValue));

        setSearchParams(params);
    };

    const clearAllParams = () => {
        setSearchParams({});
    };

    return {
        searchParams,
        getParam,
        setSearchParams,
        handleFilterChange,
        handlePageChange,
        clearAllParams,
    };
};

export default useSearchFilter;
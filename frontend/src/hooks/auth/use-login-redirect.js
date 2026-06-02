import { useLocation, useNavigate } from "react-router-dom";

const useLoginRedirect = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return () => {
        const currentUrl = location.pathname + location.search;

        navigate(`/login?redirect=${encodeURIComponent(currentUrl)}`);
    };

}

export default useLoginRedirect;
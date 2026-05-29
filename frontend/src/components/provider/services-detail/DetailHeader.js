import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DetailHeader = ({ title }) => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between">
            <div>
                <Button
                    variant="ghost"
                    onClick={() => navigate(-1)}
                    className="mb-2"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Quay lại
                </Button>

                <h1 className="text-3xl font-bold">{title}</h1>

            </div>

            <Button>Chỉnh sửa</Button>
        </div>
    );
};

export default DetailHeader;
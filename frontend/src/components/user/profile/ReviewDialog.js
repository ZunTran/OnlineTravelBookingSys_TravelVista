import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import ReviewForm from "@/components/user/profile/ReviewForm";
import { useState } from "react";

const ReviewDialog = ({
    serviceName,
    onSubmit,
    isLoading = false,
}) => {
    const [open, setOpen] = useState(false);


    const handleSubmit = (data) => {
        onSubmit?.(data);
        setOpen(false)
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm" variant="outline">
                    Đánh giá
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>
                        Đánh giá dịch vụ
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                        {serviceName}
                    </p>

                    <ReviewForm
                        isLoading={isLoading}
                        onSubmit={handleSubmit}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ReviewDialog;
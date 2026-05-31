import { Inbox } from "lucide-react";

const EmptyState = ({
    title = "Không có dữ liệu",
    description = "Hiện chưa có dữ liệu để hiển thị.",
    icon: Icon = Inbox,
    action = null,
}) => {
    return (
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed bg-muted/20 p-8 text-center">
            <div className="mb-4 rounded-full bg-muted p-4">
                <Icon className="h-10 w-10 text-muted-foreground" />
            </div>

            <h3 className="text-lg font-semibold">
                {title}
            </h3>

            <p className="mt-2 max-w-md text-sm text-muted-foreground">
                {description}
            </p>

            {action && (
                <div className="mt-6">
                    {action}
                </div>
            )}
        </div>
    );
};

export default EmptyState;
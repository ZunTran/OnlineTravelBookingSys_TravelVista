import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AppPagination = ({ page = 1, size = 20, totalElements = 0, onPageChange, }) => {

    const totalPages = Math.ceil(totalElements / size);

    if (totalPages <= 1)
        return null;

    return (
        <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
                Trang {page} / {totalPages}
            </p>

            <div className="flex items-center gap-2">
                {
                    page > 1 && (
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={page <= 1}
                            onClick={() => onPageChange(page - 1)}
                        >
                            <ChevronLeft className="h-4 w-4" />
                            Trước
                        </Button>
                    )
                }

                {
                    page < totalPages && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onPageChange(page + 1)}
                        >
                            Sau
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    )
                }
            </div>
        </div>
    );
}

export default AppPagination;
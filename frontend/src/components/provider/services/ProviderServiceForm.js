import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const ProviderServiceForm = ({ formData, onChange, onSubmit, isLoading }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Thông tin dịch vụ</CardTitle>
            </CardHeader>

            <form onSubmit={onSubmit}>
                <CardContent className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label>Tên dịch vụ</Label>
                        <Input
                            name="name"
                            value={formData.name}
                            onChange={onChange}
                            placeholder="Nhập tên dịch vụ"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Loại dịch vụ</Label>
                        <Input
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={onChange}
                            placeholder="TOUR / HOTEL / TRANSPORT"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Trạng thái</Label>
                        <Input
                            name="status"
                            value={formData.status}
                            onChange={onChange}
                            placeholder="ACTIVATE"
                        />
                    </div>

                    <div className="flex items-end justify-end">
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? "Đang lưu..." : "Lưu dịch vụ"}
                        </Button>
                    </div>
                </CardContent>
            </form>
        </Card>
    );
}

export default ProviderServiceForm;
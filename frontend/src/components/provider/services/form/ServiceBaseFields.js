import MultiSelect from "@/components/common/MultiSelect";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SERVICE_STATUS, SERVICE_TYPES } from "@/constants/FilterMenu";

const ServiceBaseFields = ({
    formService,
    images,

    onChange,
    updateField,
    onServiceTypeChange,
    onChangeFile,
}) => {

    const categories = [
        {
            id: 1,
            name: "Tour"
        },
        {
            id: 2,
            name: "Hotel"
        },
        {
            id: 3,
            name: "Transport"
        },
    ];



    return (
        <div className="rounded-xl p-3 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>Tên dịch vụ</Label>
                    <Input
                        name="name"
                        value={formService.name}
                        onChange={onChange}
                        placeholder="Nhập tên dịch vụ"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Loại dịch vụ</Label>
                    <Select
                        value={formService.serviceType}
                        onValueChange={onServiceTypeChange}
                    >
                        <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Chọn loại dịch vụ" />
                        </SelectTrigger>

                        <SelectContent className="bg-white">
                            {SERVICE_TYPES.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label>Trạng thái</Label>
                    <Select
                        value={formService.action}
                        onValueChange={(value) => updateField("action", value)}
                    >
                        <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Chọn trạng thái" />
                        </SelectTrigger>

                        <SelectContent className="bg-white">
                            {SERVICE_STATUS.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label>Danh mục</Label>
                    <MultiSelect
                        items={categories}
                        selectedValues={formService.categoryIds || []}
                        onChange={(values) => updateField("categoryIds", values)}
                        labelKey="name"
                        valueKey="id"
                        placeholder="Chọn danh mục"
                    />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <Label>Mô tả</Label>
                    <textarea
                        name="description"
                        value={formService.description}
                        onChange={onChange}
                        rows={4}
                        placeholder="Nhập mô tả dịch vụ"
                        className="w-full resize-none rounded-md border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                    />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <Label>Hình ảnh</Label>
                    <Input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={onChangeFile}
                        required
                    />

                    {images?.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                            {images.map((file, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    className="h-24 w-full rounded-lg border object-cover"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceBaseFields;
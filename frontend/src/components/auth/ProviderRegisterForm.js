import RegisterBaseFields from "@/components/common/RegisterBaseFields";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegister } from "@/hooks/auth/useRegister";
import { useRegisterForm } from "@/hooks/forms/use-register-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProviderRegisterForm = () => {

    const extraFields = {
        "roleType": "PROVIDER",
        "companyName": "",
        "taxCode": "",
        "hotline": "",
        "businessAddress": "",
    };

    const { formData, handleChange, handleChangeFile } = useRegisterForm(extraFields);
    const navigator = useNavigate();
    const registerMutation = useRegister();

    const handleSubmit = (e) => {
        e.preventDefault();

        registerMutation.mutate(formData, {
            onSuccess: (data) => {
                toast.success(data?.message || "Đăng ký tài khoản thành công")
                navigator('/login')
            },
            onError: (error) => {
                toast.error(error.message || "Đã có lỗi xảy ra.")
            },
        });
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <RegisterBaseFields
                formData={formData}
                onChange={handleChange}
                onChangeFile={handleChangeFile}
            />

            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="companyName">
                        Company Name
                        <p className="text-red-500">*</p>
                    </FieldLabel>
                    <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        type="text"
                        required
                        placeholder="Tên công ty hoặc doanh nghiệp"
                        onChange={handleChange}
                    />
                </Field>

                <Field>
                    <FieldLabel htmlFor="taxCode">
                        Tax code
                        <p className="text-red-500">*</p>
                    </FieldLabel>
                    <Input
                        id="taxCode"
                        name="taxCode"
                        value={formData.taxCode}
                        type="text"
                        required
                        placeholder="Mã số thuế"
                        onChange={handleChange}
                    />
                </Field>

                <Field>
                    <FieldLabel html="hotline">
                        Hotline
                        <p className="text-red-500">*</p>
                    </FieldLabel>
                    <Input
                        id="hotline"
                        name="hotline"
                        value={formData.hotline}
                        type="text"
                        required
                        placeholder="Hotline"
                        onChange={handleChange}
                    />
                </Field>

                <Field>
                    <FieldLabel html="businessAddress">
                        Business Address
                        <p className="text-red-500">*</p>
                    </FieldLabel>
                    <Input
                        id="businessAddress"
                        name="businessAddress"
                        type="text"
                        required
                        placeholder="Địa chỉ của công ty hoặc doanh nghiệp"
                    />
                </Field>

            </FieldGroup>

            <div className="flex items-center gap-2">
                <Checkbox id="term" required />
                <Label htmlFor="term" className="text-sm">
                    Đồng ý với điều khoản
                </Label>
            </div>

            <Button type="submit" className="w-full">
                Đăng ký nhà cung cấp
            </Button>
        </form>
    );
}

export default ProviderRegisterForm;
import RegisterBaseFields from "@/components/common/RegisterBaseFields";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useRegister } from "@/hooks/auth/useRegister";
import { useRegisterForm } from "@/hooks/forms/use-register-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const UserRegisterForm = () => {
    const extraFields = {
        "roleType": "CUSTOMER",
    }

    const { formData, handleChange, handleChangeFile } = useRegisterForm(extraFields);
    const registerMutation = useRegister();
    const navigator = useNavigate();
    const isLoading = registerMutation.isPending;

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
        <div className="relative">
            {isLoading && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
                    <div className="flex flex-col items-center gap-3 rounded-2xl bg-white px-8 py-6 shadow-lg">
                        <Spinner className="size-10" />
                        <p className="text-sm font-medium">
                            Đang đăng ký...
                        </p>
                    </div>
                </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>

                <RegisterBaseFields
                    formData={formData}
                    onChange={handleChange}
                    onChangeFile={handleChangeFile}
                />

                <div className="flex items-center gap-2">
                    <Checkbox id="term" required />
                    <Label htmlFor="term" className="text-sm">
                        Đồng ý với điều khoản
                    </Label>
                </div>

                <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                >
                    {
                        isLoading
                            ? <Spinner />
                            : "Đăng ký khách hàng"
                    }
                </Button>
            </form>
        </div>
    );
};

export default UserRegisterForm;
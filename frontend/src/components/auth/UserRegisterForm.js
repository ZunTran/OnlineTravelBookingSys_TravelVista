import Loading from "@/components/common/Loading";
import RegisterBaseFields from "@/components/common/RegisterBaseFields";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useRegister } from "@/hooks/auth/use-register";
import { useRegisterForm } from "@/hooks/forms/use-register-form";

const UserRegisterForm = () => {
    const extraFields = {
        "roleType": "CUSTOMER",
    }

    const { formData, handleChange, handleChangeFile } = useRegisterForm(extraFields);
    const registerMutation = useRegister();
    const isLoading = registerMutation.isPending;

    const handleSubmit = (e) => {
        e.preventDefault();

        registerMutation.mutate(formData);
    }


    return (
        <div className="relative">
            {isLoading && (
                <Loading content="Đang đăng ký..." />
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
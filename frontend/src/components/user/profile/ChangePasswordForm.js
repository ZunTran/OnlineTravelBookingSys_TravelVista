import Loading from "@/components/common/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useChangePassword } from "@/hooks/auth/use-profile";
import useUpdatePasswordForm from "@/hooks/forms/use-update-password-form";
import { useState } from "react";
import { toast } from "sonner";

const ChangePasswordForm = () => {
    const { formPassword, handleChange, resetForm } = useUpdatePasswordForm();
    const [confirm, setConfirm] = useState("");
    const passwordMutation = useChangePassword();

    const isLoading = passwordMutation.isPending;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (confirm !== formPassword.newPassword) {
            toast.error("Mật khẩu mới và xác nhận mật khẩu không khớp");
            return;
        }

        passwordMutation.mutate(formPassword);


    }

    return (
        <section>
            {isLoading && <Loading content="Đang thay đổi..." />}
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">Đổi mật khẩu</CardTitle>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Mật khẩu hiện tại</Label>
                            <Input
                                id="oldPassword"
                                name="oldPassword"
                                value={formPassword.oldPassword}
                                type="password"
                                onChange={handleChange}
                                required
                                placeholder='••••••••'
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Mật khẩu mới</Label>
                            <Input
                                id="newPassword"
                                name="newPassword"
                                value={formPassword.newPassword}
                                type="password"
                                onChange={handleChange}
                                required
                                placeholder='••••••••'
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Xác nhận mật khẩu</Label>
                            <Input
                                id="confirm"
                                name="confirm"
                                value={confirm}
                                type="password"
                                onChange={(e) => setConfirm(e.target.value)}
                                required
                                placeholder='••••••••'
                            />
                        </div>

                        <div className="flex justify-end gap-5">
                            <Button type="button" variant="destructive" onClick={resetForm}>Hủy</Button>
                            <Button type="submit">Đổi mật khẩu</Button>
                        </div>
                    </CardContent>
                </form>
            </Card>
        </section>
    );
}

export default ChangePasswordForm;
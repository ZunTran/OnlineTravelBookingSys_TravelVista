import Loading from "@/components/common/Loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useChangeAvatar, useUpdateProfile } from "@/hooks/auth/use-profile";
import useUpdateAvatarForm from "@/hooks/forms/use-update-avatar-form";
import useUpdateProfileForm from "@/hooks/forms/use-update-profile-form";
import { Camera, UserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";



const ProfileInfoForm = ({ user }) => {

    const { formUpdate, setFormUpdate, handleChange } = useUpdateProfileForm();
    const { avatarUrl, setAvatarUrl, handleChangeFile } = useUpdateAvatarForm();

    const [preview, setPreview] = useState("");

    const avatarMutation = useChangeAvatar();
    const profileMutation = useUpdateProfile();

    const isLoading = avatarMutation.isPending || profileMutation.isPending;


    const handleAvatarChange = (e) => {
        handleChangeFile(e);

        const file = e.target.files?.[0];
        setAvatarUrl(file);

        if (!file) return;

        const imageUrl = URL.createObjectURL(file);
        setPreview(imageUrl);

    };

    const avatarChanged = avatarUrl !== null;


    const isProfileChanged =
        formUpdate.fullName !== (user?.fullName || "") ||
        formUpdate.email !== (user?.email || "") ||
        formUpdate.phone !== (user?.phone || "") ||
        formUpdate.address !== (user?.address || "");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!avatarChanged && !isProfileChanged) {
            toast.info("Bạn chưa thay đổi thông tin nào");
            return;
        }

        if (isLoading) return;

        if (avatarChanged) {
            avatarMutation.mutate(avatarUrl);
        }

        if (isProfileChanged) {
            profileMutation.mutate(formUpdate);
        }

        setAvatarUrl(null);
    };

    const handleCancel = () => {
        if (!user) return;

        setFormUpdate({
            fullName: user.fullName || "",
            email: user.email || "",
            phone: user.phone || "",
            address: user.address || "",
        });

        setPreview(user.avatarUrl || "");
    };

    useEffect(() => {
        if (!user)
            return;

        setFormUpdate({
            fullName: user.fullName || "",
            email: user.email || "",
            phone: user.phone || "",
            address: user.address || "",
        });
        setPreview(user.avatarUrl || "");
    }, [user, setFormUpdate]);

    return (
        <section>

            {isLoading && <Loading content="Đang xử lý..." />}
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold" >Thông tin cá nhân</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-5">

                        <div className="flex items-center gap-5">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src={preview} />
                                <AvatarFallback>
                                    <UserIcon className="h-10 w-10" />
                                </AvatarFallback>
                            </Avatar>

                            <div className="space-y-2">
                                <Label htmlFor="avatar">Ảnh đại diện</Label>

                                <label
                                    htmlFor="avatar"
                                    className="flex cursor-pointer items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-muted"
                                >
                                    <Camera className="h-4 w-4" />
                                    Thay đổi ảnh
                                </label>

                                <Input
                                    id="avatar"
                                    name="avatar"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleAvatarChange}
                                />

                            </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label>Họ và tên</Label>
                                <Input
                                    id="fullName"
                                    name="fullName"
                                    value={formUpdate.fullName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    value={formUpdate.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Số điện thoại</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    value={formUpdate.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Địa chỉ</Label>
                                <Input
                                    id="address"
                                    name="address"
                                    value={formUpdate.address}
                                    onChange={handleChange}
                                    placeholder="Địa chỉ"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-5">
                            <Button
                                type="button"
                                variant="destructive"
                                onClick={handleCancel}
                                disabled={isLoading}
                            >
                                Hủy
                            </Button>
                            <Button
                                type="submit"
                                disabled={isLoading}

                            >
                                {isLoading
                                    ? <Spinner />
                                    : "Cập nhật thông tin"}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </section>
    );
}

export default ProfileInfoForm;
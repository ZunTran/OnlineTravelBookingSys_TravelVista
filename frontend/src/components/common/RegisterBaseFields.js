import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { useEffect, useState } from "react";

const RegisterBaseFields = ({ formData, onChange, onChangeFile }) => {
    const [preview, setPreview] = useState("");

    useEffect(() => {
        if (!formData.avatar) {
            setPreview("");
            return;
        }

        const url = URL.createObjectURL(formData.avatar);
        setPreview(url);

        return () => {
            URL.revokeObjectURL(url);
        };
    }, [formData.avatar]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col items-center gap-3">
                <Avatar className="h-24 w-24">
                    <AvatarImage src={preview} />
                    <AvatarFallback className="bg-muted">
                        <User className="h-10 w-10 text-muted-foreground" />
                    </AvatarFallback>
                </Avatar>

                <div className="w-full space-y-2">
                    <FieldLabel htmlFor="avatar">Avatar <p className="text-red-500">*</p></FieldLabel>
                    <Input
                        id="avatar"
                        name="avatar"
                        type="file"
                        accept="image/*"
                        required
                        onChange={onChangeFile}
                    />
                </div>
            </div>

            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="fullName">
                        Fullname
                        <p className="text-red-500">*</p>
                    </FieldLabel>
                    <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        type="text"
                        required
                        placeholder="Fullname"
                        onChange={onChange}
                    />
                </Field>

                <Field>
                    <FieldLabel htmlFor="username">
                        Username
                        <p className="text-red-500">*</p>
                    </FieldLabel>
                    <Input
                        id="username"
                        name="username"
                        value={formData.username}
                        type="text"
                        required
                        placeholder="Username"
                        onChange={onChange}
                    />
                </Field>

                <Field>
                    <FieldLabel htmlFor="email">
                        Email
                        <p className="text-red-500">*</p>
                    </FieldLabel>
                    <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        type="email"
                        required
                        placeholder="abc@gmail.com"
                        onChange={onChange}
                    />
                </Field>

                <Field>
                    <FieldLabel htmlFor="phone">
                        Phone
                        <p className="text-red-500">*</p>
                    </FieldLabel>
                    <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        type="text"
                        required
                        placeholder="Số điện thoại"
                        onChange={onChange}
                    />
                </Field>

                <Field>
                    <FieldLabel htmlFor="address">Address</FieldLabel>
                    <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        type="text"
                        placeholder="Địa chỉ cá nhân"
                        onChange={onChange}
                    />
                </Field>

                <Field>
                    <FieldLabel htmlFor="password">
                        Password
                        <p className="text-red-500">*</p>
                    </FieldLabel>
                    <Input
                        id="password"
                        name="password"
                        value={formData.password}
                        type="password"
                        required
                        placeholder="Password"
                        onChange={onChange}
                    />
                </Field>

                <Field>
                    <FieldLabel htmlFor="confirm">
                        Confirm password
                        <p className="text-red-500">*</p>
                    </FieldLabel>
                    <Input
                        id="confirm"
                        name="confirm"
                        value={formData.confirm}
                        type="password"
                        required
                        placeholder="Confirm password"
                        onChange={onChange}
                    />
                </Field>
            </FieldGroup>
        </div>
    );
};

export default RegisterBaseFields;
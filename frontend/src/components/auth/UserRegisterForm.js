import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UserRegisterForm = () => {
    return (
        <form className="space-y-6">
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="fullname">Fullname</FieldLabel>
                    <Input
                        id="fullname"
                        type="text"
                        required
                        placeholder="Fullname"
                    />
                </Field>

                <Field>
                    <FieldLabel htmlFor="username" >Username</FieldLabel>
                    <Input
                        id="username"
                        type="text"
                        required
                        placeholder="Username"
                    />
                </Field>

                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                        id="password"
                        type="password"
                        required
                        placeholder="Password"
                    />
                </Field>

                <Field>
                    <FieldLabel htmlFor="confirm" >Confirm password</FieldLabel>
                    <Input
                        id="confirm"
                        type="password"
                        required
                        placeholder="Confirm password"
                    />
                </Field>

                <div className="flex gap-2">
                    <Checkbox id="term" required />
                    <Label htmlFor="term">Đồng ý với điều khoản</Label>
                </div>

                <Field orientation="horizontal" >
                    <Button type="submit" className="w-full">Đăng ký</Button>
                </Field>
            </FieldGroup>
        </form>
    );
}

export default UserRegisterForm;
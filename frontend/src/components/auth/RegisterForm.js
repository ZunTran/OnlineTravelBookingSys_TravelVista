import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center">
            <Card className="w-full max-w-md space-y-2">
                <CardHeader>
                    <CardTitle className="text-4xl font-bold">Đăng ký tài khoản</CardTitle>
                    <CardDescription>Đăng ký tài khoản mới để đặt cho mình một chuyến đi</CardDescription>
                </CardHeader>
                <form>
                    <CardContent>
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
                            <Field orientation="horizontal" >
                                <Button type="submit" className="w-full">Đăng ký</Button>
                            </Field>
                        </FieldGroup>
                    </CardContent>
                </form>
                <CardFooter>
                    <p>
                        Bạn đã có tài khoản?
                        <Link to="/login" className="hover:text-gray-500"> Đăng nhập</Link>
                    </p>
                </CardFooter>
            </Card>
        </section>
    );
}

export default RegisterForm;
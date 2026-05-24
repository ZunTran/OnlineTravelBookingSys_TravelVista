import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const FormLogin = () => {


    return (
        <section className="w-full flex flex-col justify-center items-center">
            <Card className="w-full max-w-md space-y-4 p-5" >
                <CardHeader className="space-y-1">
                    <CardTitle className="text-4xl font-bold">Welcome back</CardTitle>
                    <CardDescription>Đăng nhập để đặt chuyến đi</CardDescription>
                </CardHeader>
                <form>
                    <CardContent >
                        <FieldGroup>
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
                                <FieldLabel htmlFor="password" >Password</FieldLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                />
                            </Field>
                            <Field orientation="horizontal">
                                <Button type="submit" className="w-full" >Đăng nhập</Button>
                            </Field>
                        </FieldGroup>
                    </CardContent>
                </form>
                <CardFooter >
                    <p>Bạn chưa có tài khoản?
                        <Link to="/register" className="hover:text-gray-500"> Đăng ký ngay</Link>
                    </p>
                </CardFooter>
            </Card>
        </section >
    );
}

export default FormLogin;
import Loading from "@/components/common/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useLogin } from "@/hooks/auth/use-login";
import { useLoginForm } from "@/hooks/forms/use-login-form";
import { Link } from "react-router-dom";

const FormLogin = () => {

    const { formLogin, handleChange } = useLoginForm();
    const loginMutation = useLogin();
    const isLoading = loginMutation.isPending;


    const handleSubmit = (e) => {
        e.preventDefault();

        loginMutation.mutate(formLogin);
    }



    return (

        <section className="w-full flex flex-col justify-center items-center">

            {isLoading && <Loading content="Đang đăng nhập" />}
            <Card className="w-full max-w-md space-y-4 p-5" >
                <CardHeader className="space-y-1">
                    <CardTitle className="text-4xl font-bold">Đăng nhập</CardTitle>
                    <CardDescription>Đăng nhập đi ngại chi</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent >
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="username" >Username</FieldLabel>
                                <Input
                                    id="username"
                                    name="username"
                                    value={formLogin.username}
                                    type="text"
                                    required
                                    placeholder="Username"
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password" >Password</FieldLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    value={formLogin.password}
                                    type="password"
                                    required
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field orientation="horizontal">
                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isLoading}
                                >
                                    {isLoading
                                        ? <Spinner />
                                        : "Đăng nhập"
                                    }
                                </Button>
                            </Field>
                        </FieldGroup>
                    </CardContent>
                </form>
                <CardFooter >
                    <p>Bạn chưa có tài khoản?
                        <Link to="/register" className="text-green-500 hover:text-gray-500"> Đăng ký ngay</Link>
                    </p>
                </CardFooter>
            </Card>
        </section >
    );
}

export default FormLogin;
import ProviderRegisterForm from "@/components/auth/ProviderRegisterForm";
import UserRegisterForm from "@/components/auth/UserRegisterForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {

    const [role, setRole] = useState("user");

    return (
        <div className="w-full flex justify-center items-center py-10">

            <Card className="w-full max-w-xl">
                <CardHeader className="space-y-6">
                    <CardTitle className="text-3xl font-bold mb-6 text-center">Đăng ký tài khoản</CardTitle>

                    <div className="flex gap-3">
                        <Button
                            className="flex-1"
                            variant={role === "user" ? "default" : "outline"}
                            onClick={() => setRole("user")}
                        >
                            User
                        </Button>

                        <Button
                            className="flex-1"
                            variant={role === "provider" ? "default" : "outline"}
                            onClick={() => setRole("provider")}
                        >
                            Provider
                        </Button>
                    </div>
                </CardHeader>



                <CardContent>
                    {role === "user"
                        ? <UserRegisterForm />
                        : <ProviderRegisterForm />
                    }
                </CardContent>
                <CardFooter>
                    <p>
                        Bạn đã có tài khoản?
                        <Link to="/login" className="text-green-500 hover:text-gray-500"> Đăng nhập</Link>
                    </p>
                </CardFooter>
            </Card >
        </div>
    );
}

export default RegisterPage;
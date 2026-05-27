import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/auth/use-auth";
import { LogOut, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
    const { isAuthenticated, user, logout } = useAuth();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="mx-auto flex h-16 items-center justify-between px-6">
                <Link to="/" className="text-2xl font-bold">
                    Travel Vista
                </Link>

                {isAuthenticated ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="gap-2">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={user?.avatarUrl || "/defaultAvt.png"} />
                                    <AvatarFallback>
                                        <UserIcon className="h-5 w-5" />
                                    </AvatarFallback>
                                </Avatar>

                                <span>{user?.username}</span>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="mt-3">
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link to="/profile"> <UserIcon />Tài khoản của tôi</Link>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem
                                onClick={logout}
                                className="text-red-600 cursor-pointer"
                            >
                                <LogOut className="mr-2 h-4 w-4 " />
                                Đăng xuất
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link to="/register">
                            <Button variant="outline">Register</Button>
                        </Link>

                        <Link to="/login">
                            <Button>Login</Button>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
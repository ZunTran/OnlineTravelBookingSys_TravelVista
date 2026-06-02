import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SERVICE_TYPES } from "@/constants/FilterMenu";
import { useAuth } from "@/hooks/auth/use-auth";
import { Heart, LogOut, ShoppingCart, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
    const { isAuthenticated, user, logout } = useAuth();


    return (
        <header className="sticky top-0 z-[999] w-full border-b bg-white">
            <div className="mx-auto flex h-16 items-center justify-between px-6">
                <Link to="/" className="text-2xl font-bold">
                    Travel Vista
                </Link>

                <nav className="hidden items-center gap-10 md:flex">
                    <Link
                        to="/"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Home
                    </Link>
                    {SERVICE_TYPES.map((type) => (
                        <Link
                            key={type.value}
                            to={`/${type.path}`}
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            {type.label}
                        </Link>
                    ))}
                </nav>

                {isAuthenticated ? (
                    <div className="flex items-center gap-3">

                        {user?.roleName === "CUSTOMER" &&
                            <>
                                <Button variant="ghost" size="icon" className="mr-4">
                                    <Link to="/user/favourite">
                                        <Heart className="h-5 w-5" />
                                    </Link>
                                </Button>

                                <Button variant="ghost" size="icon">
                                    <Link to="/user/cart">
                                        <ShoppingCart className="h-5 w-5" />
                                    </Link>
                                </Button>
                            </>}

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="gap-2">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={user?.avatarUrl || "/defaultAvt.png"} />
                                        <AvatarFallback>
                                            <UserIcon className="h-5 w-5" />
                                        </AvatarFallback>
                                    </Avatar>

                                    <span>{user?.fullName}</span>
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" sideOffset={10} className="mt-3 z-[1000] w-56 bg-white">
                                <DropdownMenuItem asChild className="cursor-pointer">
                                    <Link to="/user/profile"> <UserIcon />Tài khoản của tôi</Link>
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
                    </div>
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
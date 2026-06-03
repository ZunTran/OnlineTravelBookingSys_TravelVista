import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, Heart, LogOut, Shield, Ticket, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const ProfileSidebar = ({ user, onLogout }) => {

    const location = useLocation();

    const menus = [
        { label: "Tài khoản của tôi", icon: User, path: "/user/profile" },
        { label: "Đơn đặt chỗ", icon: Ticket, path: "/user/order" },
        { label: "Yêu thích", icon: Heart, path: "/user/favourite" },
        // { label: "Thông báo", icon: Bell, path: "/user/notifications" },
        { label: "Bảo mật tài khoản", icon: Shield, path: "/user/security" },
    ];

    return (
        <aside className="w-full max-w-xs rounded-2xl border bg-white shadow-sm">
            <div className="flex items-center gap-4 border-b p-5">
                <Avatar className="h-14 w-14">
                    <AvatarImage src={user?.avatarUrl} />
                    <AvatarFallback>
                        {user?.fullName?.charAt(0) || "U"}
                    </AvatarFallback>
                </Avatar>

                <div>
                    <h3 className="font-semibold">
                        {user?.fullName || "Người dùng"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        @{user?.username || "username"}
                    </p>
                </div>
            </div>

            <nav className="p-3">
                {menus.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`
                                flex items-center gap-3 rounded-lg p-3 transition-colors
                                ${isActive
                                    ? "bg-black text-white font-medium"
                                    : "hover:bg-zinc-100"
                                }
                            `}
                        >
                            <div className="flex items-center gap-3">
                                <Icon className="h-5 w-5" />
                                <span>{item.label}</span>
                            </div>

                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                    );
                })}

                <button
                    onClick={onLogout}
                    className="mt-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-600 transition hover:bg-red-50"
                >
                    <LogOut className="h-5 w-5" />
                    Đăng xuất
                </button>
            </nav>
        </aside>
    );
}

export default ProfileSidebar;
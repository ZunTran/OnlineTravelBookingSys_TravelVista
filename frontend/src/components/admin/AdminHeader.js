import { Link, useLocation } from "react-router-dom";

import { BarChart3, LogOut, Users } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";


const AdminSidebar = () => {

    const location = useLocation();
    const menu = [
        {
            icon: BarChart3,
            label: "Tổng quan",
            path: "/admin/dashboard",
        },
        {
            icon: Users,
            label: "Nhà cung cấp",
            path: "/admin/users",
        },
    ];

    return (
        <aside className="w-64 bg-white border-r sticky top-0 h-screen flex flex-col">

            <div className="p-6">

                <div className="font-bold text-xl">
                    Travel Vista
                </div>

                <div className="text-xs text-muted-foreground">
                    Admin Panel
                </div>

            </div>

            <Separator />

            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">

                {menu.map((item) => {

                    const Icon = item.icon;

                    const isActive =
                        location.pathname === item.path;

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

                            <Icon className="h-5 w-5" />

                            <span>
                                {item.label}
                            </span>

                        </Link>
                    );
                })}

            </nav>

            <Separator />

            <div className="p-4 space-y-2">
                <Link to="/">
                    <Button
                        variant="outline"
                        className="w-full justify-start text-red-600 hover:text-red-700"
                    >

                        <LogOut className="mr-3 h-5 w-5" />

                        Thoát quyển quản trị

                    </Button>
                </Link>

            </div>

        </aside>
    );
};

export default AdminSidebar;
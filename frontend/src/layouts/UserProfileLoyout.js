import MyBreadcrumb from "@/components/common/MyBreadcrumb";
import ProfileSidebar from "@/components/user/profile/ProfileSidebar";
import { useAuth } from "@/hooks/auth/use-auth";
import { Outlet } from "react-router-dom";

const UserProfileLayout = () => {
    const { user, logout } = useAuth();

    return (
        <section className="w-full max-w-7xl px-6 py-8">
            <MyBreadcrumb path="Profile" />
            <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
                <aside className="self-start">
                    <ProfileSidebar
                        user={user}
                        onLogout={logout}
                    />
                </aside>

                <main>
                    <Outlet />
                </main>
            </div>
        </section>
    );
};

export default UserProfileLayout;
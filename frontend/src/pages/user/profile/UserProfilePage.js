import ProfileInfoForm from "@/components/user/profile/ProfileInfoForm";
import { useAuth } from "@/hooks/auth/use-auth";

const UserProfilePage = () => {
    const { user } = useAuth();

    return (
        <div className="space-y-6">
            <ProfileInfoForm user={user} />
        </div>
    );
}

export default UserProfilePage;
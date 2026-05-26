import MyBreadcrumb from "@/components/common/MyBreadcrumb";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="flex gap-10 p-10">
            <Link to="/admin/dashboard">Admin</Link>
            <Link to="/provider/dashboard">Provider</Link>
            <Link to="/transport" >Đặt vé chuyến đi</Link>
            <MyBreadcrumb path="Test" />
        </div>
    );
}

export default HomePage;
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Button variant="ghost">Click Me</Button>
            <Link to={'/login'} >Login</Link>
            <Link to={'/register'}>Register</Link>
        </>
    );
}

export default HomePage;
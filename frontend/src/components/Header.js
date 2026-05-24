import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="mx-auto flex h-16 items-center justify-between px-6">

                <Link
                    to="/"
                    className="text-2xl font-bold"
                >
                    Travel Vista
                </Link>

                <div className="flex items-center gap-3">
                    <Link to="/register">
                        <Button variant="outline">
                            Register
                        </Button>
                    </Link>

                    <Link to="/login">
                        <Button variant='default'>
                            Login
                        </Button>
                    </Link>
                </div>

            </div>
        </header>
    );
}

export default Header;
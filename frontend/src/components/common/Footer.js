import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full border-t bg-zinc-50 mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="flex flex-wrap justify-between gap-10 pb-10 border-b">

                    <div className="flex-1 min-w-[250px]">
                        <h3 className="text-2xl font-bold mb-4">
                            Travel Vista
                        </h3>

                        <p className="text-muted-foreground leading-7 max-w-sm">
                            Description nè
                        </p>
                    </div>

                    <div className="flex-1 min-w-[180px]">
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                            Explore
                        </h4>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-black transition-colors"
                                >
                                    Destinations
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-black transition-colors"
                                >
                                    Hotels
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-black transition-colors"
                                >
                                    Flights
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 min-w-[180px]">
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                            Support
                        </h4>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-black transition-colors"
                                >
                                    Help Center
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-black transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-black transition-colors"
                                >
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="flex-1 min-w-[180px]">
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                            Company
                        </h4>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-black transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-black transition-colors"
                                >
                                    Careers
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-black transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-sm text-muted-foreground">

                    <p>
                        &copy; 2026 Han - Travel Vista. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            to="/"
                            className="hover:text-black transition-colors"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            to="/"
                            className="hover:text-black transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
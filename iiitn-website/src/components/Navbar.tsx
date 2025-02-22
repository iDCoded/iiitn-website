import { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Primary Navbar (Visible on Hero Section) */}
            <div
                className={`transition-transform duration-10 ${
                    isScrolled ? "-translate-y-full" : "translate-y-0"
                } fixed top-0 left-0 w-full z-50`}
            >
                {/* Topmost Orange Navbar */}
                <nav className="w-full bg-[#E87722] shadow-md">
                    <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                        <h1 className="text-[#002147] font-bold text-2xl">3A</h1>
                        <ul className="hidden md:flex space-x-6 font-medium text-[#002147]">
                            <li className="hover:text-white cursor-pointer">Students</li>
                            <li className="hover:text-white cursor-pointer">Faculty</li>
                            <li className="hover:text-white cursor-pointer">Alumni</li>
                            <li className="hover:text-white cursor-pointer">Contact</li>
                            <li className="hover:text-white cursor-pointer">Visitors</li>
                        </ul>
                    </div>
                </nav>

                {/* Middle White Navbar with IIITN Logo */}
                <nav className="w-full bg-white shadow-md">
                    <div className="max-w-7xl mx-auto px-6 py-3 flex justify-center items-center">
                        <div className="flex items-center space-x-4">
                            <img src="/path/to/logo.png" alt="IIITN Logo" className="h-10 w-10" />
                            <div className="text-center">
                                <p className="text-[#002147] font-medium">भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर</p>
                                <p className="text-[#002147] font-medium">Indian Institute of Information Technology, Nagpur</p>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Bottom Dark Blue Navbar */}
                <nav className="w-full bg-[#002147] text-white shadow-md">
                    <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                        <h1 className="text-white font-bold text-2xl">3A</h1>
                        <ul className="hidden md:flex space-x-6 font-medium">
                            <li className="hover:text-[#E87722] cursor-pointer">Research</li>
                            <li className="hover:text-[#E87722] cursor-pointer">Admissions</li>
                            <li className="hover:text-[#E87722] cursor-pointer">Academics</li>
                            <li className="hover:text-[#E87722] cursor-pointer">Institute</li>
                            <li className="hover:text-[#E87722] cursor-pointer">Departments</li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Secondary Navbar (Appears on Scroll) */}
            <div
                className={`fixed top-0 left-0 w-full transition-transform duration-10 ${
                    isScrolled ? "translate-y-0" : "-translate-y-full"
                } z-50`}
            >
                {/* White Navbar */}
                <nav className="bg-[#E87722] shadow-md">
                    <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                        <h1 className="text-[#002147] font-bold text-2xl">3A</h1>
                        <ul className="hidden md:flex space-x-6 font-medium text-[#002147]">
                            <li className="hover:text-[#E87722] cursor-pointer">Students</li>
                            <li className="hover:text-[#E87722] cursor-pointer">Faculty</li>
                            <li className="hover:text-[#E87722] cursor-pointer">Alumni</li>
                            <li className="hover:text-[#E87722] cursor-pointer">Contact</li>
                            <li className="hover:text-[#E87722] cursor-pointer">Visitors</li>
                        </ul>
                    </div>
                </nav>

                {/* Dark Blue Navbar */}
                <nav className="bg-[#002147] text-white shadow-md">
                    <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                        <h1 className="text-white font-bold text-2xl">3A</h1>
                        <ul className="hidden md:flex space-x-6 font-medium">
                            <li className="hover:text-[#E87722] cursor-pointer">Research</li>
                            <li className="hover:text-[#E87722] cursor-pointer">Admissions</li>
                            <li className="hover:text-[#E87722] cursor-pointer">Academics</li>
                            <li className="hover:text-[#E87722] cursor-pointer">Institute</li>
                            <li className="hover:text-[#E87722] cursor-pointer">Departments</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;

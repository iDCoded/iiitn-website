import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

    useEffect(() => {
        const handleScroll = () => {
            if (window.location.pathname === "/") {
                setIsScrolled(window.scrollY > window.innerHeight - window.innerHeight * 0.05);
            } else {
                setIsScrolled(window.scrollY > 20);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle dropdowns
    const toggleDropdown = (menu: string) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <>
            {/* Primary Navbar (Visible on Hero Section) */}
            <div className={`transition-transform duration-200 ${isScrolled ? "-translate-y-full" : "translate-y-0"} fixed top-0 left-0 w-full z-50`}>
                {/* Topmost Orange Navbar */}
                <nav className="w-full bg-[#E87722] shadow-md">
                    <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                        <h1 className="text-[#002147] font-bold text-xl">अ A</h1>
                        <ul className="hidden md:flex space-x-6 font-medium text-[#002147]">
                            <li className="hover:text-white"><a href="/students">Students</a></li>
                            <li className="hover:text-white"><a href="/facultyandstaff">Faculty</a></li>
                            <li className="hover:text-white"><a href="/alumni">Alumni</a></li>
                            <li className="hover:text-white"><a href="/contact">Contact</a></li>
                            <li className="hover:text-white"><a href="/visitors">Visitors</a></li>
                        </ul>

                        {/* Mobile Menu Icon */}
                        <button className="md:hidden text-[#002147] text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </nav>

                {/* Middle White Navbar with IIITN Logo */}
                <nav className="w-full bg-white shadow-md">
                    <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                        <a href="/">
                            <div className="flex items-center space-x-4">
                                <img src="/path/to/logo.png" alt="IIITN Logo" className="h-8 w-8" />
                                <div className="text-left">
                                    <p className="text-[#002147] font-medium">भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर</p>
                                    <p className="text-[#002147] font-medium">Indian Institute of Information Technology, Nagpur</p>
                                    <p className="text-[#E87722] font-light text-sm">An Institution of National Importance</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </nav>

                {/* Bottom Dark Blue Navbar */}
                <nav className={`text-white ${isScrolled ? "shadow-md" : ""}`} style={{ backgroundColor: window.location.pathname === "/" ? "#00214700" : "#002147" }}>
                    <div className="max-w-7xl mx-auto px-6 py-3">
                        {/* Desktop Menu */}
                        <ul className="hidden md:flex justify-center space-x-10 font-medium text-lg">
                            {/* 🔹 Dropdown: Governance */}
                            <li className="relative group cursor-pointer hover:text-[#E87722]">
                                Governance
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/governance/committee">Committee</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/governance/administration">Administration</a></li>
                                </ul>
                            </li>

                            {/* 🔹 Dropdown: Academics */}
                            <li className="relative group cursor-pointer hover:text-[#E87722]">
                                Academics
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/academics/programs">Programs</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/departments">Departments</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/academics/courses">Courses</a></li>
                                </ul>
                            </li>

                            <li className="hover:text-[#E87722] relative group cursor-pointer">
                                Admissions
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/admissions/btech">B.Tech</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/admissions/mtech">M.Tech</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/admissions/phd">Ph.D.</a></li>
                                </ul>
                            </li>

                            {/* 🔹 Dropdown: Research */}
                            <li className="relative group cursor-pointer hover:text-[#E87722]">
                                Research
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/research/publications">Publications</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/research/projects">Projects</a></li>
                                </ul>
                            </li>

                            <li className="hover:text-[#E87722] group cursor-pointer relative">
                                Placements
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements">Why Recruit from IIIT Nagpur</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/internships">Internships</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/statistics">Statistics</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/companies">Companies</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/students">Students</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/contact">Contact T&P</a></li>
                                </ul>
                            </li>
                            <li className="hover:text-[#E87722]"><a href="/about">About</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Secondary Navbar (Visible on Scroll) */}
            <div className={`transition-transform duration-200 ${isScrolled ? "translate-y-0" : "-translate-y-full"} fixed top-0 left-0 w-full z-50`}>
                {/* Topmost Orange Navbar */}
                <nav className="w-full bg-[#E87722] shadow-md">
                    <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                        <a href="/">
                            <img src="/path/to/logo.png" alt="IIITN Logo" className="h-8 w-8" />
                        </a>
                        <ul className="hidden md:flex space-x-6 font-medium text-[#002147]">
                            <li className="hover:text-white"><a href="/students">Students</a></li>
                            <li className="hover:text-white"><a href="/facultyandstaff">Faculty</a></li>
                            <li className="hover:text-white"><a href="/alumni">Alumni</a></li>
                            <li className="hover:text-white"><a href="/contact">Contact</a></li>
                            <li className="hover:text-white"><a href="/visitors">Visitors</a></li>
                        </ul>
                    

                        {/* Mobile Menu Icon */}
                        <button className="md:hidden text-[#002147] text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </nav>

                {/* bottom blue navbar */}
                <nav className={`text-white bg-[#002147] ${isScrolled ? "shadow-md" : ""}`}>
                    <div className="max-w-7xl mx-auto px-6 py-3">
                        {/* Desktop Menu */}
                        <ul className="hidden md:flex justify-center space-x-10 font-medium text-lg">
                            {/* 🔹 Dropdown: Governance */}
                            <li className="relative group cursor-pointer hover:text-[#E87722]">
                                Governance
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/governance/committee">Committee</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/governance/administration">Administration</a></li>
                                </ul>
                            </li>

                            {/* 🔹 Dropdown: Academics */}
                            <li className="relative group cursor-pointer hover:text-[#E87722]">
                                Academics
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/academics/programs">Programs</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/departments">Departments</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/academics/courses">Courses</a></li>
                                </ul>
                            </li>

                            <li className="hover:text-[#E87722] relative group cursor-pointer">
                                Admissions
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/admissions/btech">B.Tech</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/admissions/mtech">M.Tech</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/admissions/phd">Ph.D.</a></li>
                                </ul>
                            </li>

                            {/* 🔹 Dropdown: Research */}
                            <li className="relative group cursor-pointer hover:text-[#E87722]">
                                Research
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/research/publications">Publications</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/research/projects">Projects</a></li>
                                </ul>
                            </li>

                            <li className="hover:text-[#E87722] group cursor-pointer relative">
                                Placements
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements">Why Recruit from IIIT Nagpur</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/internships">Internships</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/statistics">Statistics</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/companies">Companies</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/students">Students</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/contact">Contact T&P</a></li>
                                </ul>
                            </li>
                            <li className="hover:text-[#E87722]"><a href="/about">About</a></li>
                        </ul>
                    </div>
                </nav>

                
            </div>

            {/* Mobile Menu (Sliding Drawer) */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
                <div className="w-3/4 max-w-sm bg-white h-full shadow-lg overflow-y-auto p-6">
                    <button className="text-2xl text-[#002147] mb-4" onClick={() => setIsMobileMenuOpen(false)}>
                        <FaTimes />
                    </button>

                    <ul className="space-y-4">
                        <li>
                            Governance
                        </li>
                        <li><a href="/about" className="text-[#002147] font-medium">About</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;

import { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight - window.innerHeight*0.05);
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
                className={`transition-transform duration-200 ${isScrolled ? "-translate-y-full" : "translate-y-0"
                    } fixed top-0 left-0 w-full z-50`}
            >
                {/* Topmost Orange Navbar */}
                <nav className="w-full bg-[#E87722] shadow-md">
                    <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                        <h1 className="text-[#002147] font-bold text-xl">अ A</h1>
                        <ul className="hidden md:flex space-x-6 font-medium text-[#002147]">
                            <li className="hover:text-white cursor-pointer"><a href="/students">Students</a></li>
                            <li className="hover:text-white cursor-pointer"><a href="/facultyandstaff">Faculty</a></li>
                            <li className="hover:text-white cursor-pointer"><a href="/alumni">Alumni</a></li>
                            <li className="hover:text-white cursor-pointer"><a href="/contact">Contact</a></li>
                            <li className="hover:text-white cursor-pointer"><a href="/visitors">Visitors</a></li>
                        </ul>
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
                                    <p className="text-[#E87722] font-light text-sm">An Institution of National Importance By An Act of Parliament
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div className="flex items-center space-x-4">
                            <img src="/path/to/indian-emblem.png" alt="Indian Emblem" className="h-8 w-8" />
                            <img src="/path/to/swacchh-bharath.png" alt="Swacchh Bharath Logo" className="h-8 w-8" />
                        </div>
                    </div>
                </nav>

                {/* Bottom Dark Blue Navbar */}
                <nav className={`bg-[#00214700]  text-white ${isScrolled ? "shadow-md" : ""}`}>
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

            {/* Secondary Navbar (Appears on Scroll) */}
            <div
                className={`fixed top-0 left-0 w-full transition-transform duration-200 ${isScrolled ? "translate-y-0" : "-translate-y-full"
                    } z-50`}
            >
                {/* Orange Navbar */}
                <nav className="bg-[#E87722] shadow-md">
                    <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
                        <img src="/path/to/logo.png" alt="IIITN Logo" className="h-8 w-8" />
                        <ul className="hidden md:flex space-x-4 font-medium text-[#002147]">
                            <li className="hover:text-white cursor-pointer"><a href="/students">Students</a></li>
                            <li className="hover:text-white cursor-pointer"><a href="/facultyandstaff">Faculty</a></li>
                            <li className="hover:text-white cursor-pointer"><a href="/alumni">Alumni</a></li>
                            <li className="hover:text-white cursor-pointer"><a href="/contact">Contact</a></li>
                            <li className="hover:text-white cursor-pointer"><a href="/visitors">Visitors</a></li>
                        </ul>
                    </div>
                </nav>

                {/* Dark Blue Navbar */}
                <nav className={`bg-[#002147] text-white ${isScrolled ? "shadow-md" : ""}`}>
                    <div className="max-w-7xl mx-auto px-6 py-3">
                        {/* Desktop Menu */}
                        <ul className="hidden md:flex justify-center space-x-10 font-medium text-lg">
                            <li className="relative group cursor-pointer hover:text-[#E87722]">Governance
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/governance/committee">Committee</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/governance/administration">Administration</a></li>
                                </ul>
                            </li>

                            {/* 🔹 Dropdown: Academics */}
                            <li className="hover:text-[#E87722] relative group cursor-pointer">
                                Academics
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/academics/programs">Programs</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/academics/departments">Departments</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/academics/courses">Courses</a></li>
                                </ul>
                            </li>

                            <li className="hover:text-[#E87722] relative group cursor-pointer">Admissions
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

                            <li className="relative group cursor-pointer hover:text-[#E87722]">Placements
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements">Why Recruit from IIIT Nagpur</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/internships">Internships</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/statistics">Statistics</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/companies">Companies</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/students">Students</a></li>
                                    <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white"><a href="/placements/contact">Contact T&P</a></li>
                                </ul></li>
                            <li className="hover:text-[#E87722]"><a href="/about">About</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
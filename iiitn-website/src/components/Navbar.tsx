import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
    const [isHomePage, setIsHomePage] = useState(window.location.pathname === "/");

    useEffect(() => {
        const handleScroll = () => {
            if (isHomePage) {
                setIsScrolled(window.scrollY > window.innerHeight - window.innerHeight * 0.35);
            } else {
                setIsScrolled(window.scrollY > 20);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHomePage]);

    // Toggle dropdowns
    const toggleDropdown = (menu: string) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <>
            {/* Primary Navbar (Visible on Hero Section) */}
            <div className={`transition-transform duration-200 fixed top-0 left-0 w-full z-50`}>
                {/* Topmost Orange Navbar */}
                <nav className="w-full bg-[#E87722] shadow-md">
                    <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                        <h1 className="text-[#002147] font-bold text-xl">अ A</h1>
                        <ul className="hidden md:flex space-x-6 font-medium text-[#002147]">
                            <a href="/students"><li className="hover:text-white">Students</li></a>
                            <a href="/facultyandstaff"><li className="hover:text-white">Faculty</li></a>
                            <a href="/alumni"><li className="hover:text-white">Alumni</li></a>
                            <a href="/contact"><li className="hover:text-white">Contact</li></a>
                            <a href="/visitors"><li className="hover:text-white">Visitors</li></a>
                        </ul>

                        {/* Mobile Menu Icon */}
                        <button className="md:hidden text-[#002147] text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </nav>

                {/* Middle White Navbar with IIITN Logo */}
                <nav className={`w-full flex flex-row justify-between ${isHomePage && !isScrolled ? "bg-transparent" : "bg-[#002147]"}`}>
                    <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                        <a href="/">
                            <div className="flex items-center space-x-4">
                                <img src="/path/to/logo.png" alt="IIITN Logo" className="h-8 w-8" />
                                <div className="text-left">
                                    <p className="font-medium text-white">भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर</p>
                                    <p className="font-medium text-white">Indian Institute of Information Technology, Nagpur</p>
                                    <p className="font-light text-sm text-[#E87722]">An Institution of National Importance</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 py-3">
                        {/* Desktop Menu */}
                        <ul className="hidden md:flex space-x-10 font-medium text-lg text-white">
                            {/* 🔹 Dropdown: Governance */}
                            <li className="relative group cursor-pointer hover:text-[#E87722]">
                                Governance
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <a href="/governance/committee"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">Committee</li></a>
                                    <a href="/governance/administration"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">Administration</li></a>
                                </ul>
                            </li>

                            {/* 🔹 Dropdown: Academics */}
                            <li className="relative group cursor-pointer hover:text-[#E87722]">
                                Academics
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <a href="/departments"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">Departments</li></a>
                                    <a href="/academics/courses"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">Courses</li></a>
                                </ul>
                            </li>

                            <li className="hover:text-[#E87722] relative group cursor-pointer">
                                Admissions
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <a href="/admissions/btech"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">B.Tech</li></a>
                                    <a href="/admissions/mtech"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">M.Tech</li></a>
                                    <a href="/admissions/phd"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">Ph.D.</li></a>
                                </ul>
                            </li>

                            {/* 🔹 Dropdown: Research */}
                            <li className="relative group cursor-pointer hover:text-[#E87722]">
                                Research
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <a href="/research/publications"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">Publications</li></a>
                                    <a href="/research/projects"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">Projects</li></a>
                                </ul>
                            </li>

                            <li className="hover:text-[#E87722] group cursor-pointer relative">
                                Placements
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <a href="/placements"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">Why Recruit from IIIT Nagpur</li></a>
                                    <a href="/placements/internships"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">Internships</li></a>
                                    <a href="/placements/statistics"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">Statistics</li></a>
                                    <a href="/placements/companies"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">Companies</li></a>
                                    <a href="/placements/students"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">Students</li></a>
                                    <a href="/placements/contact"><li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">Contact T&P</li></a>
                                </ul>
                            </li>
                            <li className="hover:text-[#E87722]"><a href="/about">About</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu (Sliding Drawer) */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="w-3/4 max-w-sm bg-white h-full shadow-lg overflow-y-auto p-6 mobile-menu transform transition-all duration-300 ease-in-out">

                    {/* Close Button */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-[#002147]">Menu</h2>
                        <button className="text-2xl text-[#002147]" onClick={() => setIsMobileMenuOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <ul className="space-y-4">
                        {[
                            { title: "Governance", links: [{ name: "Committee", href: "/governance/committee" }, { name: "Administration", href: "/governance/administration" }] },
                            { title: "Academics", links: [{ name: "Programs", href: "/academics/programs" }, { name: "Departments", href: "/departments" }, { name: "Courses", href: "/academics/courses" }] },
                            { title: "Admissions", links: [{ name: "B.Tech", href: "/admissions/btech" }, { name: "M.Tech", href: "/admissions/mtech" }, { name: "Ph.D.", href: "/admissions/phd" }] },
                            { title: "Research", links: [{ name: "Publications", href: "/research/publications" }, { name: "Projects", href: "/research/projects" }] },
                            { title: "Placements", links: [{ name: "Why Recruit from IIIT Nagpur", href: "/placements" }, { name: "Internships", href: "/placements/internships" }, { name: "Statistics", href: "/placements/statistics" }, { name: "Companies", href: "/placements/companies" }, { name: "Students", href: "/placements/students" }, { name: "Contact T&P", href: "/placements/contact" }] }
                        ].map((item) => (
                            <li key={item.title}>
                                <button onClick={() => toggleDropdown(item.title)} className="flex justify-between items-center w-full text-[#002147] font-medium text-lg py-2">
                                    {item.title}
                                    <span>{openDropdown === item.title ? "▲" : "▼"}</span>
                                </button>
                                {openDropdown === item.title && (
                                    <ul className="ml-4 mt-2 border-l-2 border-[#E87722] space-y-2">
                                        {item.links.map((link) => (
                                            <li key={link.href}>
                                                <a href={link.href} className="block py-1 px-3 text-[#002147] text-sm hover:bg-[#E87722] hover:text-white rounded-md transition-all">
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                        <li><a href="/about" className="block text-[#002147] font-medium text-lg py-2 hover:bg-[#E87722] hover:text-white rounded-md px-3 transition-all">About</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;

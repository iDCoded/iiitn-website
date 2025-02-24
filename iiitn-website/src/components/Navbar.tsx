import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle
import logo from "../assets/logo.png"; // Logo Image

const imgSrc = logo;

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHomePage, setIsHomePage] = useState(window.location.pathname === "/");

    useEffect(() => {
        const handleScroll = () => {
            if (isHomePage) {
                setIsScrolled(window.scrollY > window.innerHeight * 0.65);
            } else {
                setIsScrolled(window.scrollY > 20);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHomePage]);

    // Navbar Links
    const navLinks = [
        { title: "Students", href: "/students" },
        { title: "Faculty", href: "/facultyandstaff" },
        { title: "Alumni", href: "/alumni" },
        { title: "Recruitment", href: "/recruitments" },
        { title: "Visitors", href: "/visitors" },
    ];

    const dropdownLinks = [
        {
            title: "Governance",
            links: [
                { name: "Committee", href: "/governance/committee" },
                { name: "Administration", href: "/governance/administration" }
            ]
        },
        {
            title: "Academics",
            links: [
                { name: "Departments", href: "/departments" },
                { name: "Courses", href: "/academics/courses" },
                { name: "Curriculum", href: "/academics/curriculum" },
                { name: "Time Table", href: "/academics/timetable" },
                { name: "Fees", href: "/pages/academicfee" }
            ]
        },
        {
            title: "Admissions",
            links: [
                {
                    name: "B.Tech",
                    href: "/admissions/btech",
                    subLinks: [
                        { name: "Admission Process", href: "/admissions/btech/process" },
                        { name: "Eligibility", href: "/admissions/btech/eligibility" },
                        { name: "Seat Matrix", href: "/admissions/btech/seat-matrix" }
                    ]
                },
                { name: "Post Graduate", href: "/admissions/mtech" }
            ]
        },
        {
            title: "Research",
            links: [
                { name: "Publications", href: "/research/publications" },
                { name: "Projects", href: "/research/projects" }
            ]
        },
        {
            title: "Placements",
            links: [
                { name: "Why Recruit from IIIT Nagpur", href: "/placements" },
                { name: "Internships", href: "/placements/internships" },
                { name: "Statistics", href: "/placements/statistics" },
                { name: "Companies", href: "/placements/companies" }
            ]
        },
        {
            title: "Others",
            links: [
                { name: "Consultancy", href: "/pages/consultancy" },
                { name: "Institution Innovation Council", href: "/pages/iic" },
                { name: "Electoral Literacy Club", href: "/pages/elclub" },
                { name: "Guest House", href: "/pages/guesthouse" },
                { name: "Press Release", href: "/pages/pressrelease" },
                { name: "Tenders", href: "/pages/tenders" },
                { name: "RTI", href: "/pages/rti" },
                { name: "Official Documents", href: "/pages/officialdocuments" },
            ]
        }
    ];


    return (
        <>
            {/* Transparent Overlay (Only for Home Page) */}
            {isHomePage && <div className="absolute left-0 top-5 w-full h-[33vh] bg-gradient-to-b from-[#002147] via-[#7BA4D4] to-transparent z-1"></div>}

            {/* Fixed Navbar */}
            <div className="fixed top-0 left-0 w-full z-50 transition-transform duration-200">
                {/* 🔸 Top Orange Bar */}
                <nav className="w-full bg-[#E87722] shadow-md px-6 py-2 flex justify-between items-center">
                    <h1 className="text-[#002147] font-bold text-xl">अ A</h1>
                    <ul className="hidden lg:flex space-x-6 font-medium text-[#002147]">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className="hover:text-white">{link.title}</a>
                        ))}
                    </ul>
                </nav>

                {/* 🔹 Middle Section with Logo and Mobile Menu Button */}
                <nav className={`w-full px-8 py-2 flex justify-between items-center ${isHomePage && !isScrolled ? "bg-transparent" : "bg-[#002147]"}`}>
                    <a href="/">
                        <div className="flex items-center space-x-4">
                            <img src={imgSrc} alt="IIITN Logo" className="h-16 w-16" />
                            <div className="text-left">
                                <p className="font-bold text-white text-lg">भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर</p>
                                <p className="font-medium text-white text-base">Indian Institute of Information Technology, Nagpur</p>
                                <p className="font-light text-sm text-[#E87722]">An Institution of National Importance</p>
                            </div>
                        </div>
                    </a>

                    {/* Mobile Menu Toggle Button (Now in Blue Navbar) */}
                    <button className="lg:hidden text-white text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <div className="hidden lg:block px-6 py-3">
                        <ul className="flex space-x-10 text-lg text-white font-medium">
                            {dropdownLinks.map((item, index) => (
                                <li key={index} className="relative group cursor-pointer hover:text-[#E87722]">
                                    {item.title}
                                    <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#002147] border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        {item.links.map((link, i) => (
                                            <a key={i} href={link.href}>
                                                <li className="px-4 py-2 hover:bg-[#E87722] hover:text-white">{link.name}</li>
                                            </a>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                            <li className="hover:text-[#E87722]"><a href="/about">About</a></li>
                        </ul>
                    </div>
                </nav>

                {/* 🔹 Desktop Menu (Only Visible for Large Screens) */}

            </div>

            {/* 🔹 Mobile Menu Drawer (Visible on Small Screens) */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="w-3/4 max-w-sm bg-white h-full shadow-lg overflow-y-auto p-6 transform transition-all duration-300 ease-in-out">
                    {/* Close Button */}
                    <button className="text-2xl text-[#002147] mb-4 flex-row" onClick={() => setIsMobileMenuOpen(false)}>
                        Menu <FaTimes />
                    </button>
                    {/* Mobile Menu Items */}
                    <ul className="space-y-4">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className="block text-lg font-medium text-[#002147] hover:text-[#E87722]">{link.title}</a>
                        ))}
                        {dropdownLinks.map((item, index) => (
                            <div key={index} className="space-y-2">
                                <p className="font-semibold text-[#002147]">{item.title}</p>
                                {item.links.map((link, i) => (
                                    <a key={i} href={link.href} className="block pl-4 text-[#002147] hover:text-[#E87722]">{link.name}</a>
                                ))}
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;

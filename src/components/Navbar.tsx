import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa"; // Icons for menu toggle
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"; // Icons for dropdowns
import logo from "../assets/logo.png"; // Logo Image
import Search from "@/search";

const imgSrc = logo;

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isHomePage, setIsHomePage] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<number | null>(null);

	const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
	const [openNestedSubmenu, setOpenNestedSubmenu] = useState<number | null>(
		null
	);

	useEffect(() => {
		const handleScroll = () => {
			if (isHomePage) {
				setIsScrolled(window.scrollY > window.innerHeight * 0.7);
			} else {
				setIsScrolled(window.scrollY > 20);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isHomePage]);

	const location = useLocation();

	useEffect(() => {
		setIsHomePage(location.pathname === "/");
	}, [location]);

	interface Link {
		title?: string;
		name?: string;
		href?: string;
		links?: Link[];
		subLinks?: Link[];
		nestedLinks?: Link[];
	}

	const dropdownLinks: Link[] = [
		{
			title: "Institute",
			links: [
				{
					name: "About Us",
					subLinks: [
						{ name: "Overview", href: "/about" },
						{
							name: "Annual accounts and reports",
							href: "/institute/annualreports",
						},
						{
							name: "RTI Reports",
							href: "/institute/rtireports",
						},
						{
							name: "RTI Details",
							href: "/institute/rtidetails",
						},
						{
							name: "RTI Officers",
							href: "/institute/rticontact",
						},
						{
							name: "Minutes of Meeting",
							href: "/institute/minutesofmeeting",
						},
						{
							name: "Immutable Properties",
							href: "/institute/immutableproperties",
						},
					],
				},
				{ name: "Institute Profile ", href: " /institute/institutesprofile" },
				{
					name: "Administration ",
					subLinks: [
						{
							name: "Administration",
							href: "/governance/administration",
						},
						{
							name: "Committees",
							href: "/governance/committee",
						},
						
						],
				},
				{ name: "Campus Photo Gallery", href: "/pages/campusgallery" },
				{ name: "Facilities", href: "/institute/facilities" },
				{ name: "Notices", href: "/notices" },
			],
		},
		{
			title: "Academics",
			links: [
				{ name: "Departments", href: "/departments" },
				{ name: "Programs", href: "/academics/courses" },
				{
					name: "Academic Curricula",
					href: "/academics/curricula",
				},
				{
					name: "Time Table",
					href: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSp2JfZZCxiV3e3n3uKekiLFOeh2XQzDov_YDAU4QLRIGD5H6HCoWmQKORMAd8chLib0p-I0749s1Uj/pubhtml?gid=371376379&single=true&urp=gmail_link",
				},
				{ name: "Fees", href: "/pages/academicfee" },
			],
		},
		{
			title: "Admissions",
			links: [
				{
					name: "B.Tech",
					subLinks: [
						{ name: "Admission Process", href: "/admissions/btech" },
						{ name: "Academic Fees", href: "/admissions/btech/acadfees" },
						{ name: "Hostel Fees", href: "/admissions/btech/hostelfees" },
						{ name: "Scholarships", href: "/pages/scholarships" },
						{
							name: "Academic Rule Book",
							href: "https://iiitn.ac.in/Downloads/AcademicRuleBook/Academic%20Rule%20Book_B.Tech_2024-25%20Onwards.pdf",
						},
						{
							name: "Last Year Cut-Off",
							href: "https://iiitn.ac.in/images/admission2024/CUT%20OOFF.pdf",
						},
						{ name: "Formats", href: "/pages/formats" },
						{
							name: "Loan Schemes", href: "/pages/loanschemes",
						},
					],
				},
				{
					name: "Post Graduate",
					href: "/admissions/pg",
				},
			],
		},
		{
			title: "Research",
			links: [
				{ name: "Publications", href: "/research/publications" },
				{ name: "Projects", href: "/research/projects" },
				{ name: "Consultancy", href: "/research/consultancy" },
			],
		},
		{
			title: "Placements",
			links: [
				{ name: "Why Recruit from IIIT Nagpur", href: "/placements" },
				{ name: "Internships", href: "/placements/internships" },
				{
					name: "Statistics",
					href: "/placements/statistics",
				},
				{ name: "For Companies", href: "/placements/companies" },
				{ name: "Contact T&P", href: "/placements/contact" },
			],
		},
		{ title: "NIRF", href: "/pages/nirf" },
		{
			title: "Others",
			links: [
				{ name: "Institution Innovation Council", href: "/pages/iic" },
				{ name: "Electoral Literacy Club", href: "/pages/elclub" },
				{ name: "Guest House", href: "/pages/guesthouse" },
				{ name: "Press Release", href: "/pages/pressrelease" },
				{ name: "RTI", href: "/pages/rti" },
				{ name: "Official Documents", href: "/pages/officialdocuments" },
			],
		},
		{
			title: "Information for",
			links: [
				{ name: "Students", href: "/students" },
				{ name: "Faculty & Staff", href: "/facultyandstaff" },
				{ name: "Alumni", href: "/alumni" },
				{ name: "Recruitment", href: "/recruitments" },
				{ name: "Visitors", href: "/visitors" },
				{ name: "Tenders", href: "/pages/tenders" },
			],
		}
	];

	return (
		<>
			{/* Transparent Overlay (Only for Home Page) */}
			{isHomePage && !isScrolled && (
				<div className="fixed left-0 top-0 w-full h-[18vh] bg-gradient-to-b from-primary via-[#4D79A6] to-transparent z-1"></div>
			)}


			{/* Fixed Navbar */}
			<div className="fixed top-0 left-0 w-full z-50 transition-transform duration-200">
				{/* 🔸 Top Orange Bar */}
				<nav className={`w-full px-6 py-2 flex justify-between items-center lg:flex ${isHomePage && !isScrolled ? "bg-transparent shadow-none text-white" : "bg-accent shadow-md text-primary"
					}`}>
					<a href="/">
						<div className="flex items-center space-x-4">
							<img src={imgSrc} alt="IIITN Logo" className="h-16 w-16" />
							<div className="flex flex-col">
								{ isScrolled &&
									<h1 className="font-bold text-xl hidden lg:block">Indian Institute of Information Technology, Nagpur</h1>}
							</div>
						</div>
					</a>
					{/* <div className="flex items-center space-x-6">
						<h1 className="hidden lg:flex font-medium text-xl">Information for: </h1>
						<ul className={`hidden lg:flex space-x-6 font-medium ${isHomePage && !isScrolled ? "text-white" : "text-primary"
							}`}>
							{navLinks.map((link, index) => (
								<a key={index} href={link.href} className="hover:text-white">
									{link.title}
								</a>
							))}
						</ul>
					</div> */}
					<div className="flex items-center space-x-6">
						<Search />
						<h1 className={`font-bold text-xl ${isHomePage && !isScrolled ? "text-white" : "text-primary"
							}`}>अ A
						</h1>
					</div>
				</nav>

				{/* 🔹 Middle Section with Logo and Mobile Menu Button */}
				<nav
					className={`w-full px-8 py-1.5 flex justify-center items-center ${isHomePage && !isScrolled ? "bg-transparent" : "bg-primary"}`}>

					{/* Mobile Menu Toggle Button (Now in Blue Navbar) */}
					<button
						className="lg:hidden text-white text-2xl"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
					</button>

					<div className="hidden lg:block px-6 py-2">
						<ul className="flex space-x-10 text-lg text-white font-medium">
							{dropdownLinks.map((item, index) => (
								<li
									key={index}
									className="relative group cursor-pointer transition-all duration-300 ease-in-out"
									onMouseEnter={() => setOpenDropdown(index)}
									onMouseLeave={() => setOpenDropdown(null)}>
									<span className="relative inline-block pb-1 text-white transition-all duration-300 ease-in-out group-hover:text-accent group-hover:scale-110">
										<span className="flex items-center">
											{item.links ? (
												<>
													{item.title} <IoIosArrowDown className="ml-1" />
												</>
											) : (
												<a href={item.href}>{item.title}</a>
											)}
										</span>
										{/* Underline Animation */}
										<span className="absolute left-0 bottom-0 w-0 h-[3px] bg-accent transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-100 opacity-0"></span>
									</span>

									{/* Dropdown Menu */}
									<ul
										className={`absolute top-[75%] mt-2 w-48 bg-white text-primary border shadow-lg rounded-md transition-all duration-200 
							${index === dropdownLinks.length - 1 ? "right-0" : "left-0"} 
							${openDropdown === index ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-[-10px] invisible"}`}>
										{item.links &&
											item.links.map((link, i) => (
												<div
													key={i}
													className="relative group"
													onMouseEnter={() => setOpenSubmenu(i)}
													onMouseLeave={() => setOpenSubmenu(null)}>
													<a href={link.href}>
														<li className="px-4 py-2 hover:bg-accent hover:rounded-sm hover:text-white flex justify-between items-center">
															{link.name}
															{link.subLinks && <IoIosArrowForward />}
														</li>
													</a>

													{/* Submenu */}
													{link.subLinks && (
														<ul
															className={`absolute top-0 mt-0 w-48 bg-white text-primary border shadow-lg rounded-md transition-all duration-200 
												${index === dropdownLinks.length - 1 ? "right-full" : "left-full"} 
												${openSubmenu === i ? "opacity-100 visible" : "opacity-0 invisible"}`}>
															{link.subLinks.map((subLink, j) => (
																<li
																	key={j}
																	className="relative group"
																	onMouseEnter={() => setOpenNestedSubmenu(j)}
																	onMouseLeave={() => setOpenNestedSubmenu(null)}>
																	<a
																		href={subLink.href}
																		className="px-4 py-2 hover:bg-primary hover:text-white rounded-sm flex justify-between items-center">
																		{subLink.name}
																		{"nestedLinks" in subLink && <IoIosArrowForward />}
																	</a>

																	{/* Nested Submenu */}
																	{subLink.nestedLinks && (
																		<ul
																			className={`absolute top-0 mt-0 w-48 bg-white text-primary border shadow-lg rounded-md transition-all duration-200 
																${link.subLinks && j === link.subLinks.length - 1 ? "right-full" : "left-full"} 
																${openNestedSubmenu === j ? "opacity-100 visible" : "opacity-0 invisible"}`}>
																			{subLink.nestedLinks.map((nestedLink, k) => (
																				<li key={k}>
																					<a
																						href={nestedLink.href}
																						className="block px-4 py-2 hover:bg-primary hover:text-white rounded-md">
																						{nestedLink.name}
																					</a>
																				</li>
																			))}
																		</ul>
																	)}
																</li>
															))}
														</ul>
													)}
												</div>
											))}
									</ul>
								</li>
							))}
						</ul>
					</div>
				</nav>


				{/* 🔹 Desktop Menu (Only Visible for Large Screens) */}
			</div>

			{/* 🔹 Mobile Menu Drawer (Visible on Small Screens) */}
			<div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
				<div className="mobile-menu w-3/4 max-w-sm bg-white h-full shadow-lg overflow-y-auto p-6 transform transition-all duration-300 ease-in-out">
					{/* Close Button */}
					<button className="text-2xl text-primary flex items-center justify-between w-full mb-4" onClick={() => setIsMobileMenuOpen(false)}>
						Menu <FaTimes />
					</button>

					{/* Regular Links */}
					<ul className="space-y-4">
						{/* {navLinks.map((link, index) => (
							<li key={index}>
								<a href={link.href} className="block text-lg font-medium text-primary hover:text-accent">
									{link.title}
								</a>
							</li>
						))} */}

						{/* Mobile Dropdown Links */}
						{dropdownLinks.map((item, index) => (
							<li key={index} className="border-t pt-3">
								<button className="flex items-center justify-between w-full font-semibold text-primary hover:text-accent"
									onClick={() => setOpenDropdown(openDropdown === index ? null : index)}>
									{item.title}
									<FaChevronDown className={`transition-transform duration-300 ${openDropdown === index ? "rotate-180" : "rotate-0"}`} />
								</button>

								{/* Dropdown Content (Expands the container instead of overlapping) */}
								<div className={`overflow-hidden transition-all duration-300 ${openDropdown === index ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
									{item.links && item.links.map((link, i) => (
										<div key={i} className="pl-4">
											{/* Sublink Button */}
											{link.subLinks ? (
												<button className="flex items-center justify-between w-full py-2 text-primary hover:text-accent"
													onClick={() => setOpenSubmenu(openSubmenu === i ? null : i)}>
													{link.name}
													<FaChevronDown className={`transition-transform duration-300 ${openSubmenu === i ? "rotate-180" : "rotate-0"}`} />
												</button>
											) : (
												<a href={link.href} className="block py-2 text-primary hover:text-accent">{link.name}</a>
											)}

											{/* Submenu (Pushes content down instead of overlapping) */}
											{link.subLinks && (
												<div className={`overflow-hidden transition-all duration-300 ${openSubmenu === i ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
													{link.subLinks.map((subLink, j) => (
														<div key={j} className="pl-4">
															{/* Nested Sublink Button */}
															{subLink.nestedLinks ? (
																<button className="flex items-center justify-between w-full py-2 text-primary hover:text-accent px-4"
																	onClick={() => setOpenNestedSubmenu(openNestedSubmenu === j ? null : j)}>
																	{subLink.name}
																	<FaChevronDown className={`transition-transform duration-300 ${openNestedSubmenu === j ? "rotate-180" : "rotate-0"}`} />
																</button>
															) : (
																<a href={subLink.href} className="block py-2 px-4 text-primary hover:text-accent">{subLink.name}</a>
															)}

															{/* Nested Submenu */}
															{subLink.nestedLinks && (
																<div className={`overflow-hidden transition-all duration-300 ${openNestedSubmenu === j ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
																	{subLink.nestedLinks.map((nestedLink, k) => (
																		<a key={k} href={nestedLink.href} className="block py-2 px-4 text-primary hover:text-accent">
																			{nestedLink.name}
																		</a>
																	))}
																</div>
															)}
														</div>
													))}
												</div>
											)}
										</div>
									))}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;

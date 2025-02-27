import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle
import logo from "../assets/logo.png"; // Logo Image
import Search from "@/search";

const imgSrc = logo;

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isHomePage, setIsHomePage] = useState(
		window.location.pathname === "/"
	);
	const [openDropdown, setOpenDropdown] = useState<number | null>(null);
	const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
	const [openNestedSubmenu, setOpenNestedSubmenu] = useState<number | null>(
		null
	);

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
		{ title: "Faculty & Staff", href: "/facultyandstaff" },
		{ title: "Alumni", href: "/alumni" },
		{ title: "Recruitment", href: "/recruitments" },
		{ title: "Visitors", href: "/visitors" },
	];

	const dropdownLinks = [
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
							name: "RTI Details and Reports",
							href: "/institute/rtireports",
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
							name: "Board Of Governors",
							href: "/governance/committee#Board-of-Governors",
						},
						{
							name: "Finance Committee",
							href: "/governance/committee#Finance-Committee",
						},
						{ name: "Senate", href: "/governance/committee#Senate" },
						{
							name: "Building Works Committee",
							href: "/governance/committee#Building-Works-Committee",
						},
						{
							name: "Academic Administration",
							href: "/governance/administration",
						},
						{
							name: "Grievance Committee SC/ST Cell",
							href: "/pages/grievancecomm",
						},
						{
							name: "Anti-Ragging Committee",
							href: "/administration/anti-ragging-committee",
						},
						{ name: "Internal Complaint Committee", href: "/pages/icc" },
					],
				},
				{ name: "Campus Photo Gallery", href: "/pages/campusphotogallery" },
				{ name: "NIRF", href: "/pages/nirf" },
				{ name: "Facilities", href: "/institute/facilities" },
			],
		},
		{
			title: "Academics",
			links: [
				{ name: "Departments", href: "/departments" },
				{ name: "Courses", href: "/academics/courses" },
				{ name: "Academic Curricula", href: "https://iiitn.ac.in/page.php?id=259" },
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
						{ name: "Fees", href: "/admissions/btech/acadfees" },
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
							name: "Loan Schemes",
							nestedLinks: [
								{
									name: "SBI",
									href: "https://iiitn.ac.in/images/admission2025/SBI_SCHL.jpg",
								},
								{
									name: "Canara Bank",
									href: "https://iiitn.ac.in/images/admission2024/CANARA_BANK_LOAN_SCHEME%20%282%29.pdf",
								},
								{
									name: "PNB",
									href: "https://iiitn.ac.in/images/admission2024/PNB%20Bank%20_Loan%20Doc.pdf",
								},
								{
									name: "Bank of Maharashtra",
									href: "https://iiitn.ac.in/images/admission2024/Edu%20loan%20flyer%20General-1.pdf",
								},
							],
						},
					],
				},
				{
					name: "Post Graduate",
					href: "https://iiitn.ac.in/page/postgraduate/41/",
				},
			],
		},
		{
			title: "Research",
			links: [
				{ name: "Publications", href: "/research/publications" },
				{ name: "Projects", href: "/research/projects" },
			],
		},
		{
			title: "Placements",
			links: [
				{ name: "Why Recruit from IIIT Nagpur", href: "/placements" },
				{ name: "Internships", href: "/placements/internships" },
				{
					name: "Statistics",
					href: "https://iiitn.ac.in/page/placement-statistics/45/",
				},
				{ name: "Companies", href: "/placements/companies" },
			],
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
			],
		},
	];

	return (
		<>
			{/* Transparent Overlay (Only for Home Page) */}
			{isHomePage && (
				<div className="absolute left-0 top-5 w-full h-[33vh] bg-gradient-to-b from-primary via-[#7BA4D4] to-transparent z-1"></div>
			)}

			{/* Fixed Navbar */}
			<div className="fixed top-0 left-0 w-full z-50 transition-transform duration-200">
				{/* 🔸 Top Orange Bar */}
				<nav className="w-full bg-accent shadow-md px-6 py-2 flex justify-between items-center lg:flex">
					<h1 className="text-primary font-bold text-xl">अ A</h1>
					<ul className="hidden lg:flex space-x-6 font-medium text-primary">
						{navLinks.map((link, index) => (
							<a key={index} href={link.href} className="hover:text-white">
								{link.title}
							</a>
						))}
					</ul>
					<Search />
				</nav>

				{/* 🔹 Middle Section with Logo and Mobile Menu Button */}
				<nav
					className={`w-full px-8 py-2 flex justify-between items-center ${
						isHomePage && !isScrolled ? "bg-transparent" : "bg-primary"
					}`}>
					<a href="/">
						<div className="flex items-center space-x-4">
							<img src={imgSrc} alt="IIITN Logo" className="h-16 w-16" />
							<div className="text-left">
								<p className="font-bold text-white text-lg hidden lg:block">
									भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर
								</p>
								<p className="font-medium text-white text-base">
									Indian Institute of Information Technology, Nagpur
								</p>
								<p className="font-light text-sm text-white">
									An Institution of National Importance
								</p>
							</div>
						</div>
					</a>

					{/* Mobile Menu Toggle Button (Now in Blue Navbar) */}
					<button
						className="lg:hidden text-white text-2xl"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
					</button>

					<div className="hidden lg:block px-6 py-3">
						<ul className="flex space-x-10 text-lg text-white font-medium">
							{dropdownLinks.map((item, index) => (
								<li
									key={index}
									className="relative group cursor-pointer transition-all duration-300 ease-in-out"
									onMouseEnter={() => setOpenDropdown(index)}
									onMouseLeave={() => setOpenDropdown(null)}>
									<span className="relative inline-block pb-1 text-white transition-all duration-300 ease-in-out group-hover:text-accent group-hover:scale-110">
										{item.title}
										{/* Underline Animation */}
										<span className="absolute left-0 bottom-0 w-0 h-[3px] bg-accent transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-100 opacity-0"></span>
									</span>

									{/* Dropdown Menu */}
									<ul
										className={`absolute top-full mt-2 w-48 bg-white text-primary border shadow-lg rounded-md transition-all duration-200 
									${index === dropdownLinks.length - 1 ? "right-0" : "left-0"} 
									${openDropdown === index ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-[-10px] invisible"}`}>
										{item.links.map((link, i) => (
											<div
												key={i}
												className="relative group"
												onMouseEnter={() => setOpenSubmenu(i)}
												onMouseLeave={() => setOpenSubmenu(null)}>
												<a href={link.href}>
													<li className="px-4 py-2 hover:bg-accent hover:rounded-sm hover:text-white">
														{link.name}
													</li>
												</a>
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
																	className="block px-4 py-2 hover:bg-accent hover:text-white rounded-sm">
																	{subLink.name}
																</a>

																{/* Nested Submenu (if exists) */}
																{subLink.nestedLinks && (
																	<ul
																		className={`absolute top-0 mt-0 w-48 bg-white text-primary border shadow-lg rounded-md transition-all duration-200 
				${j === link.subLinks.length - 1 ? "right-full" : "left-full"} 
				${openNestedSubmenu === j ? "opacity-100 visible" : "opacity-0 invisible"}`}>
																		{subLink.nestedLinks &&
																			subLink.nestedLinks.map(
																				(nestedLink, k) => (
																					<li key={k}>
																						<a
																							href={nestedLink.href}
																							className="block px-4 py-2 hover:bg-accent hover:text-white rounded-md">
																							{nestedLink.name}
																						</a>
																					</li>
																				)
																			)}
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
			<div
				className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform transition-transform duration-300 ${
					isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
				}`}>
				<div className="w-3/4 max-w-sm bg-white h-full shadow-lg overflow-y-auto p-6 transform transition-all duration-300 ease-in-out">
					{/* Close Button */}
					<button
						className="text-2xl text-primary mb-4 flex-row"
						onClick={() => setIsMobileMenuOpen(false)}>
						Menu <FaTimes />
					</button>
					{/* Mobile Menu Items */}
					<ul className="space-y-4">
						{navLinks.map((link, index) => (
							<a
								key={index}
								href={link.href}
								className="block text-lg font-medium text-primary hover:text-accent">
								{link.title}
							</a>
						))}
						{dropdownLinks.map((item, index) => (
							<div key={index} className="space-y-2">
								<p className="font-semibold text-primary">{item.title}</p>
								{item.links.map((link, i) => (
									<a
										key={i}
										href={link.href}
										className="block pl-4 text-primary hover:text-accent">
										{link.name}
									</a>
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

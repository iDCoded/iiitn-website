import { useState } from "react";
import { useNavigate } from "react-router-dom";

const routes = {
	"/": "Home",
	"/about": "About Us",
	"/admin": "Admin Panel",
	"/departments": "Departments",
	"/departments/:param": "Department Details",
	"/academics/courses": "Courses Offered",
	"/admissions/btech": "B.Tech Admissions",
	"/admissions/btech/contact": "B.Tech Admissions Contact",
	"/admissions/btech/acadfees": "B.Tech Academic Fees",
	"/admissions/btech/hostelfees": "B.Tech Hostel Fees",
	"/admissions/btech/rulesandregulations": "B.Tech Rules & Regulations",
	"/placements": "Placements",
	"/placements/companies": "Recruiting Companies",
	"/placements/internships": "Internship Opportunities",
	"/placements/statistics": "Placement Statistics",
	"/placements/students": "Student Placements",
	"/placements/contact": "Placement Office Contact",
	"/research/projects": "Research Projects",
	"/research/publications": "Research Publications",
	"/students": "Student Resources",
	"/facultyandstaff": "Faculty & Staff",
	"/alumni": "Alumni Network",
	"/alumni/form": "Alumni Registration Form",
	"/events": "Upcoming Events",
	"/recruitments": "Recruitment Notices",
	"/e-library": "E-Library",
	"/login": "Login",
	"/signup": "Sign Up",
	"/initiatives": "Institute Initiatives",
	"/governance/administration": "Administration",
	"/governance/:param": "Governance Details",
	"/governance/committee": "Governance Committee",
	"/pages/guesthouse": "Guest House",
	"/pages/pressrelease": "Press Releases",
	"/pages/officialdocuments": "Official Documents",
	"/pages/tenders": "Tenders",
	"/pages/consultancy": "Consultancy Services",
	"/pages/iic": "Innovation & Incubation Center",
	"/pages/elclub": "E-Learning Club",
	"/pages/academicfee": "Academic Fee Details",
	"/pages/academicfeepayment": "Academic Fee Payment",
	"/pages/hostelfee": "Hostel Fee Details",
	"/pages/hostelfeepayment": "Hostel Fee Payment",
	"/pages/scholarships": "Scholarships",
	"/pages/rti": "RTI Information",
	"/pages/clinicalcounselling": "Clinical Counselling",
	"/pages/mess": "Mess Facilities",
	"/pages/studentachievements": "Student Achievements",
	"/pages/facultyachievements": "Faculty Achievements",
	"/pages/convocation": "Convocation",
	"/pages/formats": "Document Formats",
	"/pages/nirf": "NIRF Rankings",
	"/pages/grievance": "Grievance Portal",
	"/pages/grievancecomm": "Grievance Committee",
	"/pages/internalcomplt": "Internal Complaints",
	"/pages/equalopp": "Equal Opportunity Cell",
	"/pages/howtoreach": "How to Reach",
	"/visitors": "Visitor Information",
	"/pages/grievance_committee_sc_st": "SC/ST Grievance Committee",
	"/pages/studentclubs": "Student Clubs",
	"/pages/icc": "Internal Complaints Committee (ICC)",
	"/pages/eoc": "Equal Opportunity Cell",
	"/pages/directory": "Directory",
	"/news/:newsId": "News Article",
	"/events/:eventid": "Event Details",
	"/faculty/:name": "Faculty Profile",
	"/institute/facilities": "Institute Facilities",
	"/institute/institutesprofile": "Institute Profile",
	"/institute/annualreports": "Annual Reports",
	"/institute/rtireports": "RTI Reports",
	"/institute/minutesofmeeting": "Minutes of Meetings",
	"/institute/immutableproperties": "Immutable Properties",
	"*": "404 - Page Not Found",
};

export default function Search() {
	const [query, setQuery] = useState("");
	const [filteredRoutes, setFilteredRoutes] = useState<[string, string][]>([]);
	const navigate = useNavigate();

	const handleChange = (e: any) => {
		const value = e.target.value.toLowerCase();
		setQuery(value);
		setFilteredRoutes(
			value
				? Object.entries(routes).filter(([, label]) =>
						label.toLowerCase().includes(value)
				  )
				: []
		);
	};

	const handleSelect = (route: keyof typeof routes) => {
		setQuery(routes[route]);
		setFilteredRoutes([]);
		navigate(route);
	};

	return (
		<div>
			<div style={{ position: "relative", display: "inline-block" }}>
				<input
					type="text"
					placeholder="Search anything..."
					value={query}
					onChange={handleChange}
					style={{ padding: "5px", width: "200px", border: "1px solid #ccc" }}
				/>
				{filteredRoutes.length > 0 && (
					<ul
						style={{
							listStyle: "none",
							padding: "0",
							margin: "0",
							position: "absolute",
							background: "white",
							border: "1px solid #ccc",
							width: "100%",
							zIndex: 10,
						}}>
						{filteredRoutes.map(([route, label]) => (
							<li
								key={route}
								onClick={() => handleSelect(route as keyof typeof routes)}
								style={{ padding: "5px", cursor: "pointer" }}>
								{label}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const routes = [
	"/",
	"/about",
	"/admin",
	"/departments",
	"/departments/:param",
	"/academics/courses",
	"/admissions/btech",
	"/admissions/btech/contact",
	"/admissions/btech/acadfees",
	"/admissions/btech/hostelfees",
	"/admissions/btech/rulesandregulations",
	"/placements",
	"/placements/companies",
	"/placements/internships",
	"/placements/statistics",
	"/placements/students",
	"/placements/contact",
	"/research/projects",
	"/research/publications",
	"/students",
	"/facultyandstaff",
	"/alumni",
	"/alumni/form",
	"/events",
	"/recruitments",
	"/e-library",
	"/login",
	"/signup",
	"/initiatives",
	"/governance/administration",
	"/governance/:param",
	"/governance/committee",
	"/pages/guesthouse",
	"/pages/pressrelease",
	"/pages/officialdocuments",
	"/pages/tenders",
	"/pages/consultancy",
	"/pages/iic",
	"/pages/elclub",
	"/pages/academicfee",
	"/pages/academicfeepayment",
	"/pages/hostelfee",
	"/pages/hostelfeepayment",
	"/pages/scholarships",
	"/pages/rti",
	"/pages/clinicalcounselling",
	"/pages/mess",
	"/pages/studentachievements",
	"/pages/facultyachievements",
	"/pages/convocation",
	"/pages/formats",
	"/pages/nirf",
	"/pages/grievance",
	"/pages/grievancecomm",
	"/pages/internalcomplt",
	"/pages/equalopp",
	"/pages/howtoreach",
	"/visitors",
	"/pages/grievance_committee_sc_st",
	"/pages/studentclubs",
	"/pages/icc",
	"/pages/eoc",
	"/pages/directory",
	"/news/:newsId",
	"/events/:eventid",
	"/faculty/:name",
	"/institute/facilities",
	"/institute/institutesprofile",
	"/institute/annualreports",
	"/institute/rtireports",
	"/institute/minutesofmeeting",
	"/institute/immutableproperties",
	"*", // 404 page
]; // Add your valid routes here

export default function Search() {
	const [query, setQuery] = useState("");
	const [filteredRoutes, setFilteredRoutes] = useState<string[]>([]);
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.toLowerCase();
		setQuery(value);
		setFilteredRoutes(
			value ? routes.filter((route) => route.includes(value)) : []
		);
	};

	const handleSelect = (route: string) => {
		setQuery(route);
		setFilteredRoutes([]);
		navigate(`${route}`);
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
						{filteredRoutes.map((route) => (
							<li
								key={route}
								onClick={() => handleSelect(route)}
								style={{
									padding: "5px",
									cursor: "pointer",
								}}>
								{route}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

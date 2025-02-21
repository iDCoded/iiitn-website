import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/page";
import About from "./About/page";
import AdminDashboard from "./Admin/page";
import Departments from "./Departments/page";
import Academics from "./Academics/page";
import Admissions from "./Admissions/page";
import Placements from "./Placements/page";
import Research from "./Research/page";
import Students from "./Students/page";
import Alumni from "./Alumni/page";
import Events from "./Events/page";
import Recruitments from "./Recruitments/page";
import ELibrary from "./ELibrary/page";
import Login from "./Login/page";
import Initiatives from "./Initiatives/page";
import NotFound from "./NotFound/page"; // 404 Pa/pagege
import Administration from "./Governance/Administration/page";
import Committee from "./Governance/Committee/page";
import AdministrationPage from "./Governance/Administration/pages/AdministrationPage";
import FacultyandStaff from "./FacultyandStaff/page";
import PlacementStudents from "./Placements/Students/page";
// import Page from "./Departments/pages/page";
import DepartmentPage from "./Departments/pages/page";
import { useParams } from "react-router-dom";
import Companies from "./Placements/Companies/page";
import Internships from "./Placements/Internships/page";
import Statistics from "./Placements/Statistics/page";

const PageWrapper = () => {
	const { param } = useParams();
	return <DepartmentPage title={param || "defaultTitle"} />;
};

const AdminWrapper = () => {
	const { param } = useParams();
	if (param === "chairman") {
		return <AdministrationPage title="chairman" />;
	} else if (param === "director") {
		return <AdministrationPage title="director" />;
	} else if (param === "registrar") {
		return <AdministrationPage title="registrar" />;
	}
	else {
		return <NotFound />;
	}
}

const AppRoutes = () => (
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/admin" element={<AdminDashboard />} />
			<Route path="/departments" element={<Departments />} />
			<Route path="/departments/:param" element={<PageWrapper />} />
			<Route path="/academics" element={<Academics />} />
			<Route path="/admissions" element={<Admissions />} />
			<Route path="/placements" element={<Placements />} />
			<Route path="/placements/companies" element={<Companies />} />
			<Route path="/placements/internships" element={<Internships />} />
			<Route path="/placements/statistics" element={<Statistics />} />
			<Route path="/placements/students" element={<PlacementStudents />} />
			<Route path="/research" element={<Research />} />
			<Route path="/students" element={<Students />} />
			<Route path="/facultyandstaff" element={<FacultyandStaff />} />
			<Route path="/alumni" element={<Alumni />} />
			<Route path="/events" element={<Events />} />
			<Route path="/recruitments" element={<Recruitments />} />
			<Route path="/e-library" element={<ELibrary />} />
			<Route path="/login" element={<Login />} />
			<Route path="/initiatives" element={<Initiatives />} />
			<Route path="/governance/administration" element={<Administration />} />
			<Route path="/governance/:param" element={<AdminWrapper />} />
			<Route path="/governance/committee" element={<Committee />} />
			<Route path="*" element={<NotFound />} /> {/* 404 page */}
		</Routes>
	</Router>
);

export default AppRoutes;

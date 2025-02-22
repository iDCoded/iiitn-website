import { Routes, Route } from "react-router-dom";
import Home from "./Home/page";
import About from "./About/page";
import AdminDashboard from "./Admin/layout";
import Departments from "./Departments/page";
import Courses from "./Academics/Courses";
import Programs from "./Academics/Programs";
import AdmissionsBTech from "./Admissions/BTech";
import AdmissionsMTech from "./Admissions/MTech";
import AdmissionsPhD from "./Admissions/PhD"
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
import GuestHouse from "./Pages/GuestHouse";
// import Page from "./Departments/pages/page";
import DepartmentPage from "./Departments/pages/page";
import { useParams } from "react-router-dom";
import Companies from "./Placements/Companies/page";
import Internships from "./Placements/Internships/page";
import Statistics from "./Placements/Statistics/page";
import ContactTP from "./Placements/ContactTP/page";
import PressRelease from "./Pages/PressRelease";
import OfficialDocuments from "./Pages/OfficialDocuments";
import Tenders from "./Pages/Tenders";
import AdminPage from "./Admin/page";
import Consultancy from "./Pages/Consultancy";
import Iic from "./Pages/Iic";
import ElectoralLiteracyClub from "./Pages/ElectoralLiteracyClub";

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
	} else {
		return <NotFound />;
	}
};

const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route
			path="/admin"
			element={
				<AdminDashboard>
					<AdminPage />
				</AdminDashboard>
			}
		/>
		<Route path="/departments" element={<Departments />} />
		<Route path="/departments/:param" element={<PageWrapper />} />
		<Route path="/academics/courses" element={<Courses />} />
		<Route path="/academics/programs" element={<Programs />} />
		<Route path="/admissions/btech" element={<AdmissionsBTech />} />
		<Route path="/admissions/mtech" element={<AdmissionsMTech />} />
		<Route path="/admissions/phd" element={<AdmissionsPhD />} />
		<Route path="/placements" element={<Placements />} />
		<Route path="/placements/companies" element={<Companies />} />
		<Route path="/placements/internships" element={<Internships />} />
		<Route path="/placements/statistics" element={<Statistics />} />
		<Route path="/placements/students" element={<PlacementStudents />} />
		<Route path="/placements/contact" element={<ContactTP />} />
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
		<Route path="/pages/guesthouse" element={<GuestHouse />} />
		<Route path="/pages/pressrelease" element={<PressRelease />} />
		<Route path="/pages/officialdocuments" element={<OfficialDocuments />} />
		<Route path="/pages/tenders" element={<Tenders />} />
		<Route path="/pages/consultancy" element={<Consultancy />} />
		<Route path="/pages/iic" element={<Iic />} />
		<Route path="/pages/elclub" element={<ElectoralLiteracyClub />} />
		<Route path="*" element={<NotFound />} /> {/* 404 page */}
	</Routes>
);

export default AppRoutes;

import { Routes, Route } from "react-router-dom";
import Home from "./Home/page";
import About from "./About/page";
import Contact from "./Contact/page.tsx";
import AdminDashboard from "./Admin/layout";
import FacultyDashboard from "./Faculty/layout.tsx";
import Departments from "./Departments/page";
import Courses from "./Academics/Courses";
import AdmissionsBTech from "./Admissions/BTech/BTech";
import AdmissionsPG from "./Admissions/PostGraduate";
import Placements from "./Placements/page";
import Projects from "./Research/Projects/page";
import Publications from "./Research/Publications/page";
import Students from "./Students/page";
import Alumni from "./Alumni/page";
import Events from "./Events/page";
import Recruitments from "./Recruitments/page";
import ELibrary from "./ELibrary/page";
import Login from "./Login/page";
import SignupPage from "./Signup/page";
import Initiatives from "./Initiatives/page";
import NotFound from "./NotFound/page";
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
import AdmissionContact from "./Admissions/BTech/Contact";
import Scholarships from "./Pages/Scholarships";
import AcademicFeeDetails from "./Pages/AcademicFeeDetails";
import AcademicFeePayment from "./Pages/AcademicFeePayment";
import HostelFee from "./Pages/HostelFee";
import HostelFeePayment from "./Pages/HostelFeePayment";
import FirstYearAcadFee from "./Admissions/BTech/FirstYearAcadFee";
import FirstYearHosFee from "./Admissions/BTech/FirstYearHosFee";
import InstRulesAndReg from "./Admissions/BTech/InstRulesAndReg";
import AlumniForm from "./components/AlumniForm";
import RTI from "./Pages/RTI";

import Visitors from "./Pages/Visitors";
import ClinicalCounselling from "./Pages/ClinicalCounselling";
import Mess from "./Pages/Mess";
import Achievements from "./Pages/StudentsAchievements";
import Convocation from "./Pages/Convocation";
import NIRF from "./Pages/NIRF";
import Grievance from "./Pages/Grievance";
import GrievanceCommSCSTCell from "./Pages/GrievanceCommSCSTCell";
import InternalCompltComm from "./Pages/InternalCompltComm";
import EqualOppCell from "./Pages/EqualOppCell";
import HowToReach from "./Pages/HowToReach";
import FacultyAchievements from "./Pages/FacultyAchievements";
import StudentsClubs from "./Pages/StudentsClubs";
import Directory from "./Pages/Directory";
import FacultyDetail from "./Pages/FacultyDetail";
import Facilities from "./Pages/Facilities";
import InstitutesProfile from "./Pages/InstitutesProfile";
import Formats from "./Pages/Formats";
import News from "./News/page";
import DetailedNews from "./Pages/DetailedNews";
import AnnualAccountAndReports from "./Pages/AnnualAccountAndReports";
import RtiDetails from "./Pages/RtiDetails";
import MinutesOfMeeting from "./Pages/MinutesOfMeeting";
import ImmutableProperty from "./Pages/ImmutableProperty";
import EventDetail from "./Events/pages/page";
import DetailedAnnouncements from "./Pages/DetailedAnnouncements";
import DetailedDirectory from "./Pages/DetailedDirectory";
import RtiReports from "./Pages/RtiReports";
import RtiContact from "./Pages/RtiContact";
import DetailedRtiDetail from "./Pages/DetailedRtiDetail";
import AcademicCurriculum from "./Pages/AcademicCurriculum";
import LoanSchemes from "./Pages/LoanSchemes";
import AcademicCalendar from "./Pages/AcademicCalendar";
import Notices from "./Pages/Notices";
import HostelLife from "./Pages/HostelLife";
import CampusGallery from "./Pages/CampusGallery.tsx";
import FacultyPage from "./Faculty/page.tsx";

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
		<Route path="/contact" element={<Contact />} />
		<Route
			path="/admin"
			element={
				<AdminDashboard>
					<AdminPage />
				</AdminDashboard>
			}
		/>
		<Route
			path="/fportal"
			element={
				<FacultyDashboard>
					<FacultyPage />
				</FacultyDashboard>
			}
		/>
		<Route path="/departments" element={<Departments />} />
		<Route path="/notices" element={<Notices />} />
		<Route path="/departments/:param" element={<PageWrapper />} />
		<Route path="/academics/courses" element={<Courses />} />
		<Route path="/admissions/btech" element={<AdmissionsBTech />} />
		<Route path="/admissions/btech/contact" element={<AdmissionContact />} />
		<Route path="/admissions/btech/acadfees" element={<FirstYearAcadFee />} />
		<Route path="/admissions/btech/hostelfees" element={<FirstYearHosFee />} />
		<Route
			path="/admissions/btech/rulesandregulations"
			element={<InstRulesAndReg />}
		/>
		<Route path="/admissions/pg" element={<AdmissionsPG />} />
		<Route path="/placements" element={<Placements />} />
		<Route path="/placements/companies" element={<Companies />} />
		<Route path="/placements/internships" element={<Internships />} />
		<Route path="/placements/statistics" element={<Statistics />} />
		<Route path="/placements/students" element={<PlacementStudents />} />
		<Route path="/placements/contact" element={<ContactTP />} />
		<Route path="/research/projects" element={<Projects />} />
		<Route path="/research/publications" element={<Publications />} />
		<Route path="/students" element={<Students />} />
		<Route path="/facultyandstaff" element={<FacultyandStaff />} />
		<Route path="/alumni" element={<Alumni />} />
		<Route path="/alumni/form" element={<AlumniForm />} />
		<Route path="/events" element={<Events />} />
		<Route path="/recruitments" element={<Recruitments />} />
		<Route path="/e-library" element={<ELibrary />} />
		<Route path="/login" element={<Login />} />
		<Route path="/signup" element={<SignupPage />} />
		<Route path="/initiatives" element={<Initiatives />} />
		<Route path="/governance/administration" element={<Administration />} />
		<Route path="/governance/:param" element={<AdminWrapper />} />
		<Route path="/governance/committee" element={<Committee />} />
		<Route path="/pages/guesthouse" element={<GuestHouse />} />
		<Route path="/pages/pressrelease" element={<PressRelease />} />
		<Route path="/pages/officialdocuments" element={<OfficialDocuments />} />
		<Route path="/pages/tenders" element={<Tenders />} />
		<Route path="/research/consultancy" element={<Consultancy />} />
		<Route path="/pages/iic" element={<Iic />} />
		<Route path="/pages/elclub" element={<ElectoralLiteracyClub />} />
		<Route path="/pages/academicfee" element={<AcademicFeeDetails />} />
		<Route path="/pages/academicfeepayment" element={<AcademicFeePayment />} />
		<Route path="/pages/hostelfee" element={<HostelFee />} />
		<Route path="/pages/hostelfeepayment" element={<HostelFeePayment />} />
		<Route path="/pages/scholarships" element={<Scholarships />} />
		<Route path="/pages/rti" element={<RTI />} />
		<Route path="/pages/loanschemes" element={<LoanSchemes />} />
		<Route path="/pages/campusgallery" element={<CampusGallery />} />
		<Route
			path="/pages/clinicalcounselling"
			element={<ClinicalCounselling />}
		/>
		<Route path="/pages/mess" element={<Mess />} />
		<Route path="/pages/studentachievements" element={<Achievements />} />
		<Route
			path="/pages/facultyachievements"
			element={<FacultyAchievements />}
		/>
		<Route path="/pages/convocation" element={<Convocation />} />
		<Route path="/pages/formats" element={<Formats />} />
		<Route path="/pages/nirf" element={<NIRF />} />
		<Route path="/students/hostellife" element={<HostelLife />} />
		<Route path="/pages/grievance" element={<Grievance />} />
		<Route path="/pages/grievancecomm" element={<GrievanceCommSCSTCell />} />
		<Route path="/pages/internalcomplt" element={<InternalCompltComm />} />
		<Route path="/pages/equalopp" element={<EqualOppCell />} />
		<Route path="/pages/howtoreach" element={<HowToReach />} />
		<Route path="/visitors" element={<Visitors />} />
		<Route path="/pages/grievance" element={<Grievance />} />
		<Route path="/academics/calendar" element={<AcademicCalendar />} />
		<Route
			path="/pages/grievance_committee_sc_st"
			element={<GrievanceCommSCSTCell />}
		/>
		<Route path="/pages/studentclubs" element={<StudentsClubs />} />
		<Route path="/pages/icc" element={<InternalCompltComm />} />
		<Route path="/pages/eoc" element={<EqualOppCell />} />
		<Route path="/pages/directory" element={<Directory />} />
		<Route path="/pages/directory/:id" element={<DetailedDirectory />} />
		<Route path="/news" element={<News />}></Route>
		<Route path="/news/:newsId" element={<DetailedNews />} />
		<Route path="/events/:eventid" element={<EventDetail />} />
		<Route
			path="/announcements/:announcementid"
			element={<DetailedAnnouncements />}
		/>
		<Route path="/faculty/:name" element={<FacultyDetail />} />
		<Route path="/institute/facilities" element={<Facilities />} />
		<Route
			path="/institute/institutesprofile"
			element={<InstitutesProfile />}
		/>
		<Route
			path="/institute/annualreports"
			element={<AnnualAccountAndReports />}></Route>
		<Route path="/institute/rtidetails" element={<RtiDetails />}></Route>
		<Route
			path="/institute/rtidetails/:rtidetailid"
			element={<DetailedRtiDetail />}
		/>
		<Route path="/institute/rtireports" element={<RtiReports />}></Route>
		<Route path="/institute/rticontact" element={<RtiContact />}></Route>
		<Route
			path="/institute/minutesofmeeting"
			element={<MinutesOfMeeting />}></Route>
		<Route
			path="/institute/immutableproperties"
			element={<ImmutableProperty />}></Route>
		<Route path="/academics/curricula" element={<AcademicCurriculum />}></Route>
		<Route path="*" element={<NotFound />} /> {/* 404 page */}
	</Routes>
);

export default AppRoutes;

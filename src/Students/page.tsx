import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Using ShadCN Card
import StudentCard from "../components/StudentCard";
import heroimage from "../assets/studentBanner.png";
import acad_curr from "../assets/academic_curri.jpg";
import curr_acad from "../assets/college_fees.png";
import ac from "../assets/ac.jpg";
import NoticesSidebar from "../components/NoticesSidebar.tsx";
import counsellor from "../assets/counselling.jpg";
import cg from "../assets/cg.jpg";
import tt from "../assets/ttable.jpg";
import sc from "../assets/sc.jpg";
import fees from "../assets/fees.jpg";

const prospectiveData = [
    { title: "Academic Curricula", description: "Semester Dates and Deadlines", link: "/academics/curricula", imgSrc: acad_curr },
    { title: "Scholarships and Assistance", description: "Details about Scholarships and Financial Assistance", link: "/pages/scholarships", imgSrc: sc },
    { title: "Fees and Financial Aid", description: "Tuition Fees, Payment Methods, etc.", link: "/pages/loanschemes", imgSrc: fees },
];

const currentData = [
    {
        subTitle: "Academic Resources",
        subDes: "Courses, Timetable, Calendar, Curricula, Fees, etc.",
        arr: [
            { title: "Programs", description: "Semester Dates and Deadlines", link: "/academics/courses", imgSrc: ac },
            { title: "Timetable", description: "Important Dates and Deadlines", link: "https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vSp2JfZZCxiV3e3n3uKekiLFOeh2XQzDov_YDAU4QLRIGD5H6HCoWmQKORMAd8chLib0p-I0749s1Uj/pubhtml?gid=371376379&single=true&urp=gmail_link", imgSrc: tt },
            { title: "Calendar", description: "Important Dates and Academic Calendar", link: "/academics/calendar", imgSrc: curr_acad },

        ],
    },
    {
        subTitle: "Student Support",
        subDes: "Resources for counseling and academic support.",
        arr: [
            { title: "Counseling", description: "Mental well-being services", link: "/pages/clinicalcounselling", imgSrc: counsellor },
            { title: "Career Guidance", description: "Internship and Placement Services", link: "/placements/contact", imgSrc: cg },
        ],
    },
];

const sidebarLinks = [
    { title: "Hostel Life", link: "/students/hostellife" },
    { title: "Student Clubs", link: "/pages/studentclubs" },
    { title: "Events and Festivities", link: "/events" },
    { title: "Achievements", link: "/pages/studentachievements" },
    { title: "Dining Options", link: "/pages/mess" },
    { title: "Clinical Counselling", link: "/pages/clinicalcounselling" },
    { title: "Academic Fees", link: "/pages/academicfee" },
    { title: "Hostel Fees", link: "/pages/hostelfee" },
];

function Students() {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <header
                className="relative w-full h-64 sm:h-80 flex flex-col justify-center items-center text-white text-center shadow-lg"
                style={{
                    backgroundImage: `url(${heroimage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 px-4">
                    <h1 className="text-3xl sm:text-4xl font-bold">Students</h1>
                    <p className="text-sm sm:text-lg mt-2">Stay connected and contribute to IIIT Nagpur.</p>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto flex flex-col lg:flex-row gap-12 px-4 sm:px-6 py-10 max-w-6xl">
                {/* Left Content */}
                <div className="lg:w-3/4 space-y-12">
                    {/* Prospective Students */}
                    <section className="space-y-6 max-w-6xl mx-auto w-full">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
                            <span className="text-3xl sm:text-4xl text-accent">| </span> Prospective Students
                        </h2>
                        <p className="text-gray-500 mb-4 text-sm sm:text-base">
                            Learn more about programs, fees, and other essential details.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {prospectiveData.map((item, index) => (
                                <a
                                    onClick={() => navigate(item.link)}
                                    key={index}>
                                    <StudentCard
                                        title={item.title}
                                        description={item.description}
                                        imageSrc={item.imgSrc}
                                    />
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Current Students */}
                    <section className="space-y-6 max-w-6xl mx-auto w-full">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
                            <span className="text-3xl sm:text-4xl text-accent">| </span> Current Students
                        </h2>
                        <p className="text-gray-500 mb-4 text-sm sm:text-base">
                            Find details on courses, timetables, curricula, and academic resources.
                        </p>
                        {currentData.map((section, index) => (
                            <div key={index} className="mb-8">
                                <h3 className="text-lg sm:text-xl font-semibold text-primary">{section.subTitle}</h3>
                                <p className="text-gray-500 mb-3 text-sm sm:text-base">{section.subDes}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {section.arr.map((item, idx) => (
                                        <a
                                            onClick={() => navigate(item.link)}
                                            key={idx}>
                                            <StudentCard
                                                title={item.title}
                                                description={item.description}
                                                imageSrc={item.imgSrc}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </div>

                {/* Right Sidebar (Quick Links) */}
                <aside className="lg:w-1/4 space-y-6 w-full">
                    <Card className="shadow-sm border border-gray-200 p-4">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-primary">Quick Links</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                {sidebarLinks.map((item, index) => (
                                    <li key={index}>
                                        <p
                                            onClick={() => navigate(item.link)}
                                            className="text-accent hover:underline">
                                            {item.title}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="shadow-sm border border-gray-200 p-4">
                        <CardHeader className="flex justify-between items-center flex-row">
                            <CardTitle className="text-lg font-semibold text-primary">Student Notices</CardTitle>
                            <a onClick={() => navigate("/notices")} className="text-sm text-accent hover:underline">View All</a>
                        </CardHeader>

                        <NoticesSidebar category="student" />
                    </Card>
                </aside>
            </div>
        </div>
    );
}

export default Students;

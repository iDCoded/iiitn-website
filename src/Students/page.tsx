import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Using ShadCN Card
import StudentCard from "../components/StudentCard";
import heroimage from "../assets/studentBanner.png";
import acad_curr from "../assets/academic_curri.jpg";
import curr_acad from "../assets/college_fees.png";

const prospectiveData = [
    { title: "Academic Curricula", description: "Semester Dates and Deadlines", link: "/academics/curricula",imgSrc: acad_curr },
    { title: "Scholarships and Assistance", description: "Details about Scholarships and Financial Assistance", link: "/pages/scholarships",imgSrc: acad_curr },
    { title: "Fees and Financial Aid", description: "Tuition Fees, Payment Methods, etc.", link: "/pages/loanschemes",imgSrc: acad_curr },
   
];

const currentData = [
    {
        subTitle: "Academic Resources",
        subDes: "Courses, Timetable, Calendar, Curricula, Fees, etc.",
        arr: [
            { title: "Courses", description: "Semester Dates and Deadlines", link: "/academics/courses",imgSrc: acad_curr },
            { title: "Timetable", description: "Important Dates and Deadlines", link: "https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vSp2JfZZCxiV3e3n3uKekiLFOeh2XQzDov_YDAU4QLRIGD5H6HCoWmQKORMAd8chLib0p-I0749s1Uj/pubhtml?gid=371376379&single=true&urp=gmail_link",imgSrc: acad_curr },
            { title: "Calendar", description: "Important Dates and Academic Calendar", link: "/academics/calendar",imgSrc: acad_curr },
          
        ],
    },
    {
        subTitle: "Student Support",
        subDes: "Resources for counseling and academic support.",
        arr: [
            { title: "Counseling", description: "Mental well-being services", link: "/pages/clinicalcounselling",imgSrc: acad_curr },
            {title: "Career Guidance", description: "Internship and Placement Services", link: "/placements/contact",imgSrc: curr_acad },
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
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <header
                className="relative w-full h-75 flex flex-col justify-center items-center text-white text-center shadow-lg"
                style={{
                    backgroundImage: `url(${heroimage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold">Students</h1>
                    <p className="text-lg mt-2">Stay connected and contribute to IIIT Nagpur.</p>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto flex flex-col lg:flex-row gap-12 px-6 py-10">
                {/* Left Content */}
                <div className="lg:w-3/4 space-y-12">
                    {/* Prospective Students */}
                    <section className="space-y-6 max-w-6xl w-[80vh] mx-auto">
                        <h2 className="text-3xl font-semibold text-primary">
                            <span className="text-4xl text-accent">| </span> Prospective Students
                        </h2>
                        <p className="text-gray-500 mb-4 text-sm">
                            Learn more about programs, fees, and other essential details.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {prospectiveData.map((item, index) => (
                                <a href={item.link} key={index}>
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
                    <section className="space-y-6 max-w-6xl w-[80vh] mx-auto">
                        <h2 className="text-3xl font-semibold text-primary">
                            <span className="text-4xl text-accent">| </span> Current Students
                        </h2>
                        <p className="text-gray-500 mb-4 text-sm">
                            Find details on courses, timetables, curricula, and academic resources.
                        </p>
                        {currentData.map((section, index) => (
                            <div key={index} className="mb-8">
                                <h3 className="text-lg font-semibold text-primary">{section.subTitle}</h3>
                                <p className="text-gray-500 mb-3 text-sm">{section.subDes}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {section.arr.map((item, idx) => (
                                        <a href={item.link} key={idx}>
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
                <aside className="lg:w-1/4 space-y-6">
                    <Card className="shadow-sm border border-gray-200 p-4">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-primary">Quick Links</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                {sidebarLinks.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.link} className="text-accent hover:underline">
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="shadow-sm border border-gray-200">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-primary">Student Notices</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">Important updates and announcements for Students.</p>
                        </CardContent>
                    </Card>
                </aside>
            </div>
        </div>
    );
}

export default Students;

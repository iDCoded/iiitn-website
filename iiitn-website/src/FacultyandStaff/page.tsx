import FSCard from "../components/FSCard";
import StudentCard from "@/components/StudentCard";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const prospectiveData = [
    {
        title: "Academic Curricula",
        description: "Semester Dates and deadlines",
        imageSrc:
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png",
    },
    {
        title: "Scholarships and Assistance",
        description: "Details about Scholarships and financial assistance",
        imageSrc:
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png",
    },
    {
        title: "Fees and Financial Aid",
        description: "Tuition Fees, Payment Methods, etc.",
        imageSrc:
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png",
    },
];

function FacultyandStaff() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#002147] text-white py-16 text-center">
                <h1 className="text-3xl lg:text-4xl font-bold">Faculty and Staff</h1>
                <p className="text-lg mt-3 opacity-80">Stay connected and contribute to the growth of IIIT Nagpur.</p>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
                {/* Sidebar (Quick Links, Events, Resources) */}

                {/* Main Section */}
                <div className="flex-1 ">
                    {/* Prospective Faculty & Staff */}
                    <div className="mb-12 max-w-[80vh] mx-auto">
                        <h2 className="text-2xl font-semibold mb-4"><span className="text-[#E87722] text-4xl">| </span>Prospective Faculty & Staff</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Get more details on programs, resources, fees, and other information here.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {prospectiveData.map((data, index) => (
                                <StudentCard key={index} title={data.title} description={data.description} imageSrc={data.imageSrc} />
                            ))}
                        </div>
                    </div>

                    {/* Current Faculty & Staff */}
                    <div className="mb-12 max-w-[80vh] mx-auto">
                        <h2 className="text-2xl font-semibold mb-4"><span className="text-[#E87722] text-4xl">| </span>Current Faculty & Staff</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Get more details on programs, resources, and policies for current faculty and staff.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {prospectiveData.map((data, index) => (
                                <StudentCard key={index} title={data.title} description={data.description} imageSrc={data.imageSrc} />
                            ))}
                        </div>
                    </div>

                    {/* Faculty & Staff Directory
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-[80vh] mx-auto">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4"><span className="text-[#E87722] text-4xl">| </span>Faculty Directory</h2>
                            <FSCard
                                title="Dr. ABC"
                                description="Professor"
                                imageSrc="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4"><span className="text-[#E87722] text-4xl">| </span>Staff Directory</h2>
                            <FSCard
                                title="Dr. ABC"
                                description="Professor"
                                imageSrc="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
                            />
                        </div>
                    </div> */}
                </div>

                <aside className="hidden md:block w-1/4 space-y-6 top-20 self-start mx-auto">
                    {[
                        { 
                            title: "Quick Links", 
                            items: [
                                { name: "Faculty & Staff Directory", link: "/pages/directory" },
                                { name: "Academic Curricula", link: "https://iiitn.ac.in/Downloads/academic/2025/BTech-CSE-Syllabus-1.pdf" },
                                { name: "Time Table", link: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSp2JfZZCxiV3e3n3uKekiLFOeh2XQzDov_YDAU4QLRIGD5H6HCoWmQKORMAd8chLib0p-I0749s1Uj/pubhtml?gid=371376379&single=true&urp=gmail_link" },
                                {name: "Faculty Achievements", link: "/pages/facultyachievements"},
                                { name: "Research Publications", link: "/research/publications" },
                                { name: "Research Projects", link: "/research/projects" },
                            ] 
                        }
                    ].map((section, index) => (
                        <Card key={index} className="shadow-sm border border-gray-200">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-[#002147]">{section.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    {section.items.map((item, i) => (
                                        <li key={i}>
                                            <a href={item.link} className="text-[#E87722] hover:underline">{item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                    {/* Notices */}
                    <Card className="shadow-sm border border-gray-200">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-[#002147]">Notices</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">Important updates and announcements for faculty and staff.</p>
                        </CardContent>
                    </Card>
                </aside>
            </div>
        </div>
    );
}

export default FacultyandStaff;

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
            {/* Header Section */}
            <div className="bg-[#002147] text-white py-14 text-center">
            <h1 className="text-4xl font-bold">Faculty and Staff</h1>
            <p className="text-lg mt-2 opacity-80">Stay connected and contribute to the growth of IIIT Nagpur.</p>
            </div>

            {/* Main Content */}
            <div className="container mx-auto flex flex-col lg:flex-row gap-12 px-6 py-12">
            {/* Left Sidebar */}
            <aside className="hidden md:block col-span-3 sticky top-20 self-start space-y-6 w-1/4">
                <Card className="shadow-sm border border-gray-200">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-[#002147]">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-sm">
                    {["Faculty Directory", "Staff Directory", "Academic Policies", "Research Opportunities", "Teaching Resources"].map((item, index) => (
                        <li key={index}>
                        <a href="#" className="text-[#E87722] hover:underline">
                            {item}
                        </a>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>

                <Card className="shadow-sm border border-gray-200">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-[#002147]">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-sm">
                    {["Faculty Development Program", "Guest Lectures", "Research Conference", "Annual Faculty Meet", "Training Workshops"].map((event, index) => (
                        <li key={index}>
                        <a href="#" className="text-[#E87722] hover:underline">
                            {event}
                        </a>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>

                <Card className="shadow-sm border border-gray-200">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-[#002147]">Resources & Services</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-sm">
                    {["Telephone Directory", "Campus Map", "Faculty Resources", "IT Support"].map((item, index) => (
                        <li key={index}>
                        <a href="#" className="text-[#E87722] hover:underline">
                            {item}
                        </a>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>

                <Card className="shadow-sm border border-gray-200">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-[#002147]">Notices</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-600">Important updates and announcements for faculty and staff.</p>
                </CardContent>
                </Card>
            </aside>

                {/* Right Content (Main Section) */}
                <div className="w-2/3">
                    {/* Prospective Faculty & Staff Section */}
                    <div className="mt-12">
                        <h1 className="text-2xl font-semibold mb-4">
                            Prospective Faculty & Staff
                        </h1>
                        <p className="mb-8">
                            Get more details on programmes, resources, fees, and other
                            information for prospective faculty and staff here.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {prospectiveData.map((data, index) => (
                                <StudentCard
                                    key={index}
                                    title={data.title}
                                    description={data.description}
                                    imageSrc={data.imageSrc}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Current Faculty & Staff Section */}
                    <div className="mt-12">
                        <h1 className="text-2xl font-semibold mb-4">
                            Current Faculty & Staff
                        </h1>
                        <p className="mb-8">
                            Get more details on programmes, resources, and policies for
                            current faculty and staff.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {prospectiveData.map((data, index) => (
                                <StudentCard
                                    key={index}
                                    title={data.title}
                                    description={data.description}
                                    imageSrc={data.imageSrc}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Faculty & Staff Directories (Moved to End) */}
                    <div className="mt-12 flex flex-row gap-12">
                        {/* Faculty Directory */}
                        <div className="w-1/2">
                            <h1 className="text-4xl font-bold">Faculty Directory</h1>
                            <FSCard
                                title="Dr. ABC"
                                description="Professor"
                                imageSrc="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
                            />
                        </div>
                        {/* Staff Section */}
                        <div className="w-1/2">
                            <h1 className="text-4xl font-bold">Staff</h1>
                            <FSCard
                                title="Dr. ABC"
                                description="Professor"
                                imageSrc="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FacultyandStaff;

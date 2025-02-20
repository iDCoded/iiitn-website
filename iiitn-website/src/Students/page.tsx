import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Using ShadCN Card
import StudentCard from "../components/StudentCard";

const prospectiveData = [
    {
        title: "Academic Curricula",
        description: "Semester Dates and Deadlines",
    },
    {
        title: "Scholarships and Assistance",
        description: "Details about Scholarships and Financial Assistance",
    },
    {
        title: "Fees and Financial Aid",
        description: "Tuition Fees, Payment Methods, etc.",
    },
];

const currentData = [
    {
        subTitle: "Academic Resources",
        subDes: "Courses, Timetable, Calendar, Curricula, Fees, etc.",
        arr: [
            { title: "Courses", description: "Semester Dates and Deadlines" },
            { title: "Timetable", description: "Important Dates and Deadlines" },
            { title: "Calendar", description: "Important Dates and Academic Calendar" },
        ],
    },
    {
        subTitle: "Student Support",
        subDes: "Resources for counseling and academic support.",
        arr: [
            { title: "Counseling", description: "Mental well-being services" },
            { title: "Library", description: "Library Resources and Online Access" },
        ],
    },
];

const sidebarLinks = [
    { title: "Hostel Life", link: "#" },
    { title: "Sports & Recreation", link: "#" },
    { title: "Cultural Activities", link: "#" },
    { title: "Student Clubs", link: "#" },
    { title: "Events and Festivities", link: "#" },
    { title: "Dining Options", link: "#" },
];

const events = [
    { title: "Annual Tech Fest", link: "#" },
    { title: "Cultural Night", link: "#" },
    { title: "Sports Tournament", link: "#" },
    { title: "Guest Lecture Series", link: "#" },
    { title: "Hackathon", link: "#" },
    { title: "Alumni Meet", link: "#" },
];

function Students() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header Section */}
            <div className="bg-[#002147] text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Students</h1>
                <p className="text-lg mt-2">Stay connected and contribute to IIIT Nagpur.</p>
            </div>

            {/* Main Content */}
            <div className="container mx-auto flex flex-col lg:flex-row gap-12 px-6 py-12">
                {/* Left Content */}
                <div className="lg:w-2/3 space-y-12">
                    {/* Prospective Students */}
                    <section>
                        <h2 className="text-2xl font-semibold text-[#002147]">Prospective Students</h2>
                        <p className="text-gray-600 mb-6">
                            Learn more about programs, fees, and other essential details.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {prospectiveData.map((item, index) => (
                                <StudentCard key={index} title={item.title} description={item.description} imageSrc="https://iiitn.ac.in/images/main-logo-90x90.png" />
                            ))}
                        </div>
                    </section>

                    {/* Current Students */}
                    <section>
                        <h2 className="text-2xl font-semibold text-[#002147]">Current Students</h2>
                        <p className="text-gray-600 mb-6">
                            Find details on courses, timetables, curricula, and academic resources.
                        </p>
                        {currentData.map((section, index) => (
                            <div key={index} className="mb-12">
                                <h3 className="text-xl font-bold text-[#002147]">{section.subTitle}</h3>
                                <p className="text-gray-600 mb-6">{section.subDes}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {section.arr.map((item, idx) => (
                                        <StudentCard key={idx} title={item.title} description={item.description} imageSrc="https://iiitn.ac.in/images/main-logo-90x90.png" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </div>

                {/* Right Sidebar */}
                <div className="lg:w-1/3 flex flex-col space-y-6">
                    {/* Campus Life */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl text-[#002147]">Campus Life</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 mb-4">
                                Explore student clubs, sports, and cultural activities at IIIT Nagpur.
                            </p>
                            <div className="flex flex-col space-y-2">
                                {sidebarLinks.map((item, index) => (
                                    <a key={index} href={item.link} className="text-[#E87722] hover:underline">
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Upcoming Events */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl text-[#002147]">Upcoming Events</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 mb-4">Stay updated with upcoming campus events.</p>
                            <div className="flex flex-col space-y-2">
                                {events.map((event, index) => (
                                    <a key={index} href={event.link} className="text-[#E87722] hover:underline">
                                        {event.title}
                                    </a>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Telephone Directory */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl text-[#002147]">Telephone Directory</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">Find important contact numbers for administration.</p>
                        </CardContent>
                    </Card>

                    {/* Campus Map */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl text-[#002147]">Campus Map</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">Navigate IIIT Nagpur's campus effortlessly.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Students;

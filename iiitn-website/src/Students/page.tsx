import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Using ShadCN Card
import StudentCard from "../components/StudentCard";
import { title } from "process";

const prospectiveData = [
    { title: "Academic Curricula", description: "Semester Dates and Deadlines" },
    { title: "Scholarships and Assistance", description: "Details about Scholarships and Financial Assistance" },
    { title: "Fees and Financial Aid", description: "Tuition Fees, Payment Methods, etc." },
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
    { title: "Hostel Life", link: "/pages/hostellife" },
    { title: "Sports & Recreation", link: "/pages/recreation" },
    { title: "Student Clubs", link: "/pages/studentclubs" },
    { title: "Events and Festivities", link: "/events" },
    { title: "Achievements", link: "/pages/studentachievements" },
    { title: "Dining Options", link: "/pages/mess" },
    { title: "Academic Fees", link: "/pages/academicfee" },   
    { title: "Hostel Fees", link: "/pages/hostelfee" },
   

];



function Students() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="bg-[#002147] text-white py-14 text-center">
                <h1 className="text-4xl font-bold">Students</h1>
                <p className="text-lg mt-2 opacity-80">Stay connected and contribute to IIIT Nagpur.</p>
            </div>

            {/* Main Content */}
            <div className="container mx-auto flex flex-col lg:flex-row gap-12 px-6 py-12">
                {/* Left Sidebar */}
                <aside className="lg:w-1/4 space-y-6">
                    <Card className="shadow-sm border border-gray-200">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-[#002147]">Quick Links</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                {sidebarLinks.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.link} className="text-[#E87722] hover:underline">
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    
                </aside>

                {/* Right Content */}
                <div className="lg:w-3/4 space-y-12">
                    {/* Prospective Students */}
                    <section>
                        <h2 className="text-2xl font-semibold text-[#002147]"><span className="text-3xl text-[#E87722]">| </span> Prospective Students</h2>
                        <p className="text-gray-500 mb-6 text-sm">
                            Learn more about programs, fees, and other essential details.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {prospectiveData.map((item, index) => (
                                <StudentCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    imageSrc="https://iiitn.ac.in/images/main-logo-90x90.png"
                                />
                            ))}
                        </div>
                    </section>

                    {/* Current Students */}
                    <section>
                        <h2 className="text-2xl font-semibold text-[#002147]">Current Students</h2>
                        <p className="text-gray-500 mb-6 text-sm">
                            Find details on courses, timetables, curricula, and academic resources.
                        </p>
                        {currentData.map((section, index) => (
                            <div key={index} className="mb-12">
                                <h3 className="text-xl font-semibold text-[#002147]">{section.subTitle}</h3>
                                <p className="text-gray-500 mb-4 text-sm">{section.subDes}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {section.arr.map((item, idx) => (
                                        <StudentCard
                                            key={idx}
                                            title={item.title}
                                            description={item.description}
                                            imageSrc="https://iiitn.ac.in/images/main-logo-90x90.png"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Students;

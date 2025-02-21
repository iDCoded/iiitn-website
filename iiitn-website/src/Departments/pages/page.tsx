import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

interface Event {
    title: string;
    date?: string;
    image?: string;
    time?: string;
}

interface DepartmentData {
    about: string;
    bos: string;
    achievements: string;
    research: string;
    faculty: string;
    staff: string;
    projects: string[];
    laboratory: string[];
    events: Event[];
}

interface PageProps {
    title: string;
}

const departmentsDemo: Record<string, DepartmentData> = {
    cse: {
        about: "The Department of Computer Science and Engineering at IIIT Nagpur offers a comprehensive curriculum in computer science and engineering. The department is committed to providing quality education and research opportunities to students.",
        bos: "The Board of Studies (BoS) of the CSE Department is responsible for designing the curriculum, evaluating academic programs, and ensuring the quality of education.",
        achievements: "The CSE Department has achieved numerous milestones in research, innovation, and academic excellence. Our faculty and students have published research papers, won awards, and participated in hackathons.",
        research: "The research focus areas of the CSE Department include artificial intelligence, machine learning, data science, computer networks, and software engineering.",
        faculty: "",
        staff: "",
        projects: ["Project 1: AI Chatbot", "Project 2: Data Analytics Tool", "Project 3: Software Development Platform"],
        laboratory: ["Computer Networks Lab", "Artificial Intelligence Lab", "Software Engineering Lab"],
        events: [
            { title: "Hackathon 2025", date: "2025-03-15", time: "10:00 AM - 5:00 PM", image: "/hackathon.jpg" },
            { title: "Guest Lecture on AI", date: "2025-03-20", time: "2:00 PM - 3:30 PM", image: "/ai-lecture.jpg" },
            { title: "CSE Symposium", date: "2025-04-05", time: "9:00 AM - 4:00 PM", image: "/cse-symposium.jpg" },
        ],
    },
    ece: {
        about: "The Department of Electronics and Communication Engineering at IIIT Nagpur offers a comprehensive curriculum in electronics and communication engineering. The department is committed to providing quality education and research opportunities to students.",
        bos: "The Board of Studies (BoS) of the ECE Department is responsible for designing the curriculum, evaluating academic programs, and ensuring the quality of education.",
        achievements: "The ECE Department has achieved numerous milestones in research, innovation, and academic excellence. Our faculty and students have published research papers, won awards, and participated in hackathons.",
        research: "The research focus areas of the ECE Department include advanced networking, signal processing, embedded systems, and VLSI design.",
        faculty: "",
        staff: "",
        projects: ["Project 1: IoT Applications", "Project 2: Wireless Communication", "Project 3: Embedded Systems"],
        laboratory: ["Networking Lab", "Signal Processing Lab", "VLSI Design Lab"],
        events: [
            { title: "Guest Lecture on IoT", date: "2025-03-10", time: "2:00 PM - 3:30 PM", image: "/iot-lecture.jpg" },
            { title: "ECE Symposium", date: "2025-03-25", time: "9:00 AM - 4:00 PM", image: "/ece-symposium.jpg" },
            { title: "Workshop on Embedded Systems", date: "2025-04-15", time: "10:00 AM - 4:00 PM", image: "/embedded-systems.jpg" },
        ],
    },
    basicScience: {
        about: "The Department of Basic Sciences at IIIT Nagpur offers a comprehensive curriculum in basic sciences. The department is committed to providing quality education and research opportunities to students.",
        bos: "The Board of Studies (BoS) of the Basic Sciences Department is responsible for designing the curriculum, evaluating academic programs, and ensuring the quality of education.",
        achievements: "The Basic Sciences Department has achieved numerous milestones in research, innovation, and academic excellence. Our faculty and students have published research papers, won awards, and participated in conferences.",
        research: "The research focus areas of the Basic Sciences Department include physics, chemistry, mathematics, and environmental science.",
        faculty: "",
        staff: "",
        projects: ["Project 1: Quantum Computing", "Project 2: Nanotechnology", "Project 3: Environmental Studies"],
        laboratory: ["Physics Lab", "Chemistry Lab", "Mathematics Lab"],
        events: [
            { title: "Guest Lecture on Quantum Physics", date: "2025-03-05", time: "2:00 PM - 3:30 PM", image: "/quantum-physics.jpg" },
            { title: "Science Fair 2025", date: "2025-03-15", time: "9:00 AM - 4:00 PM", image: "/science-fair.jpg" },
            { title: "Workshop on Nanotechnology", date: "2025-04-10", time: "10:00 AM - 4:00 PM", image: "/nanotechnology.jpg" },
        ],
    },
};

function DepartmentPage({ title }: PageProps) {
    const [data, setData] = useState<DepartmentData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`/api/departments/${title}`)
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch(() => {
                setData(departmentsDemo[title]); // Fallback to demo data
                setLoading(false);
            });
    }, [title]);

    if (loading) return <p className="text-center text-lg text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-lg text-red-500">{error}</p>;
    if (!data) return <p className="text-center text-lg text-gray-600">No data available.</p>;

    const sections = [
        { id: "about", title: "About Department", content: data.about },
        { id: "bos", title: "Board of Studies (BoS)", content: data.bos },
        { id: "achievements", title: "Achievements", content: data.achievements },
        { id: "research", title: "Research", content: data.research },
        { id: "faculty", title: "Faculty", content: data.faculty },
        { id: "staff", title: "Staff", content: data.staff },
        { id: "projects", title: "Projects", content: data.projects },
        { id: "laboratory", title: "Laboratory", content: data.laboratory },
    ];

    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen ">
            {/* Hero Section */}
            <div className="relative w-full text-white text-center py-14 shadow-lg bg-gradient-to-r from-[#002147] via-[#002C5F] to-[#002147]">
                <h1 className="text-5xl font-extrabold tracking-wide">{title.toUpperCase()} Department</h1>
                <p className="text-lg opacity-80 mt-1">Explore the academic programs, research, and opportunities in {title.toUpperCase()} department.
                </p>
            </div>

            {/* Sidebar Navigation */}
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                <aside className="col-span-1 hidden md:block sticky top-20 self-start space-y-6 w-full">
                    <Card className="shadow-sm border border-gray-200">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-[#002147]"></CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                {sections.map((section, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-[#E87722] hover:underline">
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </aside>


                {/* 🟠 Info Sections */}
                <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {sections.map((section) => (
                        <Card
                            key={section.id}
                            className="group relative bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-xl border border-gray-100 dark:border-gray-700"
                        >
                            {/* Header with accent border */}
                            <CardHeader className="p-5">
                                <CardTitle className="text-lg font-semibold tracking-wide relative pb-2">
                                    {section.title}
                                    <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-[#E87722] rounded-full"></span>
                                </CardTitle>
                            </CardHeader>

                            {/* Content */}
                            <CardContent className="p-5 text-gray-700">
                                {Array.isArray(section.content) ? (
                                    <ul className="space-y-2 text-sm">
                                        {section.content.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="text-[#E87722]">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm">{section.content}</p>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>

            <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* 🟠 Events Section */}
                {data.events.length > 0 && (
                    <div className="mt-12 col-span-3">
                        <h2 className="text-3xl font-bold text-[#002147] mb-6">
                            <span className="text-6xl font-bold text-[#E87722]">|</span>Upcoming Events
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
                            {data.events.map((event, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05] cursor-pointer"
                                >
                                    {/* Event Image */}
                                    <div className="h-60 w-full relative overflow-hidden">
                                        <img
                                            src={event.image || "/default-event.jpg"}
                                            alt={event.title}
                                            className="w-full h-full object-cover transition-transform duration-500 scale-110 group-hover:scale-100"
                                        />

                                        {/* Animated Date Badge */}
                                        <div className="absolute top-3 left-3 bg-[#002147] text-white text-sm font-bold px-3 py-2 rounded-md shadow-lg transition-all duration-300 transform group-hover:scale-110 group-hover:bg-[#E87722]">
                                            {event.date ? new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) : "TBD"}
                                        </div>
                                    </div>

                                    {/* Event Details */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {event.title}
                                        </h3>
                                        {event.time && (
                                            <p className="text-sm text-gray-600 mt-1">{event.time}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DepartmentPage;

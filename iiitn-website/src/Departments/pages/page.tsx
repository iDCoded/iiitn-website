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
    faculty: string[];
    staff: string[];
    projects: string[];
    laboratory: string[];
    events: Event[];
}

interface PageProps {
    title: string;
}

const departmentsDemo: Record<string, DepartmentData> = {
    "cse": {
        "about": "The Department of Computer Science and Engineering at IIIT Nagpur focuses on cutting-edge research and practical learning in software development, AI, and data science.",
        "bos": "The Board of Studies (BoS) oversees the curriculum updates and academic policies for CSE.",
        "achievements": "CSE students have secured top positions in hackathons like Smart India Hackathon and Google Summer of Code.",
        "research": "Active research areas include Machine Learning, Blockchain, and Quantum Computing.",
        "faculty": ["Dr. A. Sharma", "Dr. B. Patel", "Dr. C. Reddy"],
        "staff": ["Mr. D. Kumar (Lab Assistant)", "Ms. E. Singh (Technical Assistant)"],
        "projects": ["AI-based Traffic Management System", "Secure IoT Communication"],
        "laboratory": ["AI & ML Lab", "Cyber Security Lab"],
        "events": [
            {
                "title": "AI Symposium 2023",
                "date": "2023-05-15",
                "image": "https://imgs.search.brave.com/ajX9H7zu0SA0kH6G_LFu4v2g2zEfAgco6YazHie54_M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5ub3ZhdGlvbnRy/YWluaW5nLm9yZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/OS9Jbm5vdmF0aW9u/LVN0ZXBzLVByaW50/LUNvdmVyLXdlYi5q/cGc",
                "time": "9:00 AM - 5:00 PM"
            },
            {
                "title": "Blockchain Workshop",
                "date": "2023-07-20",
                "image": "https://imgs.search.brave.com/kCsGlsSshlaiRZmnejGwplhi3iRXKevkHqQZVvmJydI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb2lu/Z2Vlay5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMTAv/QlNWLUJsb2NrY2hh/aW4tV29ya3Nob3At/VG9reW8tanBnLndl/YnA",
                "time": "10:00 AM"
            }
        ]
    },
    "ece": {
        "about": "The Electronics and Communication Engineering department at IIIT Nagpur is dedicated to research in VLSI, Embedded Systems, and Signal Processing.",
        "bos": "The BoS ensures the academic excellence of the ECE department through continuous evaluation.",
        "achievements": "Students have received international research grants for IoT and Communication Networks.",
        "research": "Research areas include Antenna Design, Signal Processing, and Wireless Communication.",
        "faculty": ["Dr. P. Mehta", "Dr. R. Iyer", "Dr. K. Bose"],
        "staff": ["Mr. L. Raj (Lab Assistant)", "Ms. T. Dutta (Technical Assistant)"],
        "projects": ["Smart Wearable Health Monitoring System", "5G Network Optimization"],
        "laboratory": ["Embedded Systems Lab", "Wireless Communication Lab"],
        "events": [
            {
                "title": "Embedded Systems Workshop",
                "date": "2023-06-10",
                "image": "/images/embedded-systems.jpg",
                "time": "10:00 AM - 4:00 PM"
            },
            {
                "title": "VLSI Design Challenge",
                "date": "2023-08-25",
                "image": "/images/vlsi-design.jpg",
                "time": "9:00 AM - 5:00 PM"
            }
        ]
    },
    "basic_sciences": {
        "about": "The Department of Basic Sciences supports engineering education with foundational knowledge in Mathematics, Physics, and Chemistry.",
        "bos": "The BoS for Basic Sciences regularly updates the syllabus to align with modern scientific advancements.",
        "achievements": "Faculty members have published research papers in high-impact journals.",
        "research": "Ongoing research in Nanomaterials, Quantum Mechanics, and Applied Mathematics.",
        "faculty": ["Dr. S. Verma", "Dr. H. Gupta", "Dr. N. Rao"],
        "staff": ["Mr. V. Deshmukh (Lab Assistant)", "Ms. K. Pandey (Technical Assistant)"],
        "projects": ["Material Science in Semiconductor Devices", "Mathematical Modelling for AI"],
        "laboratory": ["Physics Lab", "Chemistry Lab"],
        "events": [
            {
                "title": "Mathematics Quiz Competition",
                "date": "2023-07-05",
                "image": "/images/maths-quiz.jpg",
                "time": "2:00 PM - 4:00 PM"
            },
            {
                "title": "Chemistry Symposium",
                "date": "2023-09-15",
                "image": "/images/chemistry-symposium.jpg",
                "time": "10:00 AM - 3:00 PM"
            }
        ]
    }
}

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
                // setError("Failed to fetch data.");
                setData(departmentsDemo[title]);
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
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* 🟠 Modern Gradient Header */}
            <div className="relative w-full text-white text-center py-14 rounded-lg shadow-lg bg-gradient-to-r from-[#002147] via-[#002C5F] to-[#002147]">
                <h1 className="text-5xl font-extrabold tracking-wide">{title.toUpperCase()} DEPARTMENT</h1>
                <p className="mt-2 text-lg opacity-80">Discover, Learn, and Innovate</p>
            </div>

            {/* 🟠 Content Cards */}
            <div className="grid gap-8 mt-10">
                {sections.map((section) => (
                    <Card
                        key={section.id}
                        className="relative shadow-lg rounded-lg bg-white/80 border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                        {/* Gradient Border (Optional) */}
                        <div className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-[#E87722] transition-all duration-300"></div>

                        {/* Card Header */}
                        <CardHeader className="bg-[#E87722] text-white p-5 rounded-t-lg">
                            <CardTitle className="text-xl font-semibold tracking-wide uppercase relative">
                                {section.title}
                                <div className="absolute bottom-[-3px] left-0 w-10 h-[2px] bg-white"></div> {/* Underline Effect */}
                            </CardTitle>
                        </CardHeader>

                        {/* Card Content */}
                        <CardContent className="p-6 text-gray-700">
                            {Array.isArray(section.content) ? (
                                <ul className="list-disc list-inside space-y-2">
                                    {section.content.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{section.content}</p>
                            )}
                        </CardContent>
                    </Card>

                ))}
            </div>

            {/* 🟠 Events Section (Modern Cards) */}
            {data.events.length > 0 && (
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-[#002147] mb-6">Events</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.events.map((event, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform bg-white h-[400px] cursor-pointer"
                            >
                                {/* Event Image */}
                                <div className="h-60 w-full relative overflow-hidden">
                                    <img
                                        src={event.image || "/default-event.jpg"}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-500 scale-110 group-hover:scale-100"
                                    />

                                    {/* Animated Date Badge */}
                                    <div className="absolute top-3 left-3 bg-[#002147] text-white text-sm font-bold px-3 py-2 rounded-md shadow-lg transition-all duration-300 transform group-hover:bg-[#E87722]">
                                        {event.date ? new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) : "TBD"}
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-gray-900 mt-1">{event.title}</h3>
                                    {event.time && (
                                        <p className="text-sm text-gray-600 mt-1">{event.time} PT</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            )}


        </div>
    );
}

export default DepartmentPage;

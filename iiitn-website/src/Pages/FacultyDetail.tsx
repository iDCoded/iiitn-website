import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

// Updated Faculty Data
const facultyData = [
    {
        name: "Dr. John Doe",
        designation: "Professor & HOD",
        role: "HOD",
        image: "/hod.jpg",
        joinYear: 2005,
        education: "Ph.D. in Computer Science, MIT",
        experience: "20+ years in academia and research",
        teachingPositions: ["Professor at MIT (2000-2005)", "HOD at XYZ University (2005-Present)"],
        research: "Specializes in Artificial Intelligence and Machine Learning, published 50+ research papers.",
    },
    {
        name: "Dr. Alice Smith",
        designation: "Associate Professor",
        role: "Member",
        image: "/faculty1.jpg",
        joinYear: 2010,
        education: "Ph.D. in Data Science, Stanford University",
        experience: "15+ years in teaching and research",
        teachingPositions: ["Lecturer at ABC University (2005-2010)", "Associate Professor at XYZ University (2010-Present)"],
        research: "Expert in Data Analytics, Deep Learning, and Predictive Modeling, with 30+ journal publications.",
    },
    {
        name: "Dr. Bob Williams",
        designation: "Assistant Professor",
        role: "Member",
        image: "/faculty2.jpg",
        joinYear: 2018,
        education: "Ph.D. in Embedded Systems, Harvard University",
        experience: "10+ years in industry and academia",
        teachingPositions: ["Research Scientist at Intel (2012-2018)", "Assistant Professor at XYZ University (2018-Present)"],
        research: "Focuses on IoT, Smart Devices, and Embedded AI, with multiple patents and conference papers.",
    },
];

const FacultyDetail = () => {
    const { name } = useParams<{ name: string }>();
    const navigate = useNavigate();

    // Find faculty by name
    const faculty = name ? facultyData.find((faculty) => faculty.name === decodeURIComponent(name)) : undefined;

    if (!faculty) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h2 className="text-2xl font-bold text-red-500">Faculty Not Found</h2>
                <button 
                    onClick={() => navigate(-1)} 
                    className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            {/* Back Button */}
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-6 text-gray-600 hover:text-black transition">
                <ArrowLeft size={20} /> Back to Directory
            </button>

            {/* Faculty Details Card */}
            <Card className="shadow-lg p-6 text-center">
                <CardHeader>
                    <div className="flex justify-center">
                        <img src={faculty.image} alt={faculty.name} className="w-40 h-40 rounded-full object-cover shadow-md" />
                    </div>
                    <h2 className="text-2xl font-bold mt-4">{faculty.name}</h2>
                    <p className="text-gray-600">{faculty.designation}</p>
                </CardHeader>
                <CardContent className="text-left">
                    <p><strong>Joining Year:</strong> {faculty.joinYear}</p>
                    <p><strong>Education:</strong> {faculty.education}</p>
                    <p><strong>Experience:</strong> {faculty.experience}</p>
                    
                    <div className="mt-4">
                        <strong>Teaching Positions:</strong>
                        <ul className="list-disc list-inside text-gray-700 mt-1">
                            {faculty.teachingPositions.map((position, index) => (
                                <li key={index}>{position}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-4">
                        <strong>Research & Publications:</strong>
                        <p className="text-gray-700 mt-1">{faculty.research}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default FacultyDetail;

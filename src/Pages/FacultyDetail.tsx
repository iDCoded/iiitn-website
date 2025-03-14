import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

interface Faculty {
    f_id: number;
    p_id: number;
    name: string;
    email: string;
    phone_no: string;
    join_year: number;
    positions: string;
    f_or_s: string;
    education?: string | null;
    experience?: string | null;
    teaching?: string | null;
    research?: string | null;
    param?: string;
    image: string;
   
    dept_name: string;
    content: string;
}

const FacultyDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [faculty, setFaculty] = useState<Faculty | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchFaculty = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/faculty/faculty_staff/${id}`);
                const data = await res.json();

                if (data.length === 0) {
                    setFaculty(null);
                    return;
                }

                setFaculty({
                    f_id: data.f_id,
                    p_id: data.p_id,
                    name: data.name,
                    email: data.email,
                    phone_no: data.phone_no,
                    join_year: data.join_year,
                    positions: data.positions,
                    f_or_s: data.f_or_s,
                    education: data.education,
                    experience: data.experience,
                    teaching: data.teaching,
                    research: data.research,
                    param: data.param,
                    image: data.image_path || "/default-profile.png", // Fallback Image
                   
                    dept_name: data.dept_name,
                    content: data.content,
                });
            } catch (error) {
                console.error("Error fetching faculty data:", error);
                setFaculty(null);
            } finally {
                setLoading(false);
            }
        };

        fetchFaculty();
    }, [id]);

    if(loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

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

    // // Function to safely split comma-separated strings into lists
    // const formatList = (text?: string | null) => {
    //     if (!text) return null;
    //     return text.split(",").map((item) => item.trim());
    // };

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
                        <img
                            src={faculty.image}
                            alt={faculty.name}
                            className="w-40 h-40 rounded-full object-cover shadow-md"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mt-4">{faculty.name}</h2>
                 
                </CardHeader>

                <CardContent className="text-left space-y-4">
                <MDEditor.Markdown 
    source={faculty.content} 
    style={{ backgroundColor: "transparent", color: "black" }} />

                </CardContent>
            </Card>
        </div>
    );
};

export default FacultyDetail;

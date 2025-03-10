import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card"; // Adjust import path if needed

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
    designation: string;
    dept_name: string;
}

interface Staff {
    b_id: number;
    branch_name: string;
    content: string;
    d_id: number;
    dept_name: string;
    education?: string | null;
    email: string;
    experience?: string | null;
    f_id: number;
    f_or_s: string;
    image_path: string;
    join_year: number;
    name: string;
    p_id: number;
    phone_no: string;
    positions: string;
    preference: number;
    research?: string | null;
    teaching?: string | null;
}

function DetailedDirectory() {
    const { id } = useParams(); // Expected values: "cse", "ece", "basic_science"
    console.log(id);
    const navigate = useNavigate();

    const [facultyData, setFacultyData] = useState<Faculty[]>([]);
    const [staffData, setStaffData] = useState<Staff[]>([]);
    const [selectedTab, setSelectedTab] = useState<"faculty" | "staff">("faculty");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/faculty/faculty_staff`);
                if (!response.ok) throw new Error("Failed to fetch data");
                const data = await response.json();

                const faculty: Faculty[] = data
                    .filter((person: any) => (person.f_or_s.toLowerCase() === "faculty") && (person.dept_name.toLowerCase() === id))
                    .map((person: any) => ({
                        f_id: person.f_id,
                        p_id: person.p_id,
                        name: person.name.trim(),
                        email: person.email || "N/A",
                        phone_no: person.phone_no || "N/A",
                        join_year: person.join_year,
                        positions: person.positions || "Faculty",
                        f_or_s: person.f_or_s,
                        education: person.education || "Not provided",
                        experience: person.experience || "Not provided",
                        teaching: person.teaching || "Not provided",
                        research: person.research || "Not provided",
                        param: person.param || "",
                        image: person.image_path || "https://via.placeholder.com/150", // Default image if missing
                        designation: person.positions?.includes("HOD") ? "Head of Department" : "Faculty",
                        dept_name: person.dept_name || "Unknown Department"
                    }));

                const staff: Staff[] = data.filter((person: any) => (person.f_or_s.toLowerCase() === "staff") && (person.dept_name.toLowerCase() === id)).map((person: any) => ({
                    f_id: person.f_id,
                    p_id: person.p_id,
                    name: person.name.trim(),
                    email: person.email || "N/A",
                    phone_no: person.phone_no || "N/A",
                    join_year: person.join_year,
                    positions: person.positions || "Staff",
                    f_or_s: person.f_or_s,
                    education: person.education || "Not provided",
                    experience: person.experience || "Not provided",
                    teaching: person.teaching || "Not provided",
                    research: person.research || "Not provided",
                    image_path: person.image_path || "https://via.placeholder.com/150", // Default image if missing
                    dept_name: person.dept_name || "Unknown Department"
                }));

                setFacultyData(faculty);
                setStaffData(staff);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);


    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-accent text-4xl mr-2">|</span> Faculty & Staff Directory
            </h1>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-300">
                {["faculty", "staff"].map((tab) => (
                    <button
                        key={tab}
                        className={`relative px-6 py-2 text-lg font-medium transition-all duration-300 ${selectedTab === tab ? "text-accent font-bold" : "text-gray-500 hover:text-gray-700"
                            }`}
                        onClick={() => setSelectedTab(tab as "faculty" | "staff")}
                    >
                        {tab.toUpperCase()}
                        {selectedTab === tab && (
                            <motion.div layoutId="underline" className="absolute left-0 bottom-0 h-[3px] bg-accent w-full" />
                        )}
                    </button>
                ))}
            </div>

            {/* Faculty Section */}
            {selectedTab === "faculty" && (
                <motion.div
                    key="faculty"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-6"
                >
                    {/* HOD Section */}
                    {facultyData.some((faculty) => faculty.positions === "HOD") && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {facultyData
                                .filter((faculty) => faculty.positions === "HOD")
                                .map((faculty, index) => (
                                    <div className="flex flex-col" key={index}>
                                        <Card
                                            className="shadow-lg border-2 border-accent mx-auto max-w-3xl cursor-pointer hover:shadow-xl transition"
                                            onClick={() => navigate(`/faculty/${faculty.f_id}`)}
                                        >
                                            <CardHeader className="text-center">
                                                <h2 className="text-xl font-bold text-accent">Head of dept_name (HOD)</h2>
                                                <div className="flex justify-center">
                                                    <img
                                                        src={faculty.image}
                                                        alt={faculty.name}
                                                        className="w-40 h-40 rounded-full object-cover shadow-md"
                                                    />
                                                </div>
                                            </CardHeader>
                                            <CardContent className="text-center">
                                                <h3 className="text-lg font-semibold">{faculty.name}</h3>
                                                <p className="text-gray-600">{faculty.designation}</p>
                                                <p className="text-gray-600">{faculty.dept_name.toUpperCase()}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                        </div>
                    )}

                    {/* Other Faculty Members */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facultyData
                            .filter((faculty) => faculty.positions !== "HOD")
                            .map((faculty, index) => (
                                <Card
                                    key={index}
                                    className="shadow-md cursor-pointer hover:shadow-lg transition"
                                    onClick={() => navigate(`/faculty/${encodeURIComponent(faculty.name)}`)}
                                >
                                    <CardHeader className="text-center">
                                        <div className="flex justify-center">
                                            <img
                                                src={faculty.image}
                                                alt={faculty.name}
                                                className="w-24 h-24 rounded-full object-cover shadow-sm"
                                            />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <h3 className="text-lg font-semibold">{faculty.name}</h3>
                                        <p className="text-gray-600">{faculty.designation}</p>
                                        <p className="text-gray-600">{faculty.dept_name.toUpperCase()}</p>
                                    </CardContent>
                                </Card>
                            ))}
                    </div>
                </motion.div>
            )}

            {/* Staff Section */}
            {selectedTab === "staff" && (
                <motion.div
                    key="staff"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {staffData.map((staff, index) => (
                        <Card key={index} className="shadow-md cursor-pointer hover:shadow-lg transition">
                            <CardHeader className="text-center">
                                <div className="flex justify-center">
                                    <img
                                        src={staff.image_path}
                                        alt={staff.name}
                                        className="w-24 h-24 rounded-full object-cover shadow-sm"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="text-center">
                                <h3 className="text-lg font-semibold">{staff.name}</h3>
                                <p className="text-gray-600">{staff.positions}</p>
                                <p className="text-gray-600">{staff.dept_name.toUpperCase()}</p>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default DetailedDirectory;

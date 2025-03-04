import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Card, CardHeader, CardContent } from "@/components/ui/card"; // Replace with the actual path to your Card components

interface FacultyStaff {
    f_id: number;
    p_id: number;
    name: string;
    email: string;
    phone_no: string;
    join_year: number;
    positions: string;
    f_or_s: string;
    education: string;
    experience: string;
    teaching: string;
    research: string;
    param: string;
    image: string; // Assuming API provides this
    designation: string;
    department: string;
}

function DetailedDirectory() {
    const { param } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState<FacultyStaff[] | null>(null);
    const [selectedTab, setSelectedTab] = useState<"faculty" | "staff">("faculty");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/faculty/faculty_staff`);
                const filteredData = response.data.filter((item: FacultyStaff) => item.param === param);
                setData(filteredData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [param]);

    if (!data) {
        return <div>Loading...</div>;
    }

    const facultyList = data.filter((item) => item.f_or_s === "faculty");
    const staffList = data.filter((item) => item.f_or_s === "staff");

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
                        className={`relative px-6 py-2 text-lg font-medium transition-all duration-300 ${
                            selectedTab === tab ? "text-accent font-bold" : "text-gray-500 hover:text-gray-700"
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
                    {facultyList.some((faculty) => faculty.positions === "HOD") && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {facultyList
                                .filter((faculty) => faculty.positions === "HOD")
                                .map((faculty, index) => (
                                    <div className="flex flex-col" key={index}>
                                        <Card
                                            className="shadow-lg border-2 border-accent mx-auto max-w-3xl cursor-pointer hover:shadow-xl transition"
                                            onClick={() => navigate(`/faculty/${encodeURIComponent(faculty.name)}`)}
                                        >
                                            <CardHeader className="text-center">
                                                <h2 className="text-xl font-bold text-accent">Head of Department (HOD)</h2>
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
                                                <p className="text-gray-600">{faculty.department.toUpperCase()}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                        </div>
                    )}

                    {/* Other Faculty Members */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facultyList
                            .filter((faculty) => faculty.positions !== "HOD") // **Fix: Show all non-HOD faculty**
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
                                        <p className="text-gray-600">{faculty.department.toUpperCase()}</p>
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
                    {staffList.map((staff, index) => (
                        <Card key={index} className="shadow-md cursor-pointer hover:shadow-lg transition">
                            <CardHeader className="text-center">
                                <div className="flex justify-center">
                                    <img
                                        src={staff.image}
                                        alt={staff.name}
                                        className="w-24 h-24 rounded-full object-cover shadow-sm"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="text-center">
                                <h3 className="text-lg font-semibold">{staff.name}</h3>
                                <p className="text-gray-600">{staff.designation}</p>
                                <p className="text-gray-600">{staff.department.toUpperCase()}</p>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default DetailedDirectory;

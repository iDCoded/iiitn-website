import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import ShimmerLoader from "@/components/ShimmerLoader";

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

const departments = [
    { id: "cse", name: "CSE" },
    { id: "ece", name: "ECE" },
    { id: "basic_science", name: "Basic Sciences" }
];

const Directory = () => {
    const [facultyData, setFacultyData] = useState<Faculty[]>([]);
    const [staffData, setStaffData] = useState<Staff[]>([]);
    const [selectedDepartment, setSelectedDepartment] = useState<"cse" | "ece" | "basic_science">("cse");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/faculty/faculty_staff`);
                if (!response.ok) throw new Error("Failed to fetch data");
                const data = await response.json();

                const faculty: Faculty[] = data
                    .filter((person: any) => person.f_or_s.toLowerCase() === "faculty")
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

                const staff: Staff[] = data.filter((person: any) => person.f_or_s.toLowerCase() === "staff").map((person: any) => ({
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
                setError(null);
            } catch (error) {
                console.error("Failed to fetch faculty and staff data:", error);
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <ShimmerLoader />;
    }

    if (error) {
        return (
            <div className="max-w-6xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="text-accent text-4xl mr-2">|</span> Faculty & Staff Directory
                </h1>
                <p className="text-red-500 text-lg">{error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-accent text-4xl mr-2">|</span> Faculty & Staff Directory
            </h1>

            {/* Department Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-300">
                {departments.map((dept) => (
                    <button
                        key={dept.id}
                        className={`relative px-6 py-2 text-lg font-medium transition-all duration-300 ${selectedDepartment === dept.id ? "text-accent font-bold" : "text-gray-500 hover:text-gray-700"
                            }`}
                        onClick={() => setSelectedDepartment(dept.id as "cse" | "ece" | "basic_science")}
                    >
                        {dept.name.toUpperCase()}
                        {selectedDepartment === dept.id && (
                            <motion.div layoutId="underline" className="absolute left-0 bottom-0 h-[3px] bg-accent w-full" />
                        )}
                    </button>
                ))}
            </div>

            {/* Faculty & Staff Sections */}
            <motion.div
                key={selectedDepartment}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
            >
                {/* HOD Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Head of the Department</h2>
                    <div className="flex justify-center items-center">
                        {facultyData?.filter((faculty) => (faculty.positions === "HOD" && faculty.dept_name.toLowerCase() === selectedDepartment)).map((faculty, index) => (
                            <Card
                                key={index}
                                className="shadow-lg border-2 border-accent mx-auto max-w-3xl cursor-pointer hover:shadow-xl transition"
                                onClick={() => navigate(`/faculty/${faculty.f_id}`)}
                            >
                                <CardHeader className="text-center">
                                    <h2 className="text-xl font-bold text-accent">Head of Department (HOD)</h2>
                                    <div className="flex justify-center">
                                        <div className="w-24 h-24 rounded-full overflow-hidden">
                                            <img
                                                src={faculty.image}
                                                alt={faculty.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <h3 className="text-lg font-semibold">{faculty.name}</h3>
                                    <p className="text-gray-600">{faculty.designation}</p>
                                </CardContent>
                            </Card>
                        ))

                        }
                    </div>
                </div>
                {/* Faculty Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Faculty Members</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facultyData?.filter((faculty) => (faculty.dept_name.toLowerCase() === selectedDepartment && faculty.positions !== "HOD"))
                            .map((faculty, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Card className="shadow-md cursor-pointer hover:shadow-lg transition"
                                        onClick={() => navigate(`/faculty/${faculty.f_id}`)}
                                    >
                                        <CardHeader className="text-center">
                                            <div className="flex justify-center">
                                                <div className="w-24 h-24 rounded-full overflow-hidden">
                                                    <img
                                                        src={faculty.image}
                                                        alt={faculty.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <h3 className="text-lg font-semibold">{faculty.name}</h3>
                                            <p className="text-gray-600">{faculty.designation}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                    </div>
                </div>

                {/* Staff Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Staff Members</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {staffData?.filter((staff) => staff.dept_name.toLowerCase() === selectedDepartment)
                            .map((staff, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Card className="shadow-md cursor-pointer hover:shadow-lg transition">
                                        <CardHeader className="text-center">
                                            <div className="flex justify-center">
                                                <div className="w-24 h-24 rounded-full overflow-hidden">
                                                    <img
                                                        src={staff.image_path}
                                                        alt={staff.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <h3 className="text-lg font-semibold">{staff.name}</h3>
                                            <p className="text-gray-600">{staff.positions}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                    </div>
                </div>
            </motion.div >
        </div >
    );
};

export default Directory;
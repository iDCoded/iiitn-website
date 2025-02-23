import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Faculty Data
type Faculty = {
    name: string;
    designation: string;
    role: "HOD" | "Member";
    image: string;
};

const facultyData: Faculty[] = [
    { name: "Dr. John Doe", designation: "Professor & HOD", role: "HOD", image: "/hod.jpg" },
    { name: "Dr. Alice Smith", designation: "Associate Professor", role: "Member", image: "/faculty1.jpg" },
    { name: "Dr. Bob Williams", designation: "Assistant Professor", role: "Member", image: "/faculty2.jpg" },
    { name: "Dr. Bob Williams", designation: "Assistant Professor", role: "Member", image: "/faculty2.jpg" },
    { name: "Dr. Bob Williams", designation: "Assistant Professor", role: "Member", image: "/faculty2.jpg" },
    { name: "Dr. Bob Williams", designation: "Assistant Professor", role: "Member", image: "/faculty2.jpg" },
    { name: "Dr. Bob Williams", designation: "Assistant Professor", role: "Member", image: "/faculty2.jpg" },
];

// Staff Data
type Staff = {
    name: string;
    designation: string;
    qualification: string;
    contact: string;
    image: string;
};

const staffData: Staff[] = [
    { name: "Mr. Steve Johnson", designation: "Lab Technician", qualification: "B.Sc. Physics", contact: "steve@example.com", image: "/staff1.jpg" },
    { name: "Mrs. Emily Davis", designation: "Admin Assistant", qualification: "MBA", contact: "emily@example.com", image: "/staff2.jpg" },
    { name: "Mr. Steve Johnson", designation: "Lab Technician", qualification: "B.Sc. Physics", contact: "steve@example.com", image: "/staff1.jpg" },
    { name: "Mr. Steve Johnson", designation: "Lab Technician", qualification: "B.Sc. Physics", contact: "steve@example.com", image: "/staff1.jpg" },
    { name: "Mr. Steve Johnson", designation: "Lab Technician", qualification: "B.Sc. Physics", contact: "steve@example.com", image: "/staff1.jpg" },
    { name: "Mr. Steve Johnson", designation: "Lab Technician", qualification: "B.Sc. Physics", contact: "steve@example.com", image: "/staff1.jpg" },
];

const Directory = () => {
    const [selectedTab, setSelectedTab] = useState<"faculty" | "staff">("faculty");
    const navigate = useNavigate();

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            {/* Heading */}
            <h1 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-[#E87722] text-4xl mr-2">|</span> Faculty & Staff Directory
            </h1>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-300">
                {["faculty", "staff"].map((dept) => (
                    <button
                        key={dept}
                        className={`relative px-6 py-2 text-lg font-medium transition-all duration-300 ${
                            selectedTab === dept ? "text-[#E87722] font-bold" : "text-gray-500 hover:text-gray-700"
                        }`}
                        onClick={() => setSelectedTab(dept as "faculty" | "staff")}
                    >
                        {dept.toUpperCase()}
                        {selectedTab === dept && (
                            <motion.div layoutId="underline" className="absolute left-0 bottom-0 h-[3px] bg-[#E87722] w-full" />
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
                    {facultyData
                        .filter((faculty) => faculty.role === "HOD")
                        .map((faculty, index) => (
                            <Card
                                key={index}
                                className="shadow-lg border-2 border-[#E87722] mx-auto max-w-3xl cursor-pointer hover:shadow-xl transition"
                                onClick={() => navigate(`/faculty/${encodeURIComponent(faculty.name)}`)}
                            >
                                <CardHeader className="text-center">
                                    <h2 className="text-xl font-bold text-[#E87722]">Head of Department (HOD)</h2>
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
                                </CardContent>
                            </Card>
                        ))}

                    {/* Faculty Members */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facultyData
                            .filter((faculty) => faculty.role === "Member")
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
                        <Card key={index} className="shadow-md">
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
                                <p className="text-gray-500 text-sm">Qualification: {staff.qualification}</p>
                                <p className="text-blue-500 text-sm">{staff.contact}</p>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Directory;

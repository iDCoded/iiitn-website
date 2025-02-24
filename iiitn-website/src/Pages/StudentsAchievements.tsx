import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Achievement = {
    title: string;
    researcher: string;
    description: string;
};

const achievementsData: Record<"cse" | "ece" , Achievement[]> = {
    cse: [
        { title: "Best Paper Award at AI Conference", researcher: "Dr. ABC", description: "Awarded for groundbreaking research in AI-powered learning systems." },
        { title: "Patent Granted on Blockchain Security", researcher: "Dr. XYZ", description: "Patent received for innovative methods in blockchain-based authentication." },
        { title: "Quantum Computing Breakthrough", researcher: "Dr. PQR", description: "Recognized for advancements in quantum algorithms for faster computations." }
    ],
    ece: [
        { title: "5G Innovation Grant", researcher: "Dr. XYZ", description: "Awarded for developing new 5G-based IoT applications in smart cities." },
        { title: "NASA Collaboration for Satellite Research", researcher: "Dr. MNO", description: "Selected for an exclusive project with NASA on satellite communications." },
        { title: "Best Research Paper in Renewable Energy", researcher: "Dr. ABC", description: "Honored for contributions to smart grids and renewable energy systems." }
    ],
   
};

const StudentAchievements = () => {
    const [selectedTab, setSelectedTab] = useState<"cse" | "ece" >("cse");

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            {/* Heading */}
            <h1 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-[#E87722] text-4xl mr-2">|</span> Student Achievements & Awards
            </h1>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-300">
                {["cse", "ece"].map((dept) => (
                    <button
                        key={dept}
                        className={`relative px-6 py-2 text-lg font-medium transition-all duration-300 ${selectedTab === dept
                                ? "text-[#E87722] font-bold"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                        onClick={() => setSelectedTab(dept as "cse" | "ece" )}
                    >
                        {dept.toUpperCase()}
                        {selectedTab === dept && (
                            <motion.div
                                layoutId="underline"
                                className="absolute left-0 bottom-0 h-[3px] bg-[#E87722] w-full"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Achievements List with Animation */}
            <motion.div
                key={selectedTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {achievementsData[selectedTab].map((achievement, index) => (
                    <Card key={index} className="shadow-md">
                        <CardHeader>
                            <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">Lead Researcher: <span className="font-medium">{achievement.researcher}</span></p>
                            <p className="text-gray-700 mt-2">{achievement.description}</p>
                            <a href="#" className="text-blue-500 mt-2 inline-block">Read More →</a>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>
        </div>
    );
};

export default StudentAchievements;

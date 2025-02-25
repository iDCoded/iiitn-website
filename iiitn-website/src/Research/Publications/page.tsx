import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroimage from "@/assets/researchBanner.jpg";

type Publication = {
    title: string;
    author: string;
    published: string;
};

const publicationsData: Record<"cse" | "ece" | "basic", Publication[]> = {
    cse: [
        { title: "AI Ethics and Case Studies", author: "Dr. Vikrant Dhenge", published: "IEEE IATMSI 2024" },
        { title: "Deep Learning in Security", author: "Dr. ABC", published: "Elsevier 2023" },
        { title: "Blockchain in IoT", author: "Dr. XYZ", published: "Springer 2024" }
    ],
    ece: [
        { title: "Optimization in Wireless Networks", author: "Dr. XYZ", published: "Springer 2023" },
        { title: "Advancements in 6G Technology", author: "Dr. MNO", published: "IEEE Communications 2024" },
        { title: "VLSI Design & Testing", author: "Dr. ABC", published: "ACM Transactions 2023" }
    ],
    basic: [
        { title: "Mathematical Modeling in Data Science", author: "Dr. Charu Goel", published: "arXiv 2024" },
        { title: "Quantum Mechanics in AI", author: "Dr. PQR", published: "Nature Physics 2023" },
        { title: "Astrophysics Research & Observations", author: "Dr. XYZ", published: "Springer 2023" }
    ],
};

const Publications = () => {
    const [selectedTab, setSelectedTab] = useState<"cse" | "ece" | "basic">("cse");

    return (<>
        <header
            className="relative w-full h-75 flex flex-col justify-center items-center text-white text-center shadow-lg z-100"
            style={{
                backgroundImage: `url(${heroimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10">
                <h1 className="text-5xl font-extrabold drop-shadow-lg">Research Publications</h1>
                <p className="text-xl font-medium mt-2">Explore the Latest Research</p>
            </div>
        </header>
        <div className="max-w-6xl mx-auto px-6 py-10">
            {/* Heading */}
            <h1 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-[#E87722] text-4xl mr-2">|</span> Research Publications
            </h1>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-300">
                {["cse", "ece", "basic"].map((dept) => (
                    <button
                        key={dept}
                        className={`relative px-6 py-2 text-lg font-medium transition-all duration-300 ${selectedTab === dept
                            ? "text-[#E87722] font-bold"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                        onClick={() => setSelectedTab(dept as "cse" | "ece" | "basic")}
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

            {/* Publications List with Animation */}
            <motion.div
                key={selectedTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {publicationsData[selectedTab].map((pub, index) => (
                    <Card key={index} className="shadow-md">
                        <CardHeader>
                            <CardTitle className="text-lg">{pub.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">Author: <span className="font-medium">{pub.author}</span></p>
                            <p className="text-gray-600">Published in: <span className="font-medium">{pub.published}</span></p>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>
        </div>
    </>
    );
};

export default Publications;

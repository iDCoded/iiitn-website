import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroimage from "@/assets/researchBanner.jpg";

type Publication = {
    title: string;
    lead_name: string;
    published_in: string;
    link: string;
    status: string;
    content: string;
};

const Publications = () => {
    const [selectedTab, setSelectedTab] = useState<"CSE" | "ECE" | "BASIC">("CSE");
    const [publicationsData, setPublicationsData] = useState<Record<string, Publication[]>>({
        CSE: [],
        ECE: [],
        BASIC: [],
    });
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/publication`);
                const data = await response.json();
                console.log(data);
                const filteredData = data.filter((type: any) => type.type === "Research");

                const formattedData: Record<string, Publication[]> = {
                    CSE: [],
                    ECE: [],
                    BASIC: [],
                };

                filteredData.forEach((pub: any) => {
                    let branch = pub.branch_enum.toUpperCase();
                    if (branch === "BS") branch = "BASIC";
                    if (!formattedData[branch]) formattedData[branch] = [];
                    formattedData[branch].push(pub);
                });

                setPublicationsData(formattedData);
            } catch (error) {
                console.error("Error fetching publications:", error);
                setError(true);
            }
            setLoading(false);
        };
        fetchPublications();
    }, []);

    const filteredPublications = publicationsData[selectedTab].filter(
        (pub) =>
            pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.lead_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <header
                className="relative w-full h-75 flex flex-col justify-center items-center text-white text-center shadow-lg z-1"
                style={{ backgroundImage: `url(${heroimage})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg">Research Publications</h1>
                    <p className="text-xl font-medium mt-2">Explore the Latest Research</p>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="text-accent text-4xl mr-2">|</span> Research Publications
                </h1>

                <div className="flex gap-4 mb-6 border-b border-gray-300 justify-between">
                    <div>
                    {["CSE", "ECE", "BASIC"].map((branch) => (
                        <button
                            key={branch}
                            className={`relative px-6 py-2 text-lg font-medium transition-all duration-300 ${selectedTab === branch ? "text-accent font-bold" : "text-gray-500 hover:text-gray-700"
                                }`}
                            onClick={() => setSelectedTab(branch as "CSE" | "ECE" | "BASIC")}
                        >
                            {branch.toUpperCase()}
                            {selectedTab === branch && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 bottom-0 h-[3px] bg-accent w-full"
                                />
                            )}
                        </button>
                    ))}
                </div>
                    <input
                        type="text"
                        placeholder="Search Projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full md:w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>

                {loading ? (
                    <p>Loading publications...</p>
                ) : error ? (
                    <p className="text-red-600">Failed to load publications.</p>
                ) : filteredPublications.length === 0 ? (
                    <p className="text-gray-500 italic">No publications found.</p>
                ) : (
                    <motion.div
                        key={selectedTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {filteredPublications.map((pub, index) => (
                            <Card key={index} className="shadow-md">
                                <CardHeader>
                                    <CardTitle className="text-lg">{pub.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Lead: <span className="font-medium">{pub.lead_name}</span>
                                    </p>
                                    <p className="text-gray-600">
                                        Published in: <span className="font-medium">{pub.published_in}</span>
                                    </p>
                                    <p className="text-gray-600">
                                        Status: <span className="font-medium">{pub.status}</span>
                                    </p>
                                    {pub.content && (
                                        <p className="text-gray-600">
                                            Summary: <span className="font-medium">{pub.content}</span>
                                        </p>
                                    )}
                                    {pub.link && (
                                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                            View Publication
                                        </a>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </motion.div>
                )}
            </div>
        </>
    );
};

export default Publications;

import { useEffect, useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

const defofficerData = [
    {
        title: "Central Public Information Officer",
        name: "Ms. Shilpa Pawankar",
        designation: "Assistant Registrar (Accounts)",
        content: "phone email as markdown",
        image: "https://iiitn.ac.in/images/Staff/Ms.%20Shilpa%20M.%20Pawankar.JPG",
    },
    {
        title: "First Appellate Authority",
        name: "Shri Kailas N. Dakhale",
        designation: "Registrar",
        content: "phone email as markdown",
        image: "https://iiitn.ac.in/images/Staff/registrar.jpg",
    },
];

function RtiContact() {
    interface Officer {
        title: string;
        name: string;
        designation: string;
        content: string;
        image: string;
    }

    const [officerData, setOfficerData] = useState<Officer[]>(defofficerData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOfficers = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_BASE_URL}/card/cards/category/rti_officers`
                );
                if (!res.ok) {
                    throw new Error("Failed to fetch RTI officer data");
                }
                const data = await res.json();

                const officerDataList = data.map((officer: any) => ({
                    title: officer.c_sub_category,
                    name: officer.title,
                    designation: officer.caption,
                    content: officer.content,
                    image: officer.media_image_id || "https://via.placeholder.com/150", // Fallback image
                }));

                setOfficerData(officerDataList);
            } catch (error) {
                console.error("Error fetching RTI officer data:", error);
                setOfficerData(defofficerData);
            } finally {
                setLoading(false);
            }
        };

        fetchOfficers();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-primary text-white py-12 text-center">
                <h1 className="text-3xl md:text-5xl font-bold">RTI Officer Details</h1>
                <p className="text-base md:text-lg mt-2 italic">
                    "Transparency and Accountability at IIIT Nagpur."
                </p>
            </header>

            {/* Loading Indicator */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <p className="text-xl font-semibold">Loading...</p>
                </div>
            ) : (
                <div className="mt-8 flex flex-wrap justify-center p-6 gap-6">
                    {officerData.map((officer, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
                            <img
                                src={officer.image}
                                alt={officer.name}
                                className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-primary"
                            />
                            <h2 className="text-xl font-semibold mt-4">{officer.name}</h2>
                            <p className="text-gray-700">{officer.designation}</p>
                            <p className="text-gray-600 italic">
                                Indian Institute of Information Technology, Nagpur
                            </p>
                            <MarkdownPreview
                                source={officer.content}
                                wrapperElement={{ "data-color-mode": "light" }}
                                style={{ padding: 16 }}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default RtiContact;

import { useState, useEffect } from "react";

const defrecruitmentData = [
    {
        title: "Recruitment for the post of Registrar, IIIT Nagpur",
        date: "22-02-2025",
        lastdate: "01-06-2025",
        description: "Applications are invited for the post of Registrar, IIIT Nagpur.",
        document: "#",
    },
    {
        title: "Recruitment for the post of Registrar, IIIT Nagpur",
        date: "22-02-2025",
        lastdate: "29-02-2025",
        description: "Applications are invited for the post of Registrar, IIIT Nagpur.",
        document: "#",
    },
];

function Recruitments() {
    interface Recruitment {
        title: string;
        date: string;
        lastdate: string;
        description: string;
        document: string;
    }

    const [recruitmentData, setRecruitmentData] = useState<Recruitment[]>([]);
    const [loading, setLoading] = useState(true);

    const isDateValid = (dateStr: string) => {
        const [day, month, year] = dateStr.split("-").map(Number);
        const lastDate = new Date(year, month - 1, day);
        return lastDate >= new Date();
    };

    useEffect(() => {
        const fetchRecruitments = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_BASE_URL}/card/cards/category/recruitments`
                );
                if (!res.ok) {
                    throw new Error("Failed to fetch recruitment data");
                }
                const data = await res.json();
                
                const recruitmentDataList = data.map((recruitment: any) => ({
                    title: recruitment.title,
                    date: recruitment.date,
                    lastdate: recruitment.lastdate,
                    description: recruitment.content,
                    document: recruitment.media_doc_path,
                })).filter((recruitment: any) => isDateValid(recruitment.lastdate));
                
                setRecruitmentData(recruitmentDataList.length > 0 ? recruitmentDataList : defrecruitmentData.filter((recruitment: any) => isDateValid(recruitment.lastdate)));
            } catch (error) {
                console.error("Error fetching recruitments:", error);
                setRecruitmentData(defrecruitmentData.filter((recruitment: any) => isDateValid(recruitment.lastdate)));
            } finally {
                setLoading(false);
            }
        };

        fetchRecruitments();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <header className="bg-primary text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Recruitments</h1>
                <p className="text-lg mt-2">
                    Ensuring transparency and accountability in IIIT Nagpur.
                </p>
            </header>

            <main className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg ">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Current Openings
                    </h2>

                    {loading ? (
                        <p className="text-center text-gray-600">Loading...</p>
                    ) : (
                        <div className="grid gap-6">
                            {recruitmentData.length === 0 ? (
                                <p className="text-center text-gray-600">No recruitments available</p>
                            ) : (
                                recruitmentData.map((job, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 p-5 shadow-md  border-l-4 border-primary">
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {job.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            📅 Date: {job.date} | ⏳ Last Date: {job.lastdate}
                                        </p>
                                        <p className="text-gray-700 mt-2">{job.description}</p>
                                        <a
                                            href={job.document}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-block text-primary font-semibold hover:underline">
                                            📄 Download Document
                                        </a>
                                    </div>
                                ))
                            )}
                          
                        </div>
                    )}
                </section>

                <section className="text-center mt-10">
                    <p className="text-lg text-gray-800 font-medium">Apply Online:</p>
                    <a
                        href="https://recruitment.iiitn.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block bg-primary text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#001730] transition">
                        Apply Here 🚀
                    </a>
                </section>
            </main>
        </div>
    );
}

export default Recruitments;

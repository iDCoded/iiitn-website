import React, { useEffect } from "react";
import { useState } from "react";

// Define Report Interface
interface Report {
    year: string;
    Quarterly1: string;
    Quarterly2: string;
    Quarterly3: string;
    Quarterly4: string;
}


const RtiReports: React.FC = () => {
    const [reportData, setReportData] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_BASE_URL}/media/media/category/rti_reports`
                );
                if (!res.ok) {
                    throw new Error("Failed to fetch RTI Reports data");
                }
                const data = await res.json();

                // Group reports by year (title)
                const reportMap: Record<string, Report> = {};

                data.forEach((report: any) => {
                    const year = report.title; // Year is in the title
                    const quarter = report.m_sub_category.toLowerCase(); // q1, q2, q3, q4
                    const link = report.m_doc_id; // Link for the document

                    if (!reportMap[year]) {
                        reportMap[year] = { year, Quarterly1: "", Quarterly2: "", Quarterly3: "", Quarterly4: "" };
                    }

                    if (quarter === "q1") reportMap[year].Quarterly1 = link;
                    else if (quarter === "q2") reportMap[year].Quarterly2 = link;
                    else if (quarter === "q3") reportMap[year].Quarterly3 = link;
                    else if (quarter === "q4") reportMap[year].Quarterly4 = link;
                });

                setReportData(Object.values(reportMap));
            } catch (error) {
                console.error("Error fetching RTI Reports:", error);
                
            } finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, []);


    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col p-4">
            {/* Header */}
            <header className="bg-primary text-white py-8 text-center">
                <h1 className="text-3xl md:text-5xl font-bold">RTI Reports</h1>
                <p className="text-base md:text-lg mt-2 italic">
                    "Navigate your way to IIIT Nagpur with ease."
                </p>
            </header>

            {/* Responsive Section */}
            <div className="mt-10 w-full max-w-5xl mx-auto">
                {/* Desktop View - Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 text-left">Year</th>
                                <th className="p-4 text-center">Quarterly 1</th>
                                <th className="p-4 text-center">Quarterly 2</th>
                                <th className="p-4 text-center">Quarterly 3</th>
                                <th className="p-4 text-center">Quarterly 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportData.map((report, index) => (
                                <tr
                                    key={index}
                                    className={`border-b text-center ${
                                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    } hover:bg-gray-200 transition-all duration-200`}
                                >
                                    <td className="p-4 font-semibold text-left">{report.year}</td>
                                    {(["Quarterly1", "Quarterly2", "Quarterly3", "Quarterly4"] as (keyof Report)[]).map((q, i) => (
                                        <td key={i} className="p-4">
                                            <a
                                                href={report[q]}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 underline hover:text-blue-700"
                                            >
                                                Click Here
                                            </a>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View - Card Format */}
                <div className="md:hidden space-y-4">
                    {reportData.map((report, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-lg font-semibold">{report.year}</h2>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                {(["Quarterly1", "Quarterly2", "Quarterly3", "Quarterly4"] as (keyof Report)[]).map((q, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <span className="font-medium">Q{i + 1}:</span>
                                        <a
                                            href={report[q]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 underline hover:text-blue-700"
                                        >
                                            Click Here
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RtiReports;

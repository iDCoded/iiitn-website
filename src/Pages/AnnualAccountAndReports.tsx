import  { useState, useEffect } from 'react';



const AnnualAccountAndReports = () => {
    interface Report {
        heading: string;
        data: { year: string; link?: string; englink?: string; hinlink?: string }[];
    }
    const [reports, setReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_BASE_URL}/media/media/category/annual_reports`
                );
                if (!res.ok) {
                    throw new Error("Failed to fetch reports data");
                }
                
                const data = await res.json();
                console.log("Parsed Data:", data);
    
                if (!Array.isArray(data)) {
                    throw new Error("Expected an array but received something else");
                }
    
                // Mapping sub_category names to appropriate headings
                const categoryMapping: { [key: string]: string } = {
                    ann_reports: "Annual Reports",
                    aud_reports: "Audit Reports",
                    ann_bal_rep: "Annual Balance Sheet Reports",
                };
    
                // Process the fetched data
                const reportData: Report[] = [];
    
                data.forEach((report: any) => {
                    const heading = categoryMapping[report.m_sub_category] || report.m_sub_category;
    
                    // Extract year and language type from title
                    const year = report.title.replace(/E$|H$/, ""); // Remove E or H suffix
                    const linkType = report.title.endsWith("E")
                        ? "englink"
                        : report.title.endsWith("H")
                        ? "hinlink"
                        : "link";
    
                    // Find or create section
                    let section = reportData.find(r => r.heading === heading);
                    if (!section) {
                        section = { heading, data: [] };
                        reportData.push(section);
                    }
    
                    // Find or create year entry
                    let yearEntry = section.data.find(d => d.year === year);
                    if (!yearEntry) {
                        yearEntry = { year };
                        section.data.push(yearEntry);
                    }
    
                    // Assign correct link type
                    yearEntry[linkType] = report.media_doc_id;
                });

                console.log("Report Data:", reportData);
    
                setReports(reportData);
            } catch (error) {
                console.error("Error fetching reports:", error);
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
       
        
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <header className="bg-primary text-white py-16 text-center">
                <h1 className="text-5xl font-bold">Annual Accounts & Reports</h1>
                <p className="text-lg mt-2 italic">
                    "Access detailed financial statements and reports."
                </p>
            </header>

            {/* Reports Section */}
            <div className="max-w-6xl mx-auto py-12 px-6">
                {reports.map((section, index) => (
                    <div key={index} className="mb-12">
                        <h2 className="text-3xl font-semibold text-primary border-b-4 border-primary pb-2 mb-6">
                            {section.heading}
                        </h2>

                        {/* Report Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.data.map((report, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
                                    <h3 className="text-xl font-medium">{report.year}</h3>
                                    <p className="text-gray-600 mt-1">Click below to download:</p>
                                    {'englink' in report || 'hinlink' in report ? (
                                        <>
                                           {
                                                'englink' in report && (
                                                    <a
                                                        href={report.englink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-all">
                                                        Download English PDF
                                                    </a>
                                                )
                                           }
                                           {
                                                'hinlink' in report && (
                                                    <a
                                                        href={report.hinlink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-all">
                                                        Download Hindi PDF
                                                    </a>
                                                )           
                                           }
                                        </>
                                    ) : (
                                        <a
                                            href={report.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-all">
                                            Download PDF
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnnualAccountAndReports;



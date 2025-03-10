import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

function MinutesOfMeeting() {
    interface Section {
        heading: string;
        meetings: { title: string; link: string | null }[];
    }

    const [minutesOfMeetingData, setMinutesOfMeetingData] = useState<Section[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedSection, setSelectedSection] = useState<Section | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const fetchMeetingData = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_BASE_URL}/media/media/category/minutes_of_meetings`
                );
                if (!res.ok) {
                    throw new Error("Failed to fetch Minutes of Meetings data");
                }
                const data = await res.json();

                // Grouping data by heading
                const groupedData: Record<string, { title: string; link: string | null }[]> = {};

                data.forEach((meeting: any) => {
                    const headingKey = meeting.m_sub_category;
                    const title = meeting.title;
                    const link = meeting.media_doc_id || null;

                    let heading = "";
                    if (headingKey === "bog") heading = "Board of Governors";
                    else if (headingKey === "fc") heading = "Finance Committee";
                    else if (headingKey === "senate") heading = "Senate";
                    else if (headingKey === "bwc") heading = "Building Works Committee";
                    else heading = headingKey;

                    if (!groupedData[heading]) {
                        groupedData[heading] = [];
                    }

                    groupedData[heading].push({ title, link });
                });

                const formattedData = Object.entries(groupedData).map(([heading, meetings]) => ({
                    heading,
                    meetings,
                }));

                setMinutesOfMeetingData(formattedData);
                setSelectedSection(formattedData.length > 0 ? formattedData[0] : null);
            } catch (error) {
                console.error("Error fetching Minutes of Meetings:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMeetingData();
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (!selectedSection) {
        return <div className="text-center py-10">No data available.</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-primary text-white py-12 text-center">
                <h1 className="text-3xl md:text-5xl font-bold">Minutes of Meetings</h1>
                <p className="text-base md:text-lg mt-2 italic">
                    "Navigate your way to IIIT Nagpur with ease."
                </p>
            </header>

            {/* Mobile Dropdown Selection */}
            <div className="md:hidden p-4">
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="bg-primary text-white flex items-center justify-between w-full p-3 rounded-lg text-lg"
                >
                    {selectedSection.heading} <ChevronDown size={20} />
                </button>

                {dropdownOpen && (
                    <ul className="mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
                        {minutesOfMeetingData.map((section, index) => (
                            <li
                                key={index}
                                className={`p-3 text-center cursor-pointer ${
                                    selectedSection.heading === section.heading
                                        ? "bg-primary text-white"
                                        : "hover:bg-gray-200"
                                }`}
                                onClick={() => {
                                    setSelectedSection(section);
                                    setDropdownOpen(false);
                                }}
                            >
                                {section.heading}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Main Content Layout */}
            <div className="flex flex-1">
                {/* Sidebar Navigation for Larger Screens */}
                <aside className="hidden md:block md:w-1/4 bg-gray-200 p-6 min-h-screen">
                    <h2 className="text-xl font-bold mb-4">Sections</h2>
                    <ul>
                        {minutesOfMeetingData.map((section, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer p-2 ${
                                    selectedSection.heading === section.heading
                                        ? "bg-primary text-white"
                                        : "hover:bg-gray-300"
                                }`}
                                onClick={() => setSelectedSection(section)}
                            >
                                {section.heading}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <div className="w-full md:w-3/4 p-4 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary border-b-4 border-primary pb-2 mb-4">
                        <span className="text-accent text-4xl mr-2">|</span> {selectedSection.heading}
                    </h2>

                    {/* Table Layout */}
                    <div className="overflow-x-auto flex justify-center">
                        <table className="w-full max-w-2xl bg-white shadow-md rounded-lg overflow-hidden mx-auto">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="p-4 text-center w-1/2">Title</th>
                                    <th className="p-4 text-center w-1/2">Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedSection.meetings.map((meeting, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-100">
                                        <td className="p-4 text-center">{meeting.title}</td>
                                        <td className="p-4 text-center">
                                            {meeting.link ? (
                                                <a
                                                    href={meeting.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    Click Here
                                                </a>
                                            ) : (
                                                <span className="text-gray-500">No Document Available</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MinutesOfMeeting;

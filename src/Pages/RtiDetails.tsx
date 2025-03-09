import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

// const rtiDetailsData = [
//     {
//         heading: "Organization and Function",
//         data: [
//             { id: "1.1", sId: "1.1", title: "Particulars of its organization, functions and duties [Section 4(1)(b)(i)]" },
//             { id: "1.2", sId: "1.2", title: "Power and duties of its officers and employees [Section 4(1)(b)(ii)]" },
//             { id: "1.3", sId: "1.3", title: "Procedure followed in the decision-making process [Section 4(1)(b)(iii)]" },
//             { id: "1.4", sId: "1.4", title: "Norms for discharge of functions [Section 4(1)(b)(iv)]" },
//             { id: "1.5", sId: "1.5", title: "Rules, regulations, instructions manual and records for discharging functions [Section 4(1)(b)(v)]" },
//             { id: "1.6", sId: "1.6", title: "Categories of documents held by the authority under its control [Section 4(1)(b)(vi)]" },
//             { id: "1.7", sId: "1.7", title: "Boards, Councils, Committees and other Bodies constituted as part of the Public Authority [Section 4(1)(b)(viii)]" },
//             { id: "1.8", sId: "1.8", title: "Directory of officers and employees [Section 4(1)(b)(ix)]" },
//             { id: "1.9", sId: "1.9", title: "Monthly Remuneration received by officers & employees including the system of compensation [Section 4(1)(b)(x)]" },
//             { id: "1.10", sId: "1.10", title: "Name, designation and other particulars of public information officers [Section 4(1)(b)(xvi)]" },
//         ],
//     },
//     {
//         heading: "Budget and Programme",
//         data: [
//             { id: "2.1", sId: "2.1", title: "Budget allocated to each agency including plans, proposed expenditure, and disbursements [Section 4(1)(b)(xi)]" },
//             { id: "2.2", sId: "2.2", title: "Foreign and domestic tours (F.No. 1/8/2012-IR dt. 11.9.2012)" },
//             { id: "2.3", sId: "2.3", title: "Manner of execution of subsidy programme [Section 4(1)(b)(xii)]" },
//             { id: "2.4", sId: "2.4", title: "Discretionary and non-discretionary grants [F.No. 1/6/2011-IR dt. 15.04.2013]" },
//             { id: "2.5", sId: "2.5", title: "Particulars of recipients of concessions, permits or authorizations granted [Section 4(1)(b)(xiii)]" },
//             { id: "2.6", sId: "2.6", title: "CAG & PAC paras [F.No. 1/6/2011-IR dt.15.4.2013]" },
//         ],
//     },
//     {
//         heading: "Publicity and Public Interface",
//         data: [
//             { id: "3.1", sId: "3.1", title: "Arrangement for public consultation in policy formulation and implementation [Section 4(1)(b)(vii)]" },
//             { id: "3.2", sId: "3.2", title: "Details of policies/decisions affecting the public [Section 4(1)(c)]" },
//             { id: "3.3", sId: "3.3", title: "Dissemination of information widely in an accessible manner [Section 4(3)]" },
//             { id: "3.4", sId: "3.4", title: "Form of accessibility of information manual/handbook [Section 4(1)(b)]" },
//             { id: "3.5", sId: "3.5", title: "Whether information manual/handbook is available for free [Section 4(1)(b)]" },
//         ],
//     },
//     {
//         heading: "E-Governance",
//         data: [
//             { id: "4.1", sId: "4.1", title: "Language of Information Manual/Handbook [F.No. 1/6/2011-IR dt. 15.4.2013]" },
//             { id: "4.2", sId: "4.2", title: "Last update of Information Manual/Handbook [F.No. 1/6/2011-IR dt 15.4.2013]" },
//             { id: "4.3", sId: "4.3", title: "Information available in electronic form [Section 4(1)(b)(xiv)]" },
//             { id: "4.4", sId: "4.4", title: "Facilities available to citizens for obtaining information [Section 4(1)(b)(xv)]" },
//             { id: "4.5", sId: "4.5", title: "Other information prescribed under Section 4(1)(b)(xvii)" },
//         ],
//     },
//     {
//         heading: "Information as may be prescribed",
//         data: [
//             { id: "5.1", sId: "5.1", title: "Other prescribed information [F.No. 1/2/2016-IR dt. 17.8.2016, F.No. 1/6/2011-IR dt. 15.4.2013]" },
//         ],
//     },
//     {
//         heading: "Information Disclosed on Own Initiative",
//         data: [
//             { id: "6.1", sId: "6.1", title: "Items/information disclosed for minimum resort to RTI requests" },
//             { id: "6.2", sId: "6.2", title: "Guidelines for Indian Government Websites (GIGW) compliance" },
//             { id: "6.2.1", sId: "6.2.1", title: "STQC certification obtained and its validity" },
//             { id: "6.2.2", sId: "6.2.2", title: "Website displays the certificate" },
//         ],
//     },
// ];

const RTIDetails = () => {
    interface RTISection {
        heading: string;
        data: { id: string; sId: string; title: string }[];
    }
    
    const [rtiDetailsData, setRTIDetailsData] = useState<RTISection[]>([]);
    const [selectedSection, setSelectedSection] = useState<RTISection | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/card/cards/category/rtidetails");
                if (response.status === 200 && response.headers.get('content-type')?.includes('application/json')) {
                    const data = await response.json();
                    const groupedData = groupBySubCategory(data);
                    setRTIDetailsData(groupedData as RTISection[]);
                    setSelectedSection(groupedData[0]); // Set default selected section
                } else {
                    console.error("Unexpected response format:", response);
                }
            } catch (error) {
                console.error("Error fetching RTI details:", error);
            }
        };

        fetchData();
    }, []);

    // Group data by c_sub_category
    const groupBySubCategory = (data: any[]): RTISection[] => {
        const grouped: { [key: string]: RTISection } = {};

        if (Array.isArray(data)) {
            data.forEach((item) => {
                if (!grouped[item.c_sub_category]) {
                    grouped[item.c_sub_category] = {
                        heading: item.c_sub_category,
                        data: [],
                    };
                }
                grouped[item.c_sub_category].data.push({
                    id: item.c_id,
                    sId: item.c_id,
                    title: item.title,
                });
            });
        } else {
            console.error("Expected data to be an array, but got:", data);
        }

        return Object.values(grouped);
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-primary text-white py-14 text-center shadow-lg">
                <h1 className="text-4xl font-extrabold tracking-wide">RTI Details</h1>
            </header>

            {/* Mobile Dropdown */}
            <div className="md:hidden px-4 mt-6">
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="bg-primary text-white flex items-center justify-between w-full py-3 px-4 rounded-xl text-lg shadow-md"
                >
                    {selectedSection ? selectedSection.heading : "Select a section"} <ChevronDown size={20} />
                </button>

                {dropdownOpen && (
                    <ul className="mt-2 bg-white shadow-md rounded-xl overflow-hidden">
                        {rtiDetailsData.map((section, index) => (
                            <li
                                key={index}
                                className={`p-4 text-center cursor-pointer transition ${selectedSection?.heading === section.heading
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

            {/* Layout */}
            <div className="flex flex-1 max-w-7xl mx-auto w-full py-8 px-4 md:px-8 gap-6">
                {/* Sidebar */}
                <aside className="hidden md:flex md:flex-col md:w-1/4 bg-white p-6 shadow-lg rounded-xl h-fit">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Sections</h2>
                    <ul className="space-y-2">
                        {rtiDetailsData.map((section, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer p-3 rounded-lg text-lg transition text-gray-700 ${selectedSection?.heading === section.heading
                                    ? "bg-primary text-white"
                                    : "hover:bg-gray-100"
                                    }`}
                                onClick={() => setSelectedSection(section)}
                            >
                                {section.heading}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Content */}
                <div className="w-full md:w-3/4 bg-white p-6 md:p-8 shadow-xl rounded-xl">
                    <h2 className="text-2xl font-bold text-primary border-b-4 border-primary pb-2 mb-6">
                        {selectedSection?.heading}
                    </h2>

                    {/* Table inside a Card */}
                    <Card className="w-full bg-gray-50 shadow-md rounded-lg overflow-hidden">
                        <table className="w-full">
                            <tbody>
                                {selectedSection?.data.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-b hover:bg-gray-100 transition cursor-pointer"
                                        onClick={() => navigate(`/institute/rtidetails/${item.id}`)}
                                    >
                                        <td className="p-4 text-center font-semibold text-gray-800">{item.sId}</td>
                                        <td className="p-4 text-left text-gray-700">{item.title}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default RTIDetails;

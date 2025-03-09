import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const rtiDetailsData = [
    {
        heading: "Organization and Function",
        data: [
            { id: "1.1", sId: "1.1", title: "Particulars of its organization, functions and duties [Section 4(1)(b)(i)]" },
            { id: "1.2", sId: "1.2", title: "Power and duties of its officers and employees [Section 4(1)(b)(ii)]" },
            { id: "1.3", sId: "1.3", title: "Procedure followed in the decision-making process [Section 4(1)(b)(iii)]" },
            { id: "1.4", sId: "1.4", title: "Norms for discharge of functions [Section 4(1)(b)(iv)]" },
            { id: "1.5", sId: "1.5", title: "Rules, regulations, instructions manual and records for discharging functions [Section 4(1)(b)(v)]" },
            { id: "1.6", sId: "1.6", title: "Categories of documents held by the authority under its control [Section 4(1)(b)(vi)]" },
            { id: "1.7", sId: "1.7", title: "Boards, Councils, Committees and other Bodies constituted as part of the Public Authority [Section 4(1)(b)(viii)]" },
            { id: "1.8", sId: "1.8", title: "Directory of officers and employees [Section 4(1)(b)(ix)]" },
            { id: "1.9", sId: "1.9", title: "Monthly Remuneration received by officers & employees including the system of compensation [Section 4(1)(b)(x)]" },
            { id: "1.10", sId: "1.10", title: "Name, designation and other particulars of public information officers [Section 4(1)(b)(xvi)]" },
        ],
    },
    {
        heading: "Budget and Programme",
        data: [
            { id: "2.1", sId: "2.1", title: "Budget allocated to each agency including plans, proposed expenditure, and disbursements [Section 4(1)(b)(xi)]" },
            { id: "2.2", sId: "2.2", title: "Foreign and domestic tours (F.No. 1/8/2012-IR dt. 11.9.2012)" },
            { id: "2.3", sId: "2.3", title: "Manner of execution of subsidy programme [Section 4(1)(b)(xii)]" },
            { id: "2.4", sId: "2.4", title: "Discretionary and non-discretionary grants [F.No. 1/6/2011-IR dt. 15.04.2013]" },
            { id: "2.5", sId: "2.5", title: "Particulars of recipients of concessions, permits or authorizations granted [Section 4(1)(b)(xiii)]" },
            { id: "2.6", sId: "2.6", title: "CAG & PAC paras [F.No. 1/6/2011-IR dt.15.4.2013]" },
        ],
    },
    {
        heading: "Publicity and Public Interface",
        data: [
            { id: "3.1", sId: "3.1", title: "Arrangement for public consultation in policy formulation and implementation [Section 4(1)(b)(vii)]" },
            { id: "3.2", sId: "3.2", title: "Details of policies/decisions affecting the public [Section 4(1)(c)]" },
            { id: "3.3", sId: "3.3", title: "Dissemination of information widely in an accessible manner [Section 4(3)]" },
            { id: "3.4", sId: "3.4", title: "Form of accessibility of information manual/handbook [Section 4(1)(b)]" },
            { id: "3.5", sId: "3.5", title: "Whether information manual/handbook is available for free [Section 4(1)(b)]" },
        ],
    },
    {
        heading: "E-Governance",
        data: [
            { id: "4.1", sId: "4.1", title: "Language of Information Manual/Handbook [F.No. 1/6/2011-IR dt. 15.4.2013]" },
            { id: "4.2", sId: "4.2", title: "Last update of Information Manual/Handbook [F.No. 1/6/2011-IR dt 15.4.2013]" },
            { id: "4.3", sId: "4.3", title: "Information available in electronic form [Section 4(1)(b)(xiv)]" },
            { id: "4.4", sId: "4.4", title: "Facilities available to citizens for obtaining information [Section 4(1)(b)(xv)]" },
            { id: "4.5", sId: "4.5", title: "Other information prescribed under Section 4(1)(b)(xvii)" },
        ],
    },
    {
        heading: "Information as may be prescribed",
        data: [
            { id: "5.1", sId: "5.1", title: "Other prescribed information [F.No. 1/2/2016-IR dt. 17.8.2016, F.No. 1/6/2011-IR dt. 15.4.2013]" },
        ],
    },
    {
        heading: "Information Disclosed on Own Initiative",
        data: [
            { id: "6.1", sId: "6.1", title: "Items/information disclosed for minimum resort to RTI requests" },
            { id: "6.2", sId: "6.2", title: "Guidelines for Indian Government Websites (GIGW) compliance" },
            { id: "6.2.1", sId: "6.2.1", title: "STQC certification obtained and its validity" },
            { id: "6.2.2", sId: "6.2.2", title: "Website displays the certificate" },
        ],
    },
];

function RTIDetails() {
    const [selectedSection, setSelectedSection] = useState(rtiDetailsData[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate(); // 🔹 Initialize navigation

    function cn(...classes: string[]): string {
        return classes.filter(Boolean).join(' ');
    }


    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-primary text-white py-12 text-center">
                <h1 className="text-3xl md:text-5xl font-bold">RTI Details</h1>
            </header>

            {/* Mobile Dropdown */}
            <div className="md:hidden p-4">
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="bg-primary text-white flex items-center justify-between w-full p-3 rounded-lg text-lg"
                >
                    {selectedSection.heading} <ChevronDown size={20} />
                </button>

                {dropdownOpen && (
                    <ul className="mt-2 bg-white shadow-lg rounded-lg">
                        {rtiDetailsData.map((section, index) => (
                            <li
                                key={index}
                                className={cn(
                                    "p-3 text-center cursor-pointer",
                                    selectedSection.heading === section.heading
                                        ? "bg-primary text-white"
                                        : "hover:bg-gray-200"
                                )}
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
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="hidden md:block md:w-1/4 bg-gray-200 p-6 min-h-screen">
                    <h2 className="text-xl font-bold mb-4">Sections</h2>
                    <ul>
                        {rtiDetailsData.map((section, index) => (
                            <li
                                key={index}
                                className={cn(
                                    "cursor-pointer p-2 rounded-md transition",
                                    selectedSection.heading === section.heading
                                        ? "bg-primary text-white"
                                        : "hover:bg-gray-300"
                                )}
                                onClick={() => setSelectedSection(section)}
                            >
                                {section.heading}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Content */}
                <div className="w-full md:w-3/4 p-4 md:p-8">
                    <h2 className="text-2xl font-semibold text-primary border-b-4 border-primary pb-2 mb-4">
                        {selectedSection.heading}
                    </h2>

                    {/* Table inside a Card */}
                    <Card className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                        <table className="w-full">
                            <tbody>
                                {selectedSection.data.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-b hover:bg-gray-100 transition cursor-pointer"
                                        onClick={() => navigate(`/institute/rtidetails/${item.id}`)}
                                    >
                                        <td className="p-4 text-center w-1/4 font-medium text-gray-700">{item.sId}</td>
                                        <td className="p-4 text-left w-3/4 text-gray-600">{item.title}</td>
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

import React from 'react';

const establishmentSecData = [
    { documentName: 'IIITN Act', documentLink: 'https://www.iiitn.ac.in/IIITN_Act.pdf' },
    { documentName: 'IIITN Ordinance', documentLink: 'https://www.iiitn.ac.in/IIITN_Ordinance.pdf' },
    { documentName: 'IIITN Rules', documentLink: 'https://www.iiitn.ac.in/IIITN_Rules.pdf' }
];

const examSecData = [
    { documentName: 'Academic Calendar 2024', documentLink: 'https://www.iiitn.ac.in/Academic_Calendar.pdf' },
    { documentName: 'Examination Guidelines', documentLink: 'https://www.iiitn.ac.in/Exam_Guidelines.pdf' },
];

const accSecData = [
    { documentName: 'Annual Report 2023', documentLink: 'https://www.iiitn.ac.in/Annual_Report.pdf' },
    { documentName: 'Financial Statements 2023', documentLink: 'https://www.iiitn.ac.in/Finance_Statements.pdf' },
];

const sections = [
    { title: 'Establishment Section', data: establishmentSecData },
    { title: 'Examination Section', data: examSecData },
    { title: 'Accounts Section', data: accSecData }
];

function OfficialDocuments() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header Section */}
            <div className="bg-[#002147] text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Official Documents</h1>
                <p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
            </div>

            {/* Documents Section */}
            <div className="w-full max-w-7xl mx-auto p-6">
                {sections.map((section, secIndex) => (
                    <div key={secIndex} className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#002147] mb-4">{section.title}</h2>
                        <div className="bg-white shadow-lg rounded-lg p-5 overflow-x-auto">
                            <table className="w-full border-collapse table-auto">
                                <thead>
                                    <tr className="bg-[#002147] text-white text-left">
                                        <th className="py-3 px-6 w-16">Sr.No</th>
                                        <th className="py-3 px-6">Document Name</th>
                                        <th className="py-3 px-6 w-40">Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {section.data.map((doc, index) => (
                                        <tr key={index} className="border-b hover:bg-gray-100 transition">
                                            <td className="py-3 px-6">{index + 1}</td>
                                            <td className="py-3 px-6">{doc.documentName}</td>
                                            <td className="py-3 px-6">
                                                <a href={doc.documentLink} target="_blank" rel="noopener noreferrer" className="text-[#E87722] hover:text-orange-600 font-medium">
                                                    View PDF →
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OfficialDocuments;

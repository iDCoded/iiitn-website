import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

const committees = [
    {
        title: "Board of Governors",
        asOnDate: "As on 19th Feb 2025",
        members: [
            { name: "Dr. A. P. Singh", Position: "Chairman" },
            { name: "Prof. B. Kumar", Position: "Member" },
            { name: "Shri C. Nair", Position: "Member" },
        ]
    },
    {
        title: "Senate",
        asOnDate: "As on 19th Feb 2025",
        members: [
            { name: "Prof. D. Sharma", Position: "Chairperson" },
            { name: "Prof. E. Iyer", Position: "Member" },
            { name: "Dr. F. Mehta", Position: "Member" },
        ]
    },
    {
        title: "Building Work Panel",
        asOnDate: "As on 19th Feb 2025",
        members: [
            { name: "Mr. G. Verma", Position: "Head Architect" },
            { name: "Eng. H. Joshi", Position: "Senior Engineer" },
            { name: "Dr. I. Rao", Position: "Consultant" },
        ]
    },
    {
        title: "Finance Committee",
        asOnDate: "As on 19th Feb 2025",
        members: [
            { name: "Mr. J. Shah", Position: "Finance Head" },
            { name: "Dr. K. Nanda", Position: "Auditor" },
            { name: "Ms. L. Kapoor", Position: "Member" },
        ]
    }
];

function Committee() {
    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#002147] text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Committees at IIIT Nagpur</h1>
                <p className="text-lg mt-2">Ensuring Excellence in Governance</p>
            </div>

            {/* Committee Sections */}
            <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8">
                {committees.map((committee, index) => (
                    <Card key={index} className="shadow-lg">
                        <CardHeader className="bg-[#E87722] text-white p-4 rounded-t-lg">
                            <CardTitle>{committee.title}</CardTitle>
                            <p className="text-sm mt-1">{committee.asOnDate}</p>
                        </CardHeader>
                        <CardContent className="p-6">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-300 p-2">S.No</th>
                                        <th className="border border-gray-300 p-2">Name</th>
                                        <th className="border border-gray-300 p-2">Position</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {committee.members.map((member, idx) => (
                                        <tr key={idx} className="text-center">
                                            <td className="border border-gray-300 p-2">{idx + 1}</td>
                                            <td className="border border-gray-300 p-2">{member.name}</td>
                                            <td className="border border-gray-300 p-2">{member.Position}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Committee;

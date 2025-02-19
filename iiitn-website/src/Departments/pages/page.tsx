import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

interface DepartmentData {
    about: string;
    bos: string;
    achievements: string;
    research: string;
    faculty: string[];
    staff: string[];
    projects: string[];
    laboratory: string[];
    events: string[];
}

interface PageProps {
    title: string;
}

function DepartmentPage({ title }: PageProps) {
    const [data, setData] = useState<DepartmentData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`/api/departments/${title}`)
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to fetch data.");
                setLoading(false);
            });
    }, [title]);

    if (loading) return <p className="text-center text-lg text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-lg text-red-500">{error}</p>;
    if (!data) return <p className="text-center text-lg text-gray-600">No data available.</p>;

    const sections = [
        { id: "about", title: "About Department", content: data.about },
        { id: "bos", title: "Board of Studies (BoS)", content: data.bos },
        { id: "achievements", title: "Achievements", content: data.achievements },
        { id: "research", title: "Research", content: data.research },
        { id: "faculty", title: "Faculty", content: data.faculty },
        { id: "staff", title: "Staff", content: data.staff },
        { id: "projects", title: "Projects", content: data.projects },
        { id: "laboratory", title: "Laboratory", content: data.laboratory },
        { id: "events", title: "Events", content: data.events },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* 🟠 Modern Gradient Header */}
            <div className="relative w-full text-white text-center py-14 rounded-lg shadow-lg bg-gradient-to-r from-[#002147] via-[#002C5F] to-[#002147]">
                <h1 className="text-5xl font-extrabold tracking-wide">{title.toUpperCase()} DEPARTMENT</h1>
                <p className="mt-2 text-lg opacity-80">Discover, Learn, and Innovate</p>
            </div>

            {/* 🟠 Content Cards */}
            <div className="grid gap-8 mt-10">
                {sections.map((section) => (
                    <Card
                        key={section.id}
                        className="shadow-xl rounded-lg bg-white/80 backdrop-blur-lg border border-gray-200 hover:scale-[1.02] transition-transform duration-200"
                    >
                        <CardHeader className="bg-[#E87722] text-white p-5 rounded-t-lg">
                            <CardTitle className="text-xl font-semibold">{section.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-gray-700">
                            {Array.isArray(section.content) ? (
                                <ul className="list-disc list-inside space-y-2">
                                    {section.content.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{section.content}</p>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default DepartmentPage;

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { useState } from "react";

function Administration() {
    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#002147] text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Governance at IIIT Nagpur</h1>
                <p className="text-lg mt-2">Ensuring Excellence in Leadership</p>
            </div>

            {/* Main Layout without Sidebar for Mobile */}
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <aside className="hidden md:block md:w-1/4 space-y-6 sticky top-20 self-start">
                    <Card className="shadow-sm border border-gray-200">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-[#002147]">
                                Quick Links
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                {["Chairman", "Director", "Registrar", "Staff Directory"].map((item, index) => (
                                    <li key={index}>
                                        <a href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="text-[#E87722] hover:underline">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </aside>

                {/* Content Section */}
                <div className="w-full md:w-3/4 grid gap-8">
                    {[
                        {
                            id: "chairman",
                            title: "Chairman",
                            name: "Shri Ravi Sharma",
                            position: "Chairman, BoG IIIT Nagpur",
                            email: "chairman@iiitn.ac.in",
                            desc: "An accomplished former CEO, Ravi Sharma is now a mentor & philanthropist with a mission of 'Spreading Goodness' by supporting initiatives towards...",
                            link: "/governance/chairman",
                            imageSrc: "/assets/chairman.jpg",
                        },
                        {
                            id: "director",
                            title: "Director",
                            name: "Professor Prem Lal Patel",
                            position: "Director, IIIT Nagpur",
                            email: "director@iiitn.ac.in",
                            desc: "Professor Prem Lal Patel took over as Director of IIIT Nagpur on 1st October 2024. He is also the Director of VNIT Nagpur...",
                            link: "/governance/director",
                            imageSrc: "/assets/director.jpg",
                        },
                        {
                            id: "registrar",
                            title: "Registrar",
                            name: "Shri Kailas N. Dakhale",
                            position: "Registrar, IIIT Nagpur",
                            email: "registrar@iiitn.ac.in",
                            phone: "+91 9421995010",
                            desc: "With over 30 years of experience in administration and academics...",
                            link: "/governance/registrar",
                            imageSrc: "/assets/registrar.jpg",
                        },
                    ].map((person) => (
                        <Card key={person.id} id={person.id} className="shadow-lg">
                            <CardHeader className="bg-[#002147] text-white p-4 rounded-t-lg">
                                <CardTitle>{person.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left  space-x-6">
                                <div>
                                    <img
                                        src={person.imageSrc}
                                        alt={person.name}
                                        className="w-24 h-24 object-cover m-auto p-auto shadow-lg"
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <p className="font-bold">{person.name}</p>
                                    <p>{person.position}</p>
                                    <p>
                                        Email:{" "}
                                        <a href={`mailto:${person.email}`} className="text-blue-600 hover:underline">
                                            {person.email}
                                        </a>
                                    </p>
                                    {person.phone && (
                                        <p>
                                            Contact:{" "}
                                            <a href={`tel:${person.phone}`} className="text-blue-600 hover:underline">
                                                {person.phone}
                                            </a>
                                        </p>
                                    )}
                                    <p className="mt-4">{person.desc}</p>
                                    <p className="text-[#E87722] cursor-pointer mt-4">
                                        <a href={person.link}>More about {person.title}</a>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {/* Staff Directory */}
                    <Card id="staff-directory" className="shadow-lg">
                        <CardHeader className="bg-[#002147] text-white p-4 rounded-t-lg">
                            <CardTitle>Staff Directory</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-center">
                            <p>IIIT Nagpur is supported by a dedicated administrative staff that ensures smooth operations across various departments.</p>
                            <p className="text-[#E87722] cursor-pointer mt-4">
                                <a href="/staff">View Full Staff Directory</a>
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Administration;

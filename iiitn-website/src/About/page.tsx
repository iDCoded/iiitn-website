import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "../components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Library, Dumbbell, Monitor, Cpu, Microscope, Satellite } from "lucide-react";

export default function AboutUs() {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            {/* Hero Section */}
            <div className="relative w-full text-white text-center py-16 shadow-md bg-[#002147]">
                <h1 className="text-5xl font-extrabold tracking-wide">About IIIT Nagpur</h1>
                <p className="text-lg mt-2 opacity-90">An Institution of National Importance</p>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">

                {/* Act (PPP) & Statute */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InfoCard
                        title="Act (PPP)"
                        content="IIIT Nagpur is one of the institutes established under the Indian Institute of Information Technology (Public-Private Partnership) Act, 2017."
                    />
                    <InfoCard
                        title="Statute"
                        content="IIIT Nagpur is governed by the Statutes formulated by the Government of India. These were officially established in 2017."
                    />
                </div>

                {/* Institute Profile */}
                <InfoCard
                    title="Institute Profile"
                    content="IIIT Nagpur is one of the 20 IIITs set up under the Public-Private Partnership Scheme by the Ministry of Education. Declared an 'Institution of National Importance' in 2017, it now operates from its permanent campus in Butibori, Nagpur."
                />

                {/* Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InfoCard
                        title="Our Vision"
                        content="IIIT Nagpur aspires to be a leader in research and education in Information Technology, focusing on global standards and innovation."
                    />
                    <InfoCard
                        title="Our Mission"
                        content="To conduct socially relevant research, drive innovation, and foster entrepreneurship with sustainability as a core value."
                    />
                </div>

                {/* Facilities */}
                <Card className="border border-gray-200 rounded-lg shadow-md">
                    <CardHeader className="bg-gray-100 p-5 rounded-t-lg border-b">
                        <CardTitle className="text-[#002147]">Facilities</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                        {[
                            { icon: Library, label: "Library" },
                            { icon: Dumbbell, label: "Gym" },
                            { icon: Monitor, label: "Computer Labs" },
                            { icon: Cpu, label: "Microprocessor Lab" },
                            { icon: Microscope, label: "Nano SciTech Lab" },
                            { icon: Satellite, label: "Control System Lab" },
                        ].map(({ icon: Icon, label }, index) => (
                            <div key={index} className="flex flex-col items-center space-y-2">
                                <Icon className="h-10 w-10 text-[#E87722]" />
                                <p className="text-gray-800 font-semibold">{label}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Annual Report */}
                <InfoCard
                    title="Annual Report"
                    content="IIIT Nagpur publishes an annual report detailing academic progress, research contributions, and financial statements."
                />

                {/* MoUs Section */}
                <Card className="border border-gray-200 rounded-lg shadow-md">
                    <CardHeader className="bg-gray-100 p-5 rounded-t-lg border-b">
                        <CardTitle className="text-[#002147]">Memorandums of Understanding (MoUs)</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <Accordion type="single" collapsible>
                            {[
                                { id: "mou1", title: "MoU with Swargiya Dadasaheb Kalmegh Smruti Dental College", date: "28th June 2022" },
                                { id: "mou2", title: "MoU with Central India Institute of Medical Sciences (CIIMS)", date: "5th January 2022" },
                                { id: "mou3", title: "MoU with E-Spin Nanotech Pvt Ltd., IIT Kanpur", date: "27th January 2021" },
                                { id: "mou4", title: "MoU with AIIMS, Nagpur", date: "Research collaboration in 2020" },
                            ].map(({ id, title, date }) => (
                                <AccordionItem key={id} value={id} className="border-b border-gray-200">
                                    <AccordionTrigger className="py-3 text-lg font-semibold hover:text-[#E87722] transition duration-200">
                                        {title}
                                    </AccordionTrigger>
                                    <AccordionContent className="p-4 text-gray-700">
                                        Signed on {date}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

/* Reusable Info Card Component */
interface InfoCardProps {
    title: string;
    content: string;
}

const InfoCard = ({ title, content }: InfoCardProps) => (
    <Card className="border border-gray-200 rounded-lg shadow-md transition hover:shadow-lg">
        <CardHeader className="bg-[#002147] p-5 rounded-t-lg border-b">
            <CardTitle className="text-[#fff]">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
            <p className="text-gray-700">{content}</p>
        </CardContent>
    </Card>
);

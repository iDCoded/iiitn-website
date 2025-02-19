import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "../components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Library, Dumbbell, Monitor, Cpu, Microscope, Satellite } from "lucide-react"; // Replace emojis with modern icons

export default function AboutUs() {
    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen">
            {/* Hero Section */}
            <div className="relative w-full text-white text-center py-14 shadow-lg bg-gradient-to-r from-[#002147] via-[#002C5F] to-[#002147]">
                <h1 className="text-5xl font-extrabold tracking-wide">About IIIT Nagpur</h1>
                <p className="text-lg opacity-80 mt-1">An Institution of National Importance</p>
            </div>

            {/* Content Sections */}
            <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">

                {/* Act (PPP) */}
                <InfoCard
                    title="Act (PPP)"
                    content="The Indian Institute of Information Technology (IIIT), Nagpur is one of the IIITs under the Indian Institute of Information Technology (Public-Private Partnership) Act, 2017."
                />

                {/* Statute */}
                <InfoCard
                    title="Statute"
                    content="IIIT Nagpur is governed by the Statutes formulated by the Government of India. These Statutes may be called the Statutes of the Indian Institute of Information Technology, Nagpur, 2017."
                />

                {/* Institute Profile */}
                <InfoCard
                    title="Institute Profile"
                    content="IIIT Nagpur is one of the 20 IIITs established under the Public-Private Partnership Scheme by the Ministry of Education. It was declared an 'Institution of National Importance' in 2017 and shifted to its permanent campus in Butibori, Nagpur."
                />

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-6">
                    <InfoCard
                        title="Institute Vision"
                        content="IIIT Nagpur aspires to be a leading research institution in Information Technology and related fields, imparting futuristic education of global standards."
                    />
                    <InfoCard
                        title="Institute Mission"
                        content="IIIT Nagpur is committed to conducting socially relevant research and fostering innovation with a focus on entrepreneurship and environmental sustainability."
                    />
                </div>

                {/* Facilities Section */}
                <Card className="border border-gray-200 rounded-lg">
                    <CardHeader className="bg-[#E87722] text-white p-4 rounded-t-lg">
                        <CardTitle>Facilities</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                        {[
                            { icon: Library, label: "Library" },
                            { icon: Dumbbell, label: "Gym" },
                            { icon: Monitor, label: "Computer Labs" },
                            { icon: Cpu, label: "Microprocessor Lab" },
                            { icon: Microscope, label: "Nano SciTech Lab" },
                            { icon: Satellite, label: "Control System Lab" },
                        ].map(({ icon: Icon, label }, index) => (
                            <div key={index} className="flex flex-col items-center space-y-2">
                                <Icon className="h-8 w-8 text-gray-700" />
                                <p className="text-gray-800 font-medium">{label}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Annual Report */}
                <InfoCard
                    title="Annual Report"
                    content="IIIT Nagpur publishes an annual report detailing the institute’s achievements, academic progress, research contributions, and financial statements."
                />

                {/* MoUs (Using Modern Accordion) */}
                <Card className="border border-gray-200 rounded-lg">
                    <CardHeader className="bg-[#E87722] text-white p-4 rounded-t-lg">
                        <CardTitle>Memorandums of Understanding (MoUs)</CardTitle>
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
                                    <AccordionTrigger className="py-3 text-lg font-medium hover:text-[#E87722] transition">
                                        {title}
                                    </AccordionTrigger>
                                    <AccordionContent className="p-4 text-gray-600">
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

/* Reusable Minimalist Card Component */
interface InfoCardProps {
    title: string;
    content: string;
}

const InfoCard = ({ title, content }: InfoCardProps) => (
    <Card className="border border-gray-200 rounded-lg">
        <CardHeader className="bg-[#E87722] text-white p-4 rounded-t-lg">
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
            <p className="text-gray-700">{content}</p>
        </CardContent>
    </Card>
);

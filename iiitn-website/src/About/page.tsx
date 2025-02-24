import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "../components/ui/accordion";
import { Library, Dumbbell, Monitor, Cpu, Microscope, Satellite } from "lucide-react";

export default function AboutUs() {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            {/* Hero Section */}
            <div className="relative w-full text-white text-center py-20 shadow-md bg-[#002147]">
                <h1 className="text-5xl font-extrabold tracking-wide">About IIIT Nagpur</h1>
                <p className="text-lg mt-4 opacity-90">An Institution of National Importance</p>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-8 py-16 space-y-16">
                {/* Act (PPP) & Statute */}
                <Section title="Act (PPP)" content="IIIT Nagpur is one of the institutes established under the Indian Institute of Information Technology (Public-Private Partnership) Act, 2017." />
                <Section title="Statute" content="IIIT Nagpur is governed by the Statutes formulated by the Government of India. These were officially established in 2017." />

                {/* Institute Profile */}
                <Section title="Institute Profile" content="IIIT Nagpur is one of the 20 IIITs set up under the Public-Private Partnership Scheme by the Ministry of Education. Declared an 'Institution of National Importance' in 2017, it now operates from its permanent campus in Butibori, Nagpur." />

                {/* Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <Section title="Our Vision" content="IIIT Nagpur aspires to be a leader in research and education in Information Technology, focusing on global standards and innovation." />
                    <Section title="Our Mission" content="To conduct socially relevant research, drive innovation, and foster entrepreneurship with sustainability as a core value." />
                </div>

                {/* Facilities */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-[#002147] flex items-center">
                        <span className="text-[#E87722] mr-3 text-4xl">|</span> Facilities
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-center">
                        {[
                            { icon: Library, label: "Library" },
                            { icon: Dumbbell, label: "Gym" },
                            { icon: Monitor, label: "Computer Labs" },
                            { icon: Cpu, label: "Microprocessor Lab" },
                            { icon: Microscope, label: "Nano SciTech Lab" },
                            { icon: Satellite, label: "Control System Lab" },
                        ].map(({ icon: Icon, label }, index) => (
                            <div key={index} className="flex flex-col items-center space-y-3">
                                <Icon className="h-12 w-12 text-[#E87722]" />
                                <p className="text-gray-800 font-semibold text-lg">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Annual Report */}
                <Section title="Annual Report" content="IIIT Nagpur publishes an annual report detailing academic progress, research contributions, and financial statements." />

                {/* MoUs Section */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-[#002147] flex items-center">
                        <span className="text-[#E87722] mr-3 text-4xl">|</span> Memorandums of Understanding (MoUs)
                    </h2>
                    <Accordion type="single" collapsible>
                        {[
                            { id: "mou1", title: "MoU with Swargiya Dadasaheb Kalmegh Smruti Dental College", date: "28th June 2022" },
                            { id: "mou2", title: "MoU with Central India Institute of Medical Sciences (CIIMS)", date: "5th January 2022" },
                            { id: "mou3", title: "MoU with E-Spin Nanotech Pvt Ltd., IIT Kanpur", date: "27th January 2021" },
                            { id: "mou4", title: "MoU with AIIMS, Nagpur", date: "Research collaboration in 2020" },
                        ].map(({ id, title, date }) => (
                            <AccordionItem key={id} value={id} className="border-b border-gray-200">
                                <AccordionTrigger className="py-4 text-lg font-semibold hover:text-[#E87722] transition duration-200">
                                    {title}
                                </AccordionTrigger>
                                <AccordionContent className="p-5 text-gray-700 leading-relaxed">
                                    Signed on {date}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

/* Reusable Section Component */
interface SectionProps {
    title: string;
    content: string;
}

const Section = ({ title, content }: SectionProps) => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold text-[#002147] flex items-center">
            <span className="text-[#E87722] mr-3 text-4xl">|</span> {title}
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">{content}</p>
    </div>
);

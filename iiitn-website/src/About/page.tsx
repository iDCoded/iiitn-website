import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "../components/ui/accordion";
import heroimage from "../assets/aboutBanner.jpg";

export default function AboutUs() {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            {/* Hero Section */}
            <header
                className="relative w-full h-64 flex flex-col justify-center items-center text-white text-center shadow-lg"
                style={{
                    backgroundImage: `url(${heroimage})`, // Replace with actual image path
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <h1 className="text-5xl font-extrabold tracking-wide">About IIIT Nagpur</h1>
                <p className="text-lg mt-4 opacity-90">An Institution of National Importance</p>
            </header>
            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-8 py-16 space-y-16">
                {/* Act (PPP) & Statute */}
                <Section title="Act (PPP)" content="IIIT Nagpur is one of the institutes established under the Indian Institute of Information Technology (Public-Private Partnership) Act, 2017." link="https://iiitn.ac.in/Downloads/The_IIIT-Public-Private%20Partnership-Act_2017.pdf" />
                <Section title="Statute" content="IIIT Nagpur is governed by the Statutes formulated by the Government of India. These were officially established in 2017." link="https://iiitn.ac.in/RTI/Statutes_Notification_IIITN_23_08_2024_V1.pdf" />

                {/* MoUs Section */}
                <div className="space-y-8">
                    {/* Section Title */}
                    <h2 className="text-3xl font-bold text-[#002147] flex items-center">
                        <span className="text-[#E87722] mr-3 text-4xl">|</span> Memorandums of Understanding (MoUs)
                    </h2>

                    {/* MoUs List */}
                    <Accordion type="single" collapsible>
                        {[
                            { id: "mou1", title: "MoU with Swargiya Dadasaheb Kalmegh Smruti Dental College & Hospital, Wanadongari, Nagpur", date: "28th June 2022" },
                            { id: "mou2", title: "MoU with Central India Institute of Medical Sciences (CIIMS), Nagpur", date: "5th January 2022" },
                            { id: "mou3", title: "MoU with E-Spin Nanotech Pvt Ltd., IIT Kanpur", date: "27th January 2021" },
                            { id: "mou4", title: "MoU with Datta Meghe Institute of Medical Sciences, Sawangi Meghe, Wardha", date: "13th March 2020 (Valid for Two Years)" },
                            { id: "mou5", title: "MoU with Advance Tech India Pvt. Ltd., Punjab, India", date: "23rd December 2020" },
                            { id: "mou6", title: "MoU with Military College of Telecommunication Engineering (MCTE), Madhya Pradesh", date: "2020" },
                            { id: "mou7", title: "MoU between AIIMS, Nagpur and IIIT Nagpur", date: "2020" },
                            { id: "mou8", title: "MoU with AIIMS, Nagpur for Research Collaboration", date: "2020", details: "Under this MoU, Dr. Mayur Parate, Asst. Professor, Department of Electronics & Communication Engineering, developed a device for tracking & monitoring COVID-19 patients." },
                            { id: "mou9", title: "MoU with IIM Nagpur Foundation for Entrepreneurship Development (InFED)", date: "2020", details: "This MoU explores new-age digital/technical ideas, concepts, products, and services." },
                            { id: "mou10", title: "MoU with Datta Meghe Institute of Medical Sciences, Sawangi Meghe, Wardha for Research Collaboration", date: "2020" },
                        ].map(({ id, title, date, details }) => (
                            <AccordionItem key={id} value={id} className="border-b border-gray-200">
                                <AccordionTrigger className="py-4 text-lg font-semibold hover:text-[#E87722] transition duration-200">
                                    {title}
                                </AccordionTrigger>
                                <AccordionContent className="p-5 text-gray-700 leading-relaxed">
                                    Signed on {date}
                                    {details && <p className="mt-2 text-gray-600 text-sm">{details}</p>}
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
    link: string;
}

const Section = ({ title, content, link }: SectionProps) => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold text-[#002147] flex items-center">
            <span className="text-[#E87722] mr-3 text-4xl">|</span> {title}
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">{content}</p>
        {link && (
            <a href={link} className="text-[#E87722] hover:underline">
                Learn more
            </a>
        )}
    </div>
);

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function AboutUs() {
    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#002147] text-white py-16 text-center">
                <h1 className="text-4xl font-bold">About IIIT Nagpur</h1>
                <p className="text-lg mt-2">An Institution of National Importance</p>
            </div>

            {/* Content Sections */}
            <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8">
                {/* Institute Profile */}
                <Card className="shadow-lg">
                    <CardHeader className="bg-[#E87722] text-white p-4 rounded-t-lg">
                        <CardTitle>Institute Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <p>
                            IIIT Nagpur is one of the 20 IIITs established under the Public-Private Partnership Scheme by the
                            Ministry of Education. It was declared an “Institution of National Importance” in 2017 and shifted to its
                            permanent campus in Butibori, Nagpur.
                        </p>
                    </CardContent>
                </Card>

                {/* Institute Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="shadow-lg">
                        <CardHeader className="bg-[#E87722] text-white p-4 rounded-t-lg">
                            <CardTitle>Institute Vision</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p>
                                IIIT Nagpur aspires to be a leading research institution in Information Technology and related fields,
                                imparting futuristic education of global standards.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg">
                        <CardHeader className="bg-[#E87722] text-white p-4 rounded-t-lg">
                            <CardTitle>Institute Mission</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p>
                                IIIT Nagpur is committed to conducting socially relevant research and fostering innovation with a focus on
                                entrepreneurship and environmental sustainability.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Facilities */}
                <Card className="shadow-lg">
                    <CardHeader className="bg-[#E87722] text-white p-4 rounded-t-lg">
                        <CardTitle>Facilities</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                        <p>📚 Library</p>
                        <p>💪 Gym</p>
                        <p>🖥️ Computer Labs</p>
                        <p>⚙️ Microprocessor Lab</p>
                        <p>🔬 Nano SciTech Lab</p>
                        <p>📡 Control System Lab</p>
                    </CardContent>
                </Card>

                {/* MoUs (Using Correct Accordion Implementation) */}
                <Card className="shadow-lg">
                    <CardHeader className="bg-[#E87722] text-white p-4 rounded-t-lg">
                        <CardTitle>Memorandums of Understanding (MoUs)</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="mou1">
                                <AccordionTrigger>MoU with Swargiya Dadasaheb Kalmegh Smruti Dental College</AccordionTrigger>
                                <AccordionContent>Signed on 28th June 2022</AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="mou2">
                                <AccordionTrigger>MoU with Central India Institute of Medical Sciences (CIIMS)</AccordionTrigger>
                                <AccordionContent>Signed on 5th January 2022</AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="mou3">
                                <AccordionTrigger>MoU with E-Spin Nanotech Pvt Ltd., IIT Kanpur</AccordionTrigger>
                                <AccordionContent>Signed on 27th January 2021</AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="mou4">
                                <AccordionTrigger>MoU with AIIMS, Nagpur</AccordionTrigger>
                                <AccordionContent>Signed for research collaboration in 2020</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

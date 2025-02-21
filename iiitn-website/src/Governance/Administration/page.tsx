import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

function Administration() {
    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#002147] text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Governance at IIIT Nagpur</h1>
                <p className="text-lg mt-2">Ensuring Excellence in Leadership</p>
            </div>

            {/* Main Layout with Sidebar */}
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <aside className="hidden md:block w-1/4 space-y-6 sticky top-20 self-start">
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
                    {/* Chairman */}
                    <Card id="chairman" className="shadow-lg">
                        <CardHeader className="bg-[#E87722] text-white p-4 rounded-t-lg">
                            <CardTitle>Chairman</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 flex flex-row items-center text-center">
                            <div className="w-32 h-32 bg-gray-300 mb-4 mr-4"></div> {/* Placeholder for Image */}
                            <div className="flex flex-col text-left space-y-2">
                                <p className="font-bold">Professor Prem Lal Patel</p>
                                <p>Chairman, IIIT Nagpur</p>
                                <p>Email: <a href="mailto:chairman@iiitn.ac.in" className="text-blue-600 hover:underline">director@iiitn.ac.in</a></p>
                                <p className="mt-4">Lorem ipsum</p>
                                <p className="text-blue-600 cursor-pointer mt-4"><a href="/chairman">More about the Chairman</a></p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Director */}
                    <Card id="director" className="shadow-lg">
                        <CardHeader className="bg-[#E87722] text-white p-4 rounded-t-lg">
                            <CardTitle>Director</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 flex flex-row items-center text-center">
                            <div className="w-32 h-32 bg-gray-300 mb-4 mr-4"></div> {/* Placeholder for Image */}
                            <div className="flex flex-col text-left space-y-2">
                                <p className="font-bold">Professor Prem Lal Patel</p>
                                <p>Director, IIIT Nagpur</p>
                                <p>Email: <a href="mailto:director@iiitn.ac.in" className="text-blue-600 hover:underline">director@iiitn.ac.in</a></p>
                                <p className="mt-4">Professor Prem Lal Patel took over as Director of IIIT Nagpur on 1st October 2024. He is also the Director of VNIT Nagpur...</p>
                                <p className="text-blue-600 cursor-pointer mt-4"><a href="/director">More about the Director</a></p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Registrar */}
                    <Card id="registrar" className="shadow-lg">
                        <CardHeader className="bg-[#E87722] text-white p-4 rounded-t-lg">
                            <CardTitle>Registrar</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 flex flex-row items-center text-center">
                            <div className="w-32 h-32 bg-gray-300 mb-4 mr-4"></div> {/* Placeholder for Image */}
                            <div className="flex flex-col text-left space-y-2">
                                <p className="font-bold">Shri Kailas N. Dakhale</p>
                                <p>Registrar, IIIT Nagpur</p>
                                <p>Email: <a href="mailto:registrar@iiitn.ac.in" className="text-blue-600 hover:underline">registrar@iiitn.ac.in</a></p>
                                <p>Contact No: <a href="tel:+919421995010" className="text-blue-600 hover:underline">+91 9421995010</a></p>
                                <p className="mt-4">With over 30 years of experience in administration and academics...</p>
                                <p className="text-blue-600 cursor-pointer mt-4"><a href="/registrar">More about the Registrar</a></p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Staff Directory */}
                    <Card id="staff-directory" className="shadow-lg">
                        <CardHeader className="bg-[#E87722] text-white p-4 rounded-t-lg">
                            <CardTitle>Staff Directory</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-center">
                            <p>IIIT Nagpur is supported by a dedicated administrative staff that ensures smooth operations across various departments.</p>
                            <p className="text-blue-600 cursor-pointer mt-4"><a href="/staff">View Full Staff Directory</a></p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Administration;

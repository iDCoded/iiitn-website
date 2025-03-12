import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import heroimage from "../../assets/BoGBanner.jpg";
import chairman from "../../assets/chairman.jpg"
import director from "../../assets/director.jpg"
import registrar from "../../assets/registrar.jpg"
import { useEffect, useState } from "react";

interface Person {
    id: string;
    name: string;
    position: string;
    email: string;
    phone?: string;
    content: string;
    imageSrc: string;
}

function Administration() {
    const [people, setPeople] = useState<Person[]>([
        {
            id: "chairman",
            name: "Shri Ravi Sharma",
            position: "Chairman, BoG IIIT Nagpur",
            email: "chairman@iiitn.ac.in",
            content: "An accomplished former CEO, Ravi Sharma is now a mentor & philanthropist with a mission of 'Spreading Goodness' by supporting initiatives towards...",
            imageSrc: chairman,
        },
        {
            id: "director",
            name: "Professor Prem Lal Patel",
            position: "Director, IIIT Nagpur",
            email: "director@iiitn.ac.in",
            content: "Professor Prem Lal Patel took over as Director of IIIT Nagpur on 1st October 2024. He is also the Director of VNIT Nagpur...",
            imageSrc: director,
        },
        {
            id: "registrar",
            name: "Shri Kailas N. Dakhale",
            position: "Registrar, IIIT Nagpur",
            email: "registrar@iiitn.ac.in",
            phone: "+91 9421995010",
            content: "With over 30 years of experience in administration and academics...",
            imageSrc: registrar,
        },
    ]);

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                // Fetch data from the API
                const response = await fetch(`${process.env.VITE_API_BASE_URL}/faculty/faculty_staff`);
                const data = await response.json();

                console.log(data);

                const filteredPeople = data.filter((person: any) => 
                    ["chairman", "director", "registrar"].includes(person.positions.toLowerCase())
                ).map((person: any) => ({
                    id: person.positions.toLowerCase(),
                    name: person.name,
                    position: person.positions,
                    email: person.email,
                    phone: person.phone_no,
                    content: person.content.split(" ").slice(0, 20).join(" ") + "...",
                    imageSrc: person.image_path,
                }));

                setPeople(filteredPeople);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchPeople();
    }, []);


    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            {/* Hero Section */}
            <header
                className="relative w-full h-75 flex flex-col justify-center items-center text-white text-center shadow-lg"
                style={{
                    backgroundImage: `url(${heroimage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg">Governance at IIIT Nagpur</h1>
                    <p className="text-xl font-medium mt-2">Ensuring Excellence in Leadership</p>
                </div>
            </header>


            {/* Main Layout without Sidebar for Mobile */}
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <aside className="hidden md:block md:w-1/4 space-y-6 sticky top-20 self-start">
                    <Card className="shadow-sm border border-gray-200">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-primary">
                                Quick Links
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                {["Chairman", "Director", "Registrar", "Staff Directory"].map((item, index) => (
                                    <li key={index}>
                                        <a href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="text-accent hover:underline">
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
                    {people.map((person) => (
                        <Card key={person.id} id={person.id} className="shadow-lg">
                            <CardHeader className="bg-primary text-white p-4 rounded-t-lg">
                                <CardTitle><span className="text-2xl">{person.position.split(",")[0]}</span></CardTitle>
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
                                    <p className="mt-4">{person.content}</p>
                                    <p className="text-accent cursor-pointer mt-4">
                                        <a href={`/governance/${person.id}`}>More about {person.position.split(',')[0]}</a>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {/* Staff Directory */}
                    <Card id="staff-directory" className="shadow-lg">
                        <CardHeader className="bg-primary text-white p-4 rounded-t-lg">
                            <CardTitle>Staff Directory</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-center">
                            <p>IIIT Nagpur is supported by a dedicated administrative staff that ensures smooth operations across various departments.</p>
                            <p className="text-accent cursor-pointer mt-4">
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

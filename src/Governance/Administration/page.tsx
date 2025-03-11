import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import heroimage from "../../assets/BoGBanner.jpg";
import { useNavigate } from "react-router-dom";
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
    const [people, setPeople] = useState<Person[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                // Fetch data from the API
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/faculty/faculty_staff`);
                const data = await response.json();

                console.log(data);

                const filteredPeople = data.filter((person: any) =>
                    ["chairman", "director", "registrar"].includes(person.positions.toLowerCase())
                ).map((person: any) => ({
                    id: person.f_id,
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
                                {["Chairman", "Director", "Registrar",].map((item, index) => (
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
                            <CardHeader className="bg-primary text-white p-4 ">
                                <CardTitle><span className="text-2xl">{person.position.split(",")[0]}</span></CardTitle>
                            </CardHeader>

                            <CardContent className="p-8 flex flex-col md:flex-row items-center md:items-start space-x-8">
                                {/* 🏅 Large Profile Picture (LEFT) */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={person.imageSrc}
                                        alt={person.name}
                                        className="w-48 h-48 object-cover shadow-md"
                                    />
                                </div>

                                {/* ℹ️ Person Details (RIGHT) */}
                                <div className="flex flex-col space-y-3">
                                    <p className="text-2xl font-bold text-gray-900">{person.name}</p>
                                    <p className="text-gray-600 text-lg">{person.position}</p>

                                    <div className="text-gray-700 text-md">
                                        <p>
                                            📧 Email:{" "}
                                            <a href={`mailto:${person.email}`} className="text-blue-600 font-medium hover:underline">
                                                {person.email}
                                            </a>
                                        </p>

                                        {person.phone && (
                                            <p>
                                                📞 Contact:{" "}
                                                <a href={`tel:${person.phone}`} className="text-blue-600 font-medium hover:underline">
                                                    {person.phone}
                                                </a>
                                            </p>
                                        )}
                                    </div>

                                    {/* 📜 About Content */}
                                    <p className="mt-3 text-gray-700 leading-relaxed">{person.content}</p>

                                    {/* 🔗 More Info Link */}
                                    <p className="text-accent text-lg font-medium mt-4 cursor-pointer hover:underline">
                                        <a onClick={() => navigate(`/governance/${person.id}`)}>More about {person.position.split(',')[0]}</a>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Administration;

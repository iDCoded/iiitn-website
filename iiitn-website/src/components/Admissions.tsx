import { Card, CardContent, CardTitle } from "./ui/card";
import { FaArrowRight } from "react-icons/fa";
import admission from "../assets/IIIT9.jpg";    // 🎨 Image

const programs = [
    {
        title: "B.Tech Programs",
        description: "Undergraduate engineering courses in multiple disciplines.",
        link: "/admissions/btech",
    },
    {
        title: "Postgraduate (M.Tech/MBA)",
        description: "Master's programs in engineering, management, and more.",
        link: "/admissions/pg",
    },
    {
        title: "Doctoral Programs (Ph.D.)",
        description: "Research opportunities in various cutting-edge fields.",
        link: "/admissions/pg",
    },
];

const Admissions = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-20 px-6" // 🎨 Background Image
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${admission})` }}
            ></div>
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-[#002147] opacity-50"></div>

            <div className="relative max-w-6xl mx-auto text-center text-white">
                <h2 className="text-5xl font-bold mb-6">
                    Admissions & Programs
                </h2>
                <p className="mb-8 text-gray-300">
                    Enroll in our world-class education programs.
                </p>

                {/* 🔥 Glassmorphism Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {programs.map((program, index) => (
                        <Card
                            key={index}
                            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden"
                        >
                            <CardContent className="p-6 text-center">
                                <CardTitle className="text-lg font-bold text-white">{program.title}</CardTitle>
                                <p className="mt-2 text-gray-200">{program.description}</p>

                                {/* ✅ Learn More Button */}
                                <a href={program.link}>
                                    <div className="mt-4 flex items-center justify-center text-[#E87722] font-semibold cursor-pointer hover:underline group">
                                        <span>Learn More</span>
                                        <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Admissions;

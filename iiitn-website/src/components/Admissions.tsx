import { Card, CardContent, CardTitle } from "./ui/card";
import { FaArrowRight } from "react-icons/fa";
import admission from "../assets/IIIT9.jpg"; // 🎨 Background Image

const programs = [
    {
        title: "B.Tech Programs",
        description: "Undergraduate engineering courses in multiple disciplines.",
        link: "/admissions/btech",
    },
    {
        title: "Postgraduate (M.Tech/MBA)",
        description: "Master's programs in engineering, management, and more.",
        link: "https://iiitn.ac.in/page/postgraduate/41/",
    },
    {
        title: "Doctoral Programs (Ph.D.)",
        description: "Research opportunities in various cutting-edge fields.",
        link: "https://iiitn.ac.in/page/postgraduate/41/",
    },
];

const Admissions = () => {
    return (
        <section className="relative py-20 px-6 flex flex-col items-center">
            {/* Background with Glassmorphism Effect */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${admission})` }}
            ></div>
            <div className="absolute inset-0 bg-primary/30 backdrop-blur-lg border border-white/20"></div>

            {/* Content */}
            <div className="relative max-w-6xl text-left text-center">
                <h2 className="text-4xl font-bold text-white drop-shadow-lg tracking-wide">
                    <span className="text-accent">| </span>Admissions & Programs
                </h2>
                <p className="mt-4 text-gray-200 text-lg">
                    Enroll in our world-class education programs.
                </p>

                {/* Cards - Hover Effects Added! */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {programs.map((program, index) => (
                        <Card
                            key={index}
                            className="relative overflow-hidden bg-white shadow-lg rounded-lg border border-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-[1.05] hover:shadow-2xl"
                        >
                            {/* Hover Overlay Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>

                            <CardContent className="p-6 text-center relative z-10">
                                <CardTitle className="text-lg font-bold text-primary transition-colors duration-300 group-hover:text-white">
                                    {program.title}
                                </CardTitle>
                                <p className="mt-2 text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                                    {program.description}
                                </p>

                                {/* Learn More Button */}
                                <a href={program.link}>
                                    <div className="mt-4 flex items-center justify-center text-accent font-semibold cursor-pointer group-hover:text-white transition-colors duration-300">
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

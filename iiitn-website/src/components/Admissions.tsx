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
        <section className="relative py-20 px-6 flex flex-col items-center">
            {/* Background with Glassmorphism Effect */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${admission})` }}
            ></div>
            <div className="absolute inset-0 bg-[#002147]/30 backdrop-blur-lg border border-white/20"></div>

            {/* Content */}
            <div className="relative max-w-6xl text-left">
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                    <span className="text-[#E87722]">| </span>Admissions & Programs
                </h2>
                <p className="mt-4 text-gray-200 text-lg">
                    Enroll in our world-class education programs.
                </p>

                {/* Cards - Now in White! */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {programs.map((program, index) => (
                        <Card
                            key={index}
                            className="bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl transition-all"
                        >
                            <CardContent className="p-6 text-center">
                                <CardTitle className="text-lg font-bold text-[#002147]">{program.title}</CardTitle>
                                <p className="mt-2 text-gray-600">{program.description}</p>

                                {/* Learn More Button */}
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

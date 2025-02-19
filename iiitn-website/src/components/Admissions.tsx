import { Card, CardContent, CardTitle } from "./ui/card";
import { FaArrowRight } from "react-icons/fa"; // ✅ Correct icon

const programs = [
    {
        title: "B.Tech Programs",
        description: "Undergraduate engineering courses in multiple disciplines.",
        image: "/images/btech.jpg",
    },
    {
        title: "Postgraduate (M.Tech/MBA)",
        description: "Master's programs in engineering, management, and more.",
        image: "/images/pg.jpg",
    },
    {
        title: "Doctoral Programs (Ph.D.)",
        description: "Research opportunities in various cutting-edge fields.",
        image: "/images/phd.jpg",
    },
];

const Admissions = () => {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-left mb-6 text-[#002147]">
                    <span className="text-[#E87722]">|</span> Admissions & Programs
                </h2>
                <p className="text-left text-gray-600 mb-8">
                    Enroll in our world-class education programs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {programs.map((program, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-xl transition-all rounded-lg border border-gray-200">
                            <img src={program.image} alt={program.title} className="w-full h-48 object-cover rounded-t-lg" />
                            <CardContent className="p-4 text-center">
                                <CardTitle className="text-lg font-bold text-[#002147]">{program.title}</CardTitle>
                                <p className="text-gray-600 mt-2">{program.description}</p>
                                
                                {/* ✅ Learn More text with correct arrow icon */}
                                <div className="mt-4 flex items-center justify-center text-[#E87722] font-semibold cursor-pointer hover:underline group">
                                    <span>Learn More</span> 
                                    <FaArrowRight className="ml-2 transform rotate-315 group-hover:rotate-360 transition-transform duration-300" /> {/* ✅ Fixed icon */}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <button className="px-6 py-3 bg-[#E87722] text-white font-semibold rounded-lg hover:bg-[#cc5f1a] transition">
                        Apply Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Admissions;

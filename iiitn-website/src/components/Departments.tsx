import { Card, CardContent, CardTitle } from "./ui/card";
import cse from "../assets/cse.jpeg";
import ece from "../assets/ece.jpeg";
// import basic from "../assets/basic.jpeg";

const departments = [
    {
        title: "Computer Science",
        image: cse,
        link: "/departments/cse",
    },
    {
        title: "Electronics & Communication",
        image: ece,
        link: "/departments/ece",
    },
    {
        title: "Basic Sciences",
        image: "basic",
        link: "/departments/basic_science",
    },
];

const Departments = () => {
    return (
        <section className="py-16 px-6 bg-white">
            {/* Section Heading */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-left mb-6">
                    <span className="text-[#E87722] text-4xl">|</span> Departments
                </h2>
            </div>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {departments.map((dept, index) => (
                    <a href={dept.link} key={index} className="group relative">
                        <Card className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg">
                            {/* Image with Hover Effect */}
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src={dept.image}
                                    alt={dept.title}
                                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-all duration-500"
                                />
                                {/* Overlay with View More */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 flex items-center justify-center transition-all duration-500">
                                    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        View More →
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <CardContent className="p-5 text-center">
                                <CardTitle className="text-lg font-bold text-[#002147]">
                                    {dept.title}
                                </CardTitle>
                            </CardContent>
                        </Card>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Departments;

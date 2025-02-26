import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom"; 
import cse from "../assets/cse.jpeg";
import ece from "../assets/ece.jpeg";
import basic from "../assets/basic.jpeg";

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
        image: basic,
        link: "/departments/basic_science",
    },
];

const Departments = () => {
    return (
        <section className="py-16 px-6 bg-gray-50">
            {/* Section Heading */}
            <div className="max-w-6xl mx-auto text-left">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-accent text-4xl">|</span> Research & Innovation
                </h2>
                
                <p className="text-gray-600 text-lg">
                    Explore our departments fostering cutting-edge research and innovation.
                </p>
            </div>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
                {departments.map((dept, index) => (
                    <Link to={dept.link} key={index} className="group relative">
                        <Card className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border border-gray-200 hover:border-primary">
                            {/* Image with Hover Effect */}
                            <div className="relative overflow-hidden rounded-t-xl">
                                <img
                                    src={dept.image}
                                    alt={dept.title}
                                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-all duration-500"
                                />
                                {/* Overlay with View More */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/60 group-hover:backdrop-blur-sm flex items-center justify-center transition-all duration-500">
                                    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        View More →
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <CardContent className="p-6 text-center">
                                <CardTitle className="text-lg font-bold text-primary">
                                    {dept.title}
                                </CardTitle>
                                <p className="text-gray-500 mt-2">
                                    Discover the research and programs offered in {dept.title}.
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            {/* View More Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
                <Button asChild className="px-6 py-3 text-lg font-semibold bg-primary hover:bg-primary-dark transition-all duration-300">
                    <Link to="/research/projects">View Projects</Link>
                </Button>
                <Button asChild className="px-6 py-3 text-lg font-semibold bg-secondary hover:bg-secondary-dark transition-all duration-300">
                    <Link to="/ressearch/publications">View Publications</Link>
                </Button>
            </div>
        </section>
    );
};

export default Departments;

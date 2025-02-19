import { Card, CardContent, CardTitle } from "./ui/card";

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
            {/* Section Heading */}
            <h2 className="text-3xl font-bold text-center mb-6">
                <span className="text-accent">|</span> Admissions & Programs
            </h2>
            <p className="text-center text-gray-600 mb-8">
                Enroll in our world-class education programs.
            </p>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {programs.map((program, index) => (
                    <Card key={index} className="shadow-lg hover:shadow-2xl transition duration-300">
                        <img src={program.image} alt={program.title} className="w-full h-48 object-cover rounded-t-lg" />
                        <CardContent className="p-4 text-center">
                            <CardTitle className="text-lg font-bold">{program.title}</CardTitle>
                            <p className="text-gray-600 mt-2">{program.description}</p>
                            <button className="mt-4 px-4 py-2 bg-accent text-white font-semibold rounded-lg">
                                Learn More
                            </button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Apply Now Button */}
            <div className="mt-10 flex justify-center">
                <button className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-80 transition">
                    Apply Now
                </button>
            </div>
        </section>
    );
};

export default Admissions;

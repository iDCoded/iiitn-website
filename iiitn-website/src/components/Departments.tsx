import { Card, CardContent, CardTitle } from "./ui/card";

const departments = [
    {
        title: "Computer Science",
        image: "/images/cse.jpg",
    },
    {
        title: "Electronics & Communication",
        image: "/images/ece.jpg",
    },
    {
        title: "Basic Sciences",
        image: "/images/basic-sciences.jpg",
    },
];

const Departments = () => {
    return (
        <section className="py-16 px-6 bg-white">
            {/* Section Heading */}
            <h2 className="text-3xl font-bold text-center mb-6">
                <span className="text-accent">|</span> Departments
            </h2>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {departments.map((dept, index) => (
                    <Card
                        key={index}
                        className="relative overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 rounded-lg group"
                    >
                        {/* Image with Hover Effect */}
                        <div className="overflow-hidden rounded-t-lg">
                            <img
                                src={dept.image}
                                alt={dept.title}
                                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
                            />
                        </div>

                        {/* Content */}
                        <CardContent className="p-4 text-center">
                            <CardTitle className="text-lg font-bold">{dept.title}</CardTitle>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Departments;

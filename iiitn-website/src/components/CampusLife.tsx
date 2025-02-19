import { Card, CardContent, CardTitle } from "./ui/card";
import { useNavigate } from "react-router-dom";

const campusLifeItems = [
    {
        title: "Clubs",
        description: "Explore various student clubs that foster creativity, innovation, and leadership.",
        image: "/images/clubs.jpg",
    },
    {
        title: "College Festivals",
        description: "Experience the vibrant culture of IIIT Nagpur through exciting festivals and events.",
        image: "/images/festivals.jpg",
    },
    {
        title: "Sports",
        description: "Stay active with a variety of sports activities and competitions.",
        image: "/images/sports.jpg",
    },
    {
        title: "Amenities",
        description: "Modern facilities and amenities to support student life and learning.",
        image: "/images/amenities.jpg",
    },
];

const CampusLife = () => {
    const navigate = useNavigate();

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-left mb-6 text-[#002147]">
                    <span className="text-[#E87722]">|</span> Campus Life
                </h2>
                <p className="text-left text-gray-600 mb-8">
                    Discover the vibrant student life at IIIT Nagpur.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {campusLifeItems.map((item, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-xl transition-all rounded-lg border border-gray-200">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
                            <CardContent className="p-4 text-center">
                                <CardTitle className="text-lg font-bold text-[#002147]">{item.title}</CardTitle>
                                <p className="text-gray-600 mt-2">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <button
                        onClick={() => navigate("/campus-life")}
                        className="px-6 py-3 bg-[#E87722] text-white font-semibold hover:bg-[#cc5f1a] transition"
                    >
                        More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CampusLife;

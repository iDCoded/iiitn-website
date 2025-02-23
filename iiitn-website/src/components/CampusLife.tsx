import { useNavigate } from "react-router-dom";
import img1 from "../assets/IIIT22.jpg";
import img2 from "../assets/IIIT26.jpg";
import img3 from "../assets/IIIT21(1).jpg";
import img4 from "../assets/IIIT17.jpg";
import img5 from "../assets/IIIT12.jpg";

const campusLifeImages = [
    { src: img1, title: "Campus", span: "col-span-2 row-span-1" },
    { src: img2, title: "College Festivals", span: "col-span-1 row-span-2" },
    { src: img3, title: "Sports", span: "col-span-1 row-span-1" },
    { src: img4, title: "Amenities", span: "col-span-1 row-span-1" },
    { src: img5, title: "Campus Life", span: "col-span-2 row-span-1" },
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

                {/* Bento Grid Layout (3+2 Images) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {campusLifeImages.slice(0, 3).map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-48 sm:h-64 md:h-48 object-cover transition-transform hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-lg font-semibold">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {campusLifeImages.slice(3).map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-48 sm:h-64 md:h-48 object-cover transition-transform hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-lg font-semibold">
                                {item.title}
                            </div>
                        </div>
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

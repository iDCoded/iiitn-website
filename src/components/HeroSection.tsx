import hero from "../assets/IIIT22.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
    const [isEnglish, setIsEnglish] = useState(true);

    useEffect(() => {
        const toggleLanguage = () => {
            setTimeout(() => {
                setIsEnglish(true);
                setTimeout(() => {
                    setIsEnglish(false);
                    setTimeout(() => {
                        setIsEnglish(true);
                    }, 5000);
                }, 5000);
            }, 5000);
        };

        toggleLanguage();
    }, []);

    return (
        <section className="relative h-[85vh] w-full flex flex-col justify-center items-center text-center px-4 md:px-6 overflow-hidden">
            {/* 📌 Background Image with Overlay */}
            <div className="fixed inset-0 z-[-1] top-[6vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${hero})` }}
                />
                {/* 🔥 Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* 🎯 Hero Content */}
            <div className="fixed z-[-1] w-full px-4 md:px-6">
                <div className="text-center">
                    <p className="font-extrabold text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl">
                        {isEnglish
                            ? "Indian Institute of Information Technology Nagpur"
                            : "भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर"}
                    </p>
                    <p className="font-light text-xs sm:text-sm md:text-base lg:text-2xl text-white mt-2">
                        An Institution of National Importance
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

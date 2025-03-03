import hero from "../assets/IIIT22.jpg";
import Announcements from "./Announcements";

const HeroSection = () => {
    return (
        <section className="relative h-[85vh] w-full flex flex-col justify-center items-center text-center px-4 md:px-6 overflow-hidden">
            {/* Fixed Background Image */}
            <div
                className="fixed inset-0 bg-cover bg-center bg-no-repeat z-[-1] top-[8vh]"
                style={{ backgroundImage: `url(${hero})` }}
            />

            {/* Enhanced Text for Visibility */}
            <div className="absolute top-[30%] text-white drop-shadow-lg">
                <p className="font-extrabold text-5xl lg:text-6xl">
                    Indian Institute of Information Technology Nagpur
                </p>
                <p className="font-medium text-xl lg:text-2xl mt-2">
                    An Institution of National Importance
                </p>
            </div>

            {/* Hero Content (Optional) */}
            <div className="relative z-10">
                {/* Add content if needed */}
            </div>

            {/* 📢 Announcements - Fixed at the bottom of the screen */}
            <div className="absolute bottom-0 left-0 w-full">
                <Announcements />
            </div>
        </section>
    );
};

export default HeroSection;

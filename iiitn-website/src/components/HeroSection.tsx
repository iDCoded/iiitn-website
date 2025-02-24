import hero from "../assets/hero.jpeg";
import Announcements from "./Announcements";

const HeroSection = () => {
    return (
        <section className="relative h-[85vh] w-full flex flex-col justify-center items-center text-center px-4 md:px-6 overflow-hidden">
            {/* Fixed Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${hero})` }}
            />

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

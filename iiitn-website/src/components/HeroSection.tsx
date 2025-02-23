import hero from "../assets/hero.jpeg";

const HeroSection = () => {
    return (
        <section className="relative h-[90vh] w-full flex flex-col justify-center items-center text-center px-4 md:px-6 overflow-hidden">
            {/* Fixed Background Image */}
            <div
                className="fixed top-[6vh] inset-0 bg-cover bg-center bg-no-repeat z-[-1]"
                style={{ backgroundImage: `url(${hero})` }}
            />
        </section>
    );
};

export default HeroSection;

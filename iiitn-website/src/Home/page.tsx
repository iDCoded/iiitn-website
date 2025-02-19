import HeroSection from "../components/HeroSection";
import NewsUpdates from "../components/NewsUpdates";
import Departments from "../components/Departments";
import UpcomingEvents from "../components/UpcomingEvents";
import Admissions from "../components/Admissions";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        <>
            <HeroSection />
            <NewsUpdates />
            <Departments />
            <UpcomingEvents />
            <Admissions />
            <Stats />
            <Testimonials />
        </>
    );
};

export default Home;

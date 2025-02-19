import HeroSection from "../components/HeroSection";
import NewsUpdates from "../components/NewsUpdates";
import Departments from "../components/Departments";
import UpcomingEvents from "../components/UpcomingEvents";
import Admissions from "../components/Admissions";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import CampusLife from "../components/CampusLife";

const Home = () => {
    return (
        <>
            <HeroSection />
            <NewsUpdates />
            <CampusLife/>
            <Departments />
            <UpcomingEvents />
            <Admissions />
            <Stats />
            <Testimonials />
            <Footer />
        </>
    );
};

export default Home;

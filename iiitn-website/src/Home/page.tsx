import HeroSection from "../components/HeroSection";
import NewsUpdates from "../components/NewsUpdates";
import ResearchInnovation from "../components/ResearchInnovation";
import UpcomingEvents from "../components/UpcomingEvents";
import Admissions from "../components/Admissions";
import Stats from "../components/Stats";
import CampusLife from "../components/CampusLife";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        <>
        
            <HeroSection />      
            <NewsUpdates />       {/* 📰 Latest News & Happenings */}
            <Admissions />        {/* 🎓 Admission Info for New Students */}
           <ResearchInnovation/>     {/* 📚 Academic Information */}
            <UpcomingEvents />    {/* 🎉 Upcoming College Events */}
            <CampusLife />        {/* 🏫 Student Activities & Lifestyle */}
            <Stats />             {/* 📊 College Achievements & Numbers */}
            <Testimonials />      {/* 💬 Social Proof & Student Experiences */}
        </>
    );
};

export default Home;

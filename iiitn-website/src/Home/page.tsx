import HeroSection from "../components/HeroSection";
import NewsUpdates from "../components/NewsUpdates";
import Departments from "../components/Departments";
import UpcomingEvents from "../components/UpcomingEvents";
import Admissions from "../components/Admissions";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import CampusLife from "../components/CampusLife";
import Announcements from "../components/Announcements";

const Home = () => {
    return (
        <>
            <HeroSection />       {/* 🔥 Captures Attention First */}
            <Announcements />     {/* 📢 Important Notices First */}
            <NewsUpdates />       {/* 📰 Latest News & Happenings */}
            <Admissions />        {/* 🎓 Admission Info for New Students */}
            <Departments />       {/* 📚 Academic Information */}
            <UpcomingEvents />    {/* 🎉 Upcoming College Events */}
            <CampusLife />        {/* 🏫 Student Activities & Lifestyle */}
            <Stats />             {/* 📊 College Achievements & Numbers */}
            <Testimonials />      {/* 💬 Social Proof & Student Experiences */}
        </>
    );
};

export default Home;

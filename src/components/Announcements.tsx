
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const announcementsData = [
    {
        id: "examschedule",
        title: "Important Notice: Exam schedule released!",
        image: "",
        description: "The final exam schedule for all branches has been released. Check the official notice for details.",
        link: "/announcements/exam-schedule",
        content: "The final exam schedule for all courses has been published. Students are advised to check their respective timetables and prepare accordingly. Ensure you follow the guidelines mentioned in the official notice.",
        date: "March 5, 2025"
    },
    {
        id: "hackathon",
        title: "IIIT Nagpur Hackathon registration open!",
        image: "",
        description: "Join the annual Hackathon and showcase your coding skills. Register now!",
        link: "/announcements/hackathon",
        content: "IIIT Nagpur is organizing its annual hackathon where participants will solve real-world problems using technology. Get ready for exciting challenges, mentorship, and amazing prizes!",
        date: "March 10, 2025"
    },
    {
        id: "placementdrive",
        title: "Placement drive for 2025 batch starts next week.",
        image: "",
        description: "Top companies are coming for recruitment. Prepare well and check the schedule.",
        link: "/announcements/placement-drive",
        content: "The placement drive for the 2025 batch will begin next week. Several top companies will be visiting the campus for recruitment. Students are encouraged to update their resumes and prepare for interviews.",
        date: "March 15, 2025"
    },
    {
        id: "alumnimeet",
        title: "Alumni Meet 2025 - Register now!",
        image: "",
        description: "Reconnect with your batchmates and network with alumni from various industries.",
        link: "/announcements/alumni-meet",
        content: "IIIT Nagpur invites all alumni to the grand Alumni Meet 2025. This is a great opportunity to reconnect, network, and relive memories with old friends and faculty members.",
        date: "March 20, 2025"
    },
    {
        id: "aiworkshop",
        title: "Workshop on AI & ML this Saturday!",
        image: "",
        description: "A special workshop on Artificial Intelligence and Machine Learning. Don't miss it!",
        link: "/announcements/ai-workshop",
        content: "Join us for an insightful workshop on Artificial Intelligence and Machine Learning, conducted by industry experts. Learn about the latest trends and advancements in AI & ML.",
        date: "March 22, 2025"
    }
];


const Announcements: React.FC = () => {
    const navigate = useNavigate();
    const [announcements, setAnnouncements] = useState<{ id: string; title: string; }[]>([]);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/announcements`);
                const data = await response.json();
                const announcementsArray = Array.isArray(data) ? data : [];
                setAnnouncements(announcementsArray.map((announcement: any) => ({
                    id: announcement.c_id,
                    title: announcement.title,
                })));
            } catch (error) {
                console.error("Error fetching announcements:", error);
                setAnnouncements(announcementsData);
            }
        };

        fetchAnnouncements();
    }, []);

    return (
        <div className="flex w-full h-[70vh] gap-4 px-6">
            {/* Left Section: Announcements (1/3rd) */}
            <div className="w-1/3 bg-primary text-white flex flex-col py-4 rounded-lg shadow-lg">
                {/* Announcement Label */}
                <div className="bg-accent text-white px-4 py-2 font-semibold text-center">
                    Announcements:
                </div>

                {/* Vertical List of Announcements */}
                <div className="flex-1 overflow-y-auto px-4">
                    {announcements.slice(0, 5).map((announcement) => (
                        <div
                            key={announcement.id}
                            onClick={() => navigate(`/announcements/${announcement.id}`)}
                            className="py-3 border-b border-gray-400 text-sm cursor-pointer hover:text-yellow-300 hover:bg-accent/50 transition-all duration-200"
                        >
                            {announcement.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Announcements;

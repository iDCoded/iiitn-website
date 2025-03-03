import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Sample announcements as fallback data

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

// Interface for Announcement
interface Announcement {
    id: string;
    title: string;
    image?: string;
    description?: string;
    link?: string;
    content?: string;
    date?: string;
}

const DetailedAnnouncement = () => {
    const { announcementid } = useParams();
    console.log(announcementid);
    const navigate = useNavigate();
    const [announcement, setAnnouncement] = useState<Announcement | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchAnnouncement = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:5000/announcements/${announcementid}`);
                if (!response.ok) throw new Error("Failed to fetch announcement");

                const data = await response.json();
                let imageUrl = data.media_img_path ? `http://localhost:5000/media/${data.media_img_path}` : "";

                setAnnouncement({
                    id: data.id || "",
                    title: data.title || "No Title Available",
                    image: imageUrl || "", // No fallback image
                    description: data.description || "",
                    link: data.link || "#",
                    content: data.content || "",
                    date: data.date || "Unknown Date"
                });
            } catch (error) {
                console.error("Error fetching announcement:", error);
                setAnnouncement(announcementsData.find((a) => a.id === announcementid) || null);
            } finally {
                setLoading(false);
            }
        };

        fetchAnnouncement();
    }, [announcementid]);

    // Show loading state
    if (loading) {
        return <div className="text-center text-xl mt-10">Loading announcement... ⏳</div>;
    }

    // If announcement is not found
    if (!announcement) {
        return <div className="text-center text-xl mt-10">Announcement Not Found 😢</div>;
    }

    return (
        <section className="max-w-4xl mx-auto py-10 px-6">
            <h1 className="text-3xl font-bold text-primary">{announcement.title}</h1>
            {announcement.date && <p className="text-gray-600 mt-2 text-lg">{announcement.date}</p>}

            {/* Image (only if available) */}
            {announcement.image && (
                <div className="mt-6">
                    <img
                        src={announcement.image}
                        alt={announcement.title}
                        className="w-full h-96 object-cover rounded-lg shadow-md"
                    />
                </div>
            )}

            {announcement.description && <p className="text-gray-600 mt-4 text-lg">{announcement.description}</p>}
            {announcement.content && <div className="mt-6 text-gray-800 text-lg">{announcement.content}</div>}

            {/* Back Button */}
            <div className="mt-8">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-200 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300"
                >
                    ← Go Back
                </button>
            </div>
        </section>
    );
};

export default DetailedAnnouncement;

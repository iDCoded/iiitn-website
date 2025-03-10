
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";




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
           
            }
        };

        fetchAnnouncements();
    }, []);

    return (
        <div className="bg-white text-black flex flex-col py-4 shadow-lg w-[90%] h-full ">
        {/* Announcement Label */}
      
        {/* Vertical List of Announcements */}
        <div className="flex-1 overflow-y-auto px-4">
            {announcements.slice(0,7).map((announcement) => (
               <div
               key={announcement.id}
               onClick={() => navigate(`/announcements/${announcement.id}`)}
               className="py-3 border-b border-gray-400 text-md cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:font-semibold"
           >
               {announcement.title}
           </div>
           
            ))}
        </div>
    </div>
    
    );
};

export default Announcements;

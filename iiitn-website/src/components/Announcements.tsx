import React, { useState, useEffect } from "react";

const Announcements: React.FC = () => {
    const [announcements, setAnnouncements] = useState<string[]>([]);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            // Replace with actual API call
            const newAnnouncements = await new Promise<string[]>(resolve =>
                setTimeout(() => resolve([
                    "Important Notice: Exam schedule released!",
                    "IIIT Nagpur Hackathon registration open!",
                    "Placement drive for 2025 batch starts next week.",
                    "Alumni Meet 2025 - Register now!",
                    "New research paper published by CSE Dept.",
                    "Workshop on AI & ML this Saturday!",
                    "Library will remain open 24x7 during exams.",
                    "Hostel fees payment deadline extended.",
                ]), 1000)
            );
            setAnnouncements(newAnnouncements);
        };

        fetchAnnouncements();
    }, []);

    return (
        <div className="relative w-full overflow-hidden bg-primary text-white flex items-center h-12">
            {/* Announcement Label */}
            <div className="bg-accent text-white px-4 py-2 font-semibold flex-shrink-0">
                Announcements:
            </div>

            {/* Scrolling Marquee */}
            <a href="/announcements">
            <div className="marquee-container flex items-center overflow-hidden">
                <div className="marquee-content flex whitespace-nowrap">
                    {announcements.length > 0 && (
                        <>
                            {/* Duplicate the list for seamless looping */}
                            {[...announcements, ...announcements].map((announcement, index) => (
                                <span key={index} className="px-6 border-r border-gray-400 text-sm">
                                    {announcement}
                                </span>
                            ))}
                        </>
                    )}
                </div>
            </div>
            </a>

            {/* Marquee Styling */}
            <style>{`
                .marquee-container {
                    flex: 1;
                    min-width: 0;
                    overflow: hidden;
                    position: relative;
                }
                .marquee-content {
                    display: flex;
                    animation: marquee 30s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-container:hover .marquee-content {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default Announcements;

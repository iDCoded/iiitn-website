import React, { useState, useEffect } from 'react';

const Announcements: React.FC = () => {
    const [announcements, setAnnouncements] = useState<string[]>([]);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            // Replace with your actual API call
            const newAnnouncements = await new Promise<string[]>(resolve =>
                setTimeout(() => resolve(Array(10).fill('New Announcement')), 1000)
            );
            setAnnouncements(prev => [...prev, ...newAnnouncements]);
        };

        fetchAnnouncements();
    }, []);

    return (
        <div className="w-full overflow-hidden bg-[#002147] text-white flex flex-row items-center z-10">
            <div className="bg-[#e87722] text-white p-2 text-center">
                Announcements
            </div>
            <div className="marquee z-0">
                {announcements.map((announcement, index) => (
                    <div key={index} className="inline-block w-48 border-r border-gray-400">
                        {announcement}
                    </div>
                ))}
            </div>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                .marquee {
                    display: inline-block;
                    animation: marquee 20s linear infinite;
                }
                .marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default Announcements;

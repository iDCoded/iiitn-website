import { useEffect, useState, useRef } from "react";
import { Button } from "./ui/button"
import HomeEventCard from "./HomeEventCard";
import abhivyakti from "../assets/abhivyakti.jpeg";
import tf from "../assets/tf.jpeg";
import workshop from "../assets/workshop.jpg";
import { FaArrowRight } from "react-icons/fa";

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);
    const instanceRef = useRef<{ next: () => void } | null>(null);

    // Fetch data from API
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await fetch("http://localhost:5000/card/cards/category/events");
                if (!res.ok) throw new Error("Failed to fetch events");
                const data = await res.json();
                setEvents(
                    data.map((event: any) => ({
                        id: event.c_id,
                        image: event.media_img_path ? `http://localhost:5000/${event.media_img_path}` : null,
                        title: event.title,
                        caption: event.caption,
                        content: event.content,
                        date: event.date,
                        location: event.location,
                        large: false,
                    }))
                );

                console.log(events);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 5000); // 5 sec interval

        return () => clearInterval(interval);
    }, []);

    // Default fallback events if API doesn't provide any
    const defaultEvents = [
        {
            id: "abhivyakti",
            image: abhivyakti,
            title: "Abhivyakti - The Cultural Fest of IIITN",
            caption: "The cultural fest of IIITN",
            content: "Annual gathering of students, faculty, and staff. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            date: "28 Feb",
            location: "IIIT Nagpur Campus",
            large: true,
        },
        {
            id: "tantrafiesta",
            image: tf,
            title: "Tantrafiesta",
            caption: "The technical fest of IIITN",
            content: "Annual gathering of students, faculty, and staff. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            date: "27 Aug",
            location: "IIIT Nagpur Campus",
            large: false,
        },
        {
            id: "Foundations-of-Cybersecurity",
            image: workshop, // Make sure to replace with the actual image import
            title: "Foundations of Cybersecurity - Online Certificate Programme",
            caption: "Enhance your cybersecurity skills with IIIT Nagpur",
            content: "The Department of Computer Science & Engineering at IIIT Nagpur presents an exclusive online certification program on Cybersecurity. This program is designed to equip participants with essential cybersecurity skills, covering topics such as network security, cryptography, threat detection, and ethical hacking. Gain industry-relevant knowledge from experts in the field and earn a valuable certification upon completion.",
            date: "22nd March",
            location: "Online (Hosted by IIIT Nagpur)",
            large: false,
        },
    ];

    const displayedEvents = events.length > 0 ? events : defaultEvents;

    return (
        <section className="py-16 px-8 md:px-12 lg:px-16 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
            {/* Section Wrapper */}
            <div className="max-w-6xl mx-auto flex flex-col h-full">
                {/* Section Title */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-left text-[#002147]">
                        <span className="text-4xl text-[#E87722]">|</span> Events
                    </h2>
                    <a href="/events">
                        <Button className="text-[#E87722] font-semibold hover:underline bg-transparent hover:bg-transparent">View All <FaArrowRight /></Button>
                    </a>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
                    {/* Large Event (Takes full height) */}
                    <div className="md:col-span-2 flex flex-col">
                        <HomeEventCard event={displayedEvents[0]} />
                    </div>

                    {/* Small Events (Stacked on Mobile, Side-by-Side on Desktop) */}
                    <div className="flex flex-col gap-8">
                        {displayedEvents.slice(1).map((event, index) => (
                            <a href={`/events/${event.id}`}>
                                <HomeEventCard key={index} event={event} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;

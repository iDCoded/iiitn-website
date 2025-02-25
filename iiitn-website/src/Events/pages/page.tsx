import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import abhivyakti from "../../assets/abhivyakti.jpeg";
import tf from "../../assets/tf.jpeg";
import kshitij from "../../assets/kshitij.jpeg";

// Dummy event data (Replace with API call or database query)
const eventsData = [
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
        id: "institute-gathering",
        image: kshitij,
        title: "Institute Gathering",
        caption: "Annual sports gathering of IIITN",
        content: "Annual gathering of students, faculty, and staff. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "30 Jan",
        location: "IIIT Nagpur Campus",
        large: false,
    },
];

const EventDetail = () => {
    const { eventid } = useParams();
    const [event, setEvent] = useState<{ id: string; image: string; title: string; caption: string; content: string; date: string; location: string; large: boolean; } | null>(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch("http://localhost:5000/card/cards/${eventid}");
                if (!response.ok) {
                    throw new Error("Event not found");
                }
                const data = await response.json();
                console.log(data);
                setEvent({
                    id: data.c_id,
                    image: data.media_img_path,
                    title: data.title,
                    caption: data.caption,
                    content: data.content,
                    date: data.date,
                    location: data.location,
                    large: false,
                });
                console.log(event);
            } catch (error) {
                console.error("Error fetching event:", error);
                setEvent(eventsData.find((e) => e.id === eventid) || null);
            }
        };

        fetchEvent();
    }, [eventid]);

    if (!event) {
        return <div className="text-center text-xl mt-10">Event Not Found 😢</div>;
    }

    return (
        <section className="max-w-4xl mx-auto py-10 px-6">
            <h1 className="text-3xl font-bold text-primary">{event.title}</h1>
            <p className="text-gray-600 mt-2">{event.date} • {event.location}</p>

            {/* Event Image */}
            <div className="mt-6">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                />
            </div>

            {/* Event Description */}
            <p className="mt-6 text-lg text-gray-700">{event.content}</p>

            {/* Back to Events Button */}
            <div className="mt-8">
                <a href="/events" className="text-[#E87722] font-semibold hover:underline">
                    ← Back to Events
                </a>
            </div>
        </section>
    );
};

export default EventDetail;

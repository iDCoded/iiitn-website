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
        content: "A grand cultural fest with music, dance, and fun activities.",
        date: "28 Feb",
        location: "IIIT Nagpur Campus",
        large: true,
    },
    {
        id: "tantrafiesta",
        image: tf,
        title: "Tantrafiesta",
        content: "Annual technical fest with coding competitions and workshops.",
        date: "27 Aug",
        location: "IIIT Nagpur Campus",
        large: false,
    },
    {
        id: "institute-gathering",
        image: kshitij,
        title: "Institute Gathering",
        content: "Annual gathering of students, faculty, and staff.",
        date: "30 Jan",
        location: "IIIT Nagpur Campus",
        large: false,
    },
];

const EventDetail = () => {
    const { eventid } = useParams();
    const [event, setEvent] = useState<{ id: string; image: string; title: string; content: string; date: string; location: string; large: boolean; } | null>(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/cards/${eventid}`);
                if (!response.ok) {
                    throw new Error("Event not found");
                }
                const data = await response.json();
                setEvent(data);
            } catch (error) {
                // console.error("Error fetching event:", error);
                setEvent(eventsData.find((e) => e.id === eventid) || null);
            }
        };

        fetchEvent();
        const foundEvent = eventsData.find((e) => e.id === eventid);
        setEvent(foundEvent || null);
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

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UpcomingEvents = () => {
  const [events, setEvents] = useState<any[]>([]);
  const navigate = useNavigate();

  interface Event {
    id: string;
    image: string;
    title: string;
    caption: string;
    content: string;
    date: string;
    location: string;
    large: boolean;
    preference: number;
    club: string;
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/card/cards/category/events`
        );
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        const eventList = data.map((event: any) => {
          const eventDate = new Date(event.date);
          const formattedDate = eventDate.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
          });
          return {
            id: event.c_id,
            image: event.media_img_id || "",
            title: event.title,
            caption: event.caption,
            content: event.content,
            date: formattedDate,
            location: event.location,
            preference: event.preference,
            club: event.c_sub_category,
            large: false,
          };
        });

        setEvents(
          eventList
            .sort((a: Event, b: Event) => a.preference - b.preference)
            .slice(0, 4)
        );
        console.log("Fetched events:", eventList);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8">
        <span className="text-accent">| </span>Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.slice(0, 4).map((event, index) => (
          <div onClick={() => navigate(`/events/${event.id}`)}
		  key={index} className="bg-white shadow-lg  overflow-hidden h-[60vh] hover:cursor-pointer transition duration-300 ease-in-out transform hover:translate-y-[-12px] hover:shadow-primary hover:shadow-6xl">
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[32vh] object-cover"
              />
              <div className="absolute bottom-0 left-0 transform ml-6 translate-y-1/2 bg-primary text-white text-lg font-bold w-16 h-16 flex items-center justify-center">
                {event.date}
              </div>
            </div>
            <div className="p-6 mt-6">
              <h3 className="text-2xl font-bold">{event.title}</h3>
              <p className="text-gray-600 text-sm uppercase mt-1 font-semibold">
                {event.caption}
              </p>
              <p className="text-gray-600 text-md mt-3">{event.location}</p>
              <p className="text-gray-500 text-md mt-1">
                Hosted by: <span className="font-semibold">{event.club}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="/events">
          <button className="bg-accent text-white px-6 py-2 font-semibold hover:bg-red-700 ">
            More events
          </button>
        </a>
      </div>
    </div>
  );
};

export default UpcomingEvents;

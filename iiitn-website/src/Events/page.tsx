import React from "react";

const upcomingEvents = [
  {
    title: "National Voter’s Day Celebration",
    date: "25th January 2024",
    link: "#",
  },
  {
    title: "Youth Electoral Awareness Seminar",
    date: "10th February 2024",
    link: "#",
  },
  {
    title: "Democracy and You - Panel Discussion",
    date: "15th March 2024",
    link: "#",
  },
  {
    title: "Mock Voting Session",
    date: "5th April 2024",
    link: "#",
  },
];

const pastEvents = [
  {
    title: "IIIT Nagpur Convocation Ceremony",
    date: "15th December 2023",
    link: "#",
  },
  {
    title: "AI & Machine Learning Workshop",
    date: "22nd November 2023",
    link: "#",
  },
  {
    title: "Cybersecurity Awareness Program",
    date: "5th October 2023",
    link: "#",
  },
  {
    title: "Startup & Entrepreneurship Summit",
    date: "18th September 2023",
    link: "#",
  },
];

const annualEvents = [
  {
    name: "TANTRAFIESTA",
    description: "Techfest conducted annually with exciting competitions and workshops.",
    link: "#",
  },
  {
    name: "ABHIVYAKTI",
    description: "Cultural fest celebrating music, dance, and creativity.",
    link: "#",
  },
  {
    name: "KSHITIJ",
    description: "Institute gathering and sports meet for students.",
    link: "#",
  },
];

function Events() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Events</h1>
        <p className="text-lg mt-2">Explore past and upcoming events at IIIT Nagpur.</p>
      </header>

      {/* Annual Events Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-primary mb-6">Annual Events</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {annualEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-bold text-primary">{event.name}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <a
                href={event.link}
                className="inline-block mt-4 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#001a36] transition"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6">Upcoming Events</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-bold text-primary">{event.title}</h3>
              <p className="text-gray-500 mt-1">{event.date}</p>
              <a
                href={event.link}
                className="inline-block mt-4 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#001a36] transition"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events Section */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6">Past Events</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {pastEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-bold text-primary">{event.title}</h3>
              <p className="text-gray-500 mt-1">{event.date}</p>
              <a
                href={event.link}
                className="inline-block mt-4 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;

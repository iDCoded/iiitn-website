import React from "react";

const convocationData = [
  {
    year: 2024,
    date: "March 15, 2024",
    venue: "IIIT Nagpur Auditorium",
    chiefGuest: "Dr. A.P. Sharma (Director, IIT Bombay)",
    description:
      "The convocation ceremony is a proud moment for all graduates, marking the successful completion of their academic journey.",
    highlights: [
      "🎓 Degree distribution for B.Tech, M.Tech & Ph.D. students",
      "🎤 Special address by the Chief Guest",
      "🏆 Outstanding Alumni Awards",
      "🎭 Cultural performances & student achievements showcase",
      "📹 Live streaming for online participants",
    ],
    images: ["/images/convocation1.jpg", "/images/convocation2.jpg"],
    registrationLink: "#",
    liveStreamLink: "#",
  },
  {
    year: 2023,
    date: "April 10, 2023",
    venue: "IIIT Nagpur Campus Hall",
    chiefGuest: "Prof. Ramesh Kumar (IIT Delhi)",
    description:
      "A day of celebration for graduates stepping into the future. Honoring excellence and achievements in academics & research.",
    highlights: [
      "🎓 Degree distribution for graduates",
      "🎤 Keynote speech from distinguished alumni",
      "🏆 Special research awards",
      "📸 Photography & media coverage",
    ],
    images: ["/images/convocation3.jpg", "/images/convocation4.jpg"],
    registrationLink: "#",
    liveStreamLink: "#",
  },
];

function Convocation() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-primary text-white py-16 text-center">
        <h1 className="text-5xl font-bold">🎓 Convocation at IIIT Nagpur</h1>
        <p className="text-lg mt-2 italic">"Celebrating Excellence & Inspiring the Future"</p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto mt-10 p-6">
        {/* Convocation Cards */}
        <section className="grid md:grid-cols-2 gap-8">
          {convocationData.map((convocation, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h2 className="text-3xl font-bold text-primary">{convocation.year} Convocation</h2>
                <p className="text-gray-600 mt-2">{convocation.date} | 📍 {convocation.venue}</p>
                <p className="text-gray-700 mt-4">{convocation.description}</p>
                <p className="text-gray-800 font-semibold mt-2">👨‍🏫 Chief Guest: {convocation.chiefGuest}</p>

                {/* Highlights */}
                <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                  {convocation.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-4">
                  <a
                    href={convocation.registrationLink}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
                  >
                    Register 🎟️
                  </a>
                  <a
                    href={convocation.liveStreamLink}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800 transition"
                  >
                    Watch Live 🔴
                  </a>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-2 gap-2 p-4">
                {convocation.images.map((src, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={src}
                    alt={`Convocation ${convocation.year} ${imgIndex + 1}`}
                    className="rounded-md shadow-md hover:scale-110 transition duration-300"
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Convocation;

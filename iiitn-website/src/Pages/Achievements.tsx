import React from 'react';

const achievementsData = {
  CSE: [
    {
      year: 2024,
      achievements: [
        "Secured 1st place in Smart India Hackathon 2024 🏆",
        "Published 5 research papers in top AI journals 📄",
        "Developed an AI-powered chatbot for campus queries 🤖",
      ],
    },
    {
      year: 2023,
      achievements: [
        "Winner of Google Cloud Hackathon 2023 ☁️",
        "Students placed in FAANG companies 💼",
        "Launched an open-source project with 1000+ stars on GitHub ⭐",
      ],
    },
  ],
  ECE: [
    {
      year: 2024,
      achievements: [
        "Developed an IoT-based Smart Traffic Management System 🚦",
        "Won 2nd place in the National Robotics Championship 🤖",
        "Published a research paper on 5G Communication 📡",
      ],
    },
    {
      year: 2023,
      achievements: [
        "Designed an energy-efficient VLSI circuit ⚡",
        "Secured funding for an IoT-based healthcare project 💊",
        "Interned at ISRO for satellite communication research 🚀",
      ],
    },
  ],
};

function Achievements() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-[#002147] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">IIIT Nagpur Achievements</h1>
        <p className="text-lg mt-2">Celebrating success in CSE & ECE departments</p>
      </header>

      {/* Achievements Section */}
      <main className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <div className="grid md:grid-cols-2 gap-6">
          {/* CSE Achievements */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎓 CSE Achievements</h2>
            {achievementsData.CSE.map((item) => (
              <div key={item.year} className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-700">Year {item.year}</h3>
                <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                  {item.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* ECE Achievements */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📡 ECE Achievements</h2>
            {achievementsData.ECE.map((item) => (
              <div key={item.year} className="mb-6 p-4 bg-green-50 border-l-4 border-green-600 rounded-lg">
                <h3 className="text-lg font-semibold text-green-700">Year {item.year}</h3>
                <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                  {item.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Achievements;

import React from 'react';

const pressData = [
    { title: "IIIT Nagpur Hosts AI Conference", date: "2023-10-15", link: "#" },
    { title: "New Research Lab Inaugurated", date: "2023-08-22", link: "#" },
    { title: "Collaboration with Industry Leaders", date: "2023-07-05", link: "#" },
    { title: "Students Shine in Hackathon", date: "2023-05-30", link: "#" },
    { title: "MoU Signed with Global University", date: "2023-04-18", link: "#" },
    { title: "Tech Fest 2023 Announced", date: "2023-03-10", link: "#" },
    { title: "New AI Research Published", date: "2023-02-25", link: "#" },
    { title: "IIIT Nagpur Joins Smart City Project", date: "2023-01-05", link: "#" },
    { title: "Advanced Robotics Lab Opens", date: "2022-12-20", link: "#" },
    { title: "IIIT Nagpur Placement Report Released", date: "2022-11-10", link: "#" },
    { title: "International Symposium on Cybersecurity", date: "2022-09-15", link: "#" },
    { title: "Launch of New Data Science Course", date: "2022-08-10", link: "#" },
    { title: "IIIT Nagpur Celebrates Foundation Day", date: "2022-07-01", link: "#" },
    { title: "Partnership with Global Tech Firm", date: "2022-06-05", link: "#" },
    { title: "AI-Based Healthcare Solution Developed", date: "2022-05-15", link: "#" },
    { title: "IIIT Nagpur Signs MoU with IIT Bombay", date: "2022-04-01", link: "#" },
    { title: "IIIT Nagpur Ranks Among Top Institutes", date: "2022-03-15", link: "#" },
];

// Function to sort by date and get latest 15
const getLatestPressReleases = () => {
    return pressData
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date (latest first)
        .slice(0, 15); // Get the latest 15
};

function PressRelease() {
    const latestPressReleases = getLatestPressReleases();

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header Section */}
            <div className="bg-primary text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Press Releases</h1>
                <p className="text-lg mt-2">Stay updated with the latest news and events at IIIT Nagpur.</p>
            </div>

            {/* Press Release Section */}
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestPressReleases.map((press, index) => (
                    <div key={index} className="bg-white shadow-lg p-5 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold text-gray-800">{press.title}</h2>
                        <p className="text-sm text-gray-500 mt-1">{press.date}</p>
                        <a href={press.link} className="text-accent hover:text-orange-600 font-medium mt-2 inline-block">
                            Read More →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PressRelease;

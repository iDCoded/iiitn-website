import React from "react";
import AlumniEventCard from "../components/AlumniEventCard";
import  AlumniCarousel  from "../components/AlumniCarousel";




const memories = [
	"/images/memory1.jpg",
	"/images/memory2.jpg",
	"/images/memory3.jpg",
];

const events = [
	{
		title: "Alumni Meet 2024",
		date: "August 15, 2024",
		description: "Reconnect with old friends and network with fellow alumni.",
		image: "/images/event1.jpg",
	},
	{
		title: "Career Guidance Webinar",
		date: "July 22, 2024",
		description: "Experts from various industries will guide the students.",
		image: "/images/event2.jpg",
	},
];

const pastEvents = [
	{
		title: "IIITN Alumni Reunion 2023",
		date: "December 10, 2023",
		description: "An evening filled with nostalgia and networking.",
		image: "/images/past1.jpg",
	},
	{
		title: "Tech Talk with Alumni",
		date: "September 18, 2023",
		description: "Alumni shared their insights on industry trends.",
		image: "/images/past2.jpg",
	},
];

function Alumni() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Hero Section */}
			<div className="bg-[#002147] text-white py-16 text-center">
				<h1 className="text-4xl font-bold">Alumni of IIIT Nagpur</h1>
				<p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
				<p className="mt-4">
					<a
						href="/alumni/form" 
                        target="_blank"
                        rel="noreferrer"
						className="bg-white text-[#002147] px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
					>
						Sign Up
					</a>
				</p>
			</div>

		
			<div className="w-full mx-auto mt-10 px-4 border-black border-4">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Upcoming Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 ml-24 mb-12">
                    {events.map((event, index) => (
                        <AlumniEventCard key={index} {...event} />
                    ))}
                </div>
			</div>
            <div className="w-full flex flex-col mx-auto mt-10 px-4 border-black border-4 justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Memories</h2>
                <AlumniCarousel  />			
			</div>
            <div className="w-full mx-auto mt-10 px-4 border-black border-4">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Past Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 ml-24 mb-12">
                    {pastEvents.map((event, index) => (
                        <AlumniEventCard key={index} {...event} />
                    ))}
                </div>
		
			</div>

				
			
		</div>
	);
}

export default Alumni;

import React from "react";

const contestData = [
	{
		title: "National Voters Awareness Contest",
		description:
			"An initiative by the Election Commission of India to educate and engage citizens in the electoral process through various creative competitions.",
		links: [
			{ title: "Poster 1", url: "#" },
			{ title: "Poster 2", url: "#" },
			{ title: "Poster 3", url: "#" },
			{ title: "Poster 4", url: "#" },
		],
	},
	{
		title: "Electoral Awareness Drive",
		description:
			"A nationwide campaign to spread awareness about the importance of voting and democracy among students and young voters.",
		links: [
			{ title: "Guidelines", url: "#" },
			{ title: "Participation Form", url: "#" },
			{ title: "Results", url: "#" },
			{ title: "FAQs", url: "#" },
		],
	},
];

const eventsData = [
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

function ElectoralLiteracyClub() {
	return (
		<div className="bg-gray-100 min-h-screen">
			{/* Header Section */}
			<header className="bg-primary text-white py-16 text-center">
				<h1 className="text-4xl font-bold">Electoral Literacy Club</h1>
				<p className="text-lg mt-2">
					Promoting voter awareness and democratic participation.
				</p>
			</header>

			{/* Main Content */}
			<main className="max-w-6xl mx-auto px-6 py-10 space-y-10">
				{/* About Section */}
				<section className="bg-white shadow-md rounded-lg p-8">
					<h2 className="text-3xl font-semibold text-gray-900 mb-4">
					<span className="text-accent font-bold text-4xl">| </span>About Electoral Literacy Club
					</h2>
					<p className="text-gray-700 leading-relaxed">
						The Election Commission of India is an autonomous constitutional authority responsible for administering
						election processes at national, state, and district levels. The Electoral Literacy Club aims to educate young
						voters and promote active participation in the democratic process.
					</p>
					<a
						href="#"
						className="inline-block mt-4 px-6 py-2 bg-primary text-white font-medium rounded-lg shadow hover:bg-[#001730] transition"
					>
						Learn More
					</a>
				</section>

				{/* Contest Section */}
				<section className="bg-white shadow-md rounded-lg p-8">
					<h2 className="text-3xl font-semibold text-gray-900 mb-6">
					<span className="text-accent font-bold text-4xl">| </span>Contests & Initiatives
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{contestData.map((contest, index) => (
							<div
								key={index}
								className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
							>
								<h3 className="text-xl font-bold text-gray-900">{contest.title}</h3>
								<p className="text-gray-700 mt-2">{contest.description}</p>
								<div className="mt-4 space-y-1">
									{contest.links.map((link, i) => (
										<a
											key={i}
											href={link.url}
											className="block text-primary font-medium hover:underline"
										>
											➤ {link.title}
										</a>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Events Section */}
				<section className="bg-white shadow-md rounded-lg p-8">
					<h2 className="text-3xl font-semibold text-gray-900 mb-6">
					<span className="text-4xl text-accent font-bold">| </span>Upcoming & Past Events
					</h2>
					<p className="text-gray-700 mb-6">
						Here is a list of events organized by the Electoral Literacy Club to spread awareness and encourage civic
						participation.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{eventsData.map((event, index) => (
							<div
								key={index}
								className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
							>
								<h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
								<p className="text-gray-700 mt-2">
									<span className="font-semibold">Date:</span> {event.date}
								</p>
								<a href={event.link} className="block text-primary font-medium hover:underline mt-2">
									➤ More Details
								</a>
							</div>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}

export default ElectoralLiteracyClub;

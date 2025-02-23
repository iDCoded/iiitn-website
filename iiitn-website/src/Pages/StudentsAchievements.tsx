import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const achievementsData = {
	CSE: [
		{
			year: 2024,
			achievements: [
				"🏆 Secured 1st place in Smart India Hackathon 2024",
				"📄 Published 5 research papers in top AI journals",
				"🤖 Developed an AI-powered chatbot for campus queries",
			],
		},
		{
			year: 2023,
			achievements: [
				"☁️ Winner of Google Cloud Hackathon 2023",
				"💼 Students placed in FAANG companies",
				"⭐ Launched an open-source project with 1000+ GitHub stars",
			],
		},
	],
	ECE: [
		{
			year: 2024,
			achievements: [
				"🚦 Developed an IoT-based Smart Traffic Management System",
				"🤖 Won 2nd place in the National Robotics Championship",
				"📡 Published a research paper on 5G Communication",
			],
		},
		{
			year: 2023,
			achievements: [
				"⚡ Designed an energy-efficient VLSI circuit",
				"💊 Secured funding for an IoT-based healthcare project",
				"🚀 Interned at ISRO for satellite communication research",
			],
		},
	],
};

function StudentsAchievements() {
	return (
		<div className="bg-gray-50 min-h-screen flex flex-col">
			{/* 🔹 Header Section */}
			<header className="bg-[#002147] text-white py-12 px-6 shadow-md text-left md:text-center">
				<h1 className="text-3xl md:text-4xl font-bold">IIIT Nagpur Student Achievements</h1>
				<p className="mt-2 text-gray-200 text-lg">Celebrating success in CSE & ECE departments</p>
			</header>

			{/* 📌 Main Content */}
			<main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* 🎓 CSE Achievements */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-800 mb-6"><span className="text-[#E87722] text-4xl">| </span> CSE Achievements</h2>
						{achievementsData.CSE.map((item) => (
							<Card key={item.year} className="mb-6 shadow-md border border-blue-300">
								<CardHeader className="bg-blue-50 border-b-2 border-blue-600 rounded-t-lg">
									<CardTitle className="text-lg font-semibold text-blue-700">
										Year {item.year}
									</CardTitle>
								</CardHeader>
								<CardContent className="p-6">
									<ul className="list-disc pl-6 text-gray-700 space-y-2">
										{item.achievements.map((achievement, index) => (
											<li key={index}>{achievement}</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</section>

					{/* 📡 ECE Achievements (Updated Color: Orange - #E87722) */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-800 mb-6"><span className="text-[#E87722] text-4xl">| </span> ECE Achievements</h2>
						{achievementsData.ECE.map((item) => (
							<Card key={item.year} className="mb-6 shadow-md border border-[#E87722]">
								<CardHeader className="bg-orange-50 border-b-2 border-[#E87722] rounded-t-lg">
									<CardTitle className="text-lg font-semibold text-[#E87722]">
										Year {item.year}
									</CardTitle>
								</CardHeader>
								<CardContent className="p-6">
									<ul className="list-disc pl-6 text-gray-700 space-y-2">
										{item.achievements.map((achievement, index) => (
											<li key={index}>{achievement}</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</section>
				</div>
			</main>
		</div>
	);
}

export default StudentsAchievements;


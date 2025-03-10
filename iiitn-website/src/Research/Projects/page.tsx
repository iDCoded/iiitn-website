import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroimage from "@/assets/researchBanner.jpg";
import { useLocation } from "react-router-dom";

type Project = {
	title: string;
	researcher: string;
	status: string;
};

const projectsData: Record<"cse" | "ece" | "bs", Project[]> = {
	cse: [
		{
			title: "AI-Powered Chatbots for Education",
			researcher: "Dr. ABC",
			status: "Ongoing",
		},
		{
			title: "Blockchain Security in AI Systems",
			researcher: "Dr. XYZ",
			status: "Completed",
		},
		{
			title: "Quantum Computing Algorithms",
			researcher: "Dr. PQR",
			status: "Ongoing",
		},
	],
	ece: [
		{
			title: "5G-Based IoT Solutions",
			researcher: "Dr. XYZ",
			status: "Completed",
		},
		{
			title: "Satellite Communication Enhancements",
			researcher: "Dr. MNO",
			status: "Ongoing",
		},
		{
			title: "Smart Grids & Renewable Energy",
			researcher: "Dr. ABC",
			status: "Completed",
		},
	],
	bs: [
		{
			title: "Mathematical Simulation for Climate Change",
			researcher: "Dr. PQR",
			status: "Ongoing",
		},
		{
			title: "Quantum Cryptography Algorithms",
			researcher: "Dr. Charu Goel",
			status: "Completed",
		},
		{
			title: "Astrophysics Research & Observations",
			researcher: "Dr. XYZ",
			status: "Ongoing",
		},
	],
};

const Projects = () => {
	const location = useLocation();

	const [selectedTab, setSelectedTab] = useState<"cse" | "ece" | "bs">(
		["cse", "ece", "bs"].includes(location.hash.substring(1))
			? (location.hash.substring(1) as "cse" | "ece" | "bs")
			: "cse"
	);

	return (
		<>
			<header
				className="relative w-full h-75 flex flex-col justify-center items-center text-white text-center shadow-lg z-1"
				style={{
					backgroundImage: `url(${heroimage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				{/* Overlay */}
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10">
					<h1 className="text-5xl font-extrabold drop-shadow-lg">
						Research Projects
					</h1>
					<p className="text-xl font-medium mt-2">
						Explore the Latest Research
					</p>
				</div>
			</header>
			<div className="max-w-6xl mx-auto px-6 py-10">
				{/* Heading */}
				<h1 className="text-3xl font-bold mb-6 flex items-center">
					<span className="text-accent text-4xl mr-2">|</span> Research Projects
					& Patents
				</h1>

				{/* Tabs */}
				<div className="flex gap-4 mb-6 border-b border-gray-300">
					{["cse", "ece", "bs"].map((dept) => (
						<button
							key={dept}
							className={`relative px-6 py-2 text-lg font-medium transition-all duration-300 ${
								selectedTab === dept
									? "text-accent font-bold"
									: "text-gray-500 hover:text-gray-700"
							}`}
							onClick={() => setSelectedTab(dept as "cse" | "ece" | "bs")}>
							{dept.toUpperCase()}
							{selectedTab === dept && (
								<motion.div
									layoutId="underline"
									className="absolute left-0 bottom-0 h-[3px] bg-accent w-full"
								/>
							)}
						</button>
					))}
				</div>

				{/* Projects List with Animation */}
				<motion.div
					key={selectedTab}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.3 }}
					className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projectsData[selectedTab].map((project, index) => (
						<Card key={index} className="shadow-md">
							<CardHeader>
								<CardTitle className="text-lg">{project.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600">
									Lead Researcher:{" "}
									<span className="font-medium">{project.researcher}</span>
								</p>
								<p
									className={`text-sm font-semibold ${
										project.status === "Ongoing"
											? "text-blue-600"
											: "text-green-600"
									}`}>
									Status: {project.status}
								</p>
								<a href="#" className="text-blue-500 mt-2 inline-block">
									Read More →
								</a>
							</CardContent>
						</Card>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default Projects;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroimage from "@/assets/researchBanner.jpg";
import { useLocation } from "react-router-dom";

type Project = {
	title: string;
	researcher: string;
	status: string;
};

const defaultProjectsData: Record<"cse" | "ece" | "bs", Project[]> = {
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
	const [projectsData, setProjectsData] = useState(defaultProjectsData);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/publications`
				); const data = await response.json();
				if (Object.keys(data).length > 0) {
					setProjectsData(data);
				} else {
					setProjectsData(defaultProjectsData);
				}
			} catch (error) {
				console.error("Error fetching projects:", error);
				setProjectsData(defaultProjectsData);
				setError(true);
			}
			setLoading(false);
		};
		fetchProjects();
	}, []);

	return (
		<>
			<header
				className="relative w-full h-75 flex flex-col justify-center items-center text-white text-center shadow-lg z-1"
				style={{
					backgroundImage: `url(${heroimage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
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
				<h1 className="text-3xl font-bold mb-6 flex items-center">
					<span className="text-accent text-4xl mr-2">|</span> Research Projects & Patents
				</h1>

				<div className="flex gap-4 mb-6 border-b border-gray-300">
					{["cse", "ece", "bs"].map((dept) => (
						<button
							key={dept}
							className={`relative px-6 py-2 text-lg font-medium transition-all duration-300 ${selectedTab === dept
								? "text-accent font-bold"
								: "text-gray-500 hover:text-gray-700"
								}`}
							onClick={() => setSelectedTab(dept as "cse" | "ece" | "bs")}>
							{dept.toUpperCase()}
						</button>
					))}
				</div>

				{loading ? (
					<p>Loading projects...</p>
				) : (error && projectsData[selectedTab].length < 1) ? (
					<p className="text-red-600">Failed to load projects. Using default data.</p>
				) : (
					<motion.div
						key={selectedTab}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{projectsData[selectedTab].map((project, index) => (
							<Card key={index} className="shadow-md">
								<CardHeader>
									<CardTitle className="text-lg">{project.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600">Lead Researcher: {project.researcher}</p>
									<p>Status: {project.status}</p>
								</CardContent>
							</Card>
						))}
					</motion.div>
				)}
			</div>
		</>
	);
};

export default Projects;

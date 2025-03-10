import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroimage from "@/assets/researchBanner.jpg";
import { useLocation } from "react-router-dom";

type Project = {
	title: string;
	lead_name: string;
	status: string;
	content: string;
	link: string;
	published_in: string;
};

const Projects = () => {
	const location = useLocation();
	const [selectedTab, setSelectedTab] = useState<"cse" | "ece" | "bs">(
		["cse", "ece", "bs"].includes(location.hash.substring(1))
			? (location.hash.substring(1) as "cse" | "ece" | "bs")
			: "cse"
	);
	const [projectsData, setProjectsData] = useState<Record<"cse" | "ece" | "bs", Project[]>>({ cse: [], ece: [], bs: [] });
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/publication`
				);
				const data = await response.json();
				const filteredData = data.filter((item: any) => item.type === "Project");
				const formattedData = { cse: [], ece: [], bs: [] } as Record<"cse" | "ece" | "bs", Project[]>;

				filteredData.forEach((project: any) => {
					const branchKey = project.branch_enum.toLowerCase() as "cse" | "ece" | "bs";
					if (["cse", "ece", "bs"].includes(branchKey)) {
						formattedData[branchKey].push({
							title: project.title,
							lead_name: project.lead_name,
							status: project.status,
							content: project.content,
							link: project.link,
							published_in: project.published_in,
						});
					}
				});

				setProjectsData(formattedData);
			} catch (error) {
				console.error("Error fetching projects:", error);
				setError(true);
			}
			setLoading(false);
		};
		fetchProjects();
	}, []);

	const filteredProjects = projectsData[selectedTab].filter(
		(project) =>
			project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			project.lead_name.toLowerCase().includes(searchQuery.toLowerCase())
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

				<div className="flex gap-4 mb-6 border-b border-gray-300 justify-between">
					<div>
						{["cse", "ece", "bs"].map((dept) => (
							<button
								key={dept}
								className={`relative px-6 py-2 text-lg font-medium transition-all duration-300 ${selectedTab === dept
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
					<input
						type="text"
						placeholder="Search Projects..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full md:w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
					/>
				</div>

				{loading ? (
					<p>Loading projects...</p>
				) : error ? (
					<p className="text-red-600">Failed to load publications.</p>
				) : filteredProjects.length === 0 ? (
					<p className="text-gray-500 italic">No projects found.</p>
				) : (
					<motion.div
						key={selectedTab}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{filteredProjects.map((project, index) => (
							<Card key={index} className="shadow-md">
								<CardHeader>
									<CardTitle className="text-lg">{project.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600">Lead Researcher: {project.lead_name}</p>
									<p className="text-gray-600">Status: {project.status}</p>
									<p className="text-gray-600">Published in: {project.published_in}</p>
									<p className="text-gray-600">{project.content}</p>
									{
										project.link && (
											<a href={project.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">More Info</a>
										)
									}
								</CardContent>

							</Card>
						))}
					</motion.div>
				)}
			</div>
		</>
	);
}

export default Projects;

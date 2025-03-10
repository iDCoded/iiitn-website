import { Card, CardContent, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const departments = [
	{ title: "Computer Science & Engineering", link: "/research/cse", desc: "Innovative research in AI, ML, and software systems." },
	{ title: "Electronics & Communication Engineering", link: "/research/ece", desc: "Advancements in signal processing, VLSI, and IoT." },
	{ title: "Basic Sciences", link: "/research/basic_science", desc: "Fundamental research in physics, chemistry, and mathematics." },
];

const ResearchConsultancy = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	return (
		<section
			ref={sectionRef}
			className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-20"
		>
			{/* Section Heading */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 1, ease: "easeOut" }}
				className="text-center max-w-4xl"
			>
				<motion.h2
                    className="text-2xl sm:text-4xl font-bold drop-shadow-lg tracking-wide"
                    initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}>
                    <span className="text-accent">| </span>Research & Consultancy
                </motion.h2>
				<motion.p
                    className="mt-4 text-gray-200 text-sm sm:text-lg"
                    initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}>
						Explore research projects and consultancy services offered by our Institute.
                </motion.p>
			</motion.div>

			{/* Call-to-Action Buttons */}
			<motion.div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
				{["/research/projects", "/research/publications", "/research/consultancy"].map((link, index) => (
					<button
						key={index}
						
						
						className="w-[240px] h-[50px] text-lg font-semibold bg-accent hover:bg-secondary text-white transition-all duration-300 flex items-center justify-center hover:cursor-pointer hover:shadow-lg hover:scale-110"
					>
						<Link to={link}>
							{link.includes("projects") ? "View Research Projects" :
								link.includes("publications") ? "View Publications" :
									"Consult an Expert"}
						</Link>
					</button>
				))}
			</motion.div>

			{/* Subheading */}
			<motion.p
				className="mt-16 text-gray-200 text-sm sm:text-lg text-center max-w-3xl"
				initial={{ opacity: 0, y: 30 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
			>
				Explore research initiatives and consultancy services offered by our departments.
			</motion.p>

			{/* Department Cards Section */}
			<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full">
				{departments.map((dept, index) => {
					const deptRef = useRef(null);
					const deptInView = useInView(deptRef, { once: true, margin: "-50px" });

					return (
						<motion.div
							ref={deptRef}
							key={index}
							className="relative group w-[320px] h-[280px]" // Fixed dimensions for better spacing
							initial={{ opacity: 0, y: 50 }}
							animate={deptInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Card className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-600 shadow-xl  overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-accent w-full h-full">
								{/* Glow Effect on Hover */}
								<div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/20 blur-xl"></div>

								{/* Card Content */}
								<CardContent className="p-8 text-center relative z-10 flex flex-col justify-center items-center h-full">
									<CardTitle className="text-xl font-bold text-gray-100 group-hover:text-white transition-all duration-300">
										{dept.title}
									</CardTitle>
									<p className="text-gray-400 mt-3 group-hover:text-gray-200 transition-all duration-300">
										{dept.desc}
									</p>

									{/* View More Link */}
									<Link
										to={dept.link}
										className="mt-4 inline-block text-accent font-semibold tracking-wide transition-all duration-300 hover:text-accent-light"
									>
										View Research →
									</Link>
								</CardContent>
							</Card>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default ResearchConsultancy;

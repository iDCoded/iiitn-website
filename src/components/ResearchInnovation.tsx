/* eslint-disable react-hooks/rules-of-hooks */
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const departments = [
	{ title: "Computer Science & Engineering", link: "/research/projects#cse" },
	{ title: "Electronics & Communication Engineering", link: "/research/projects#ece" },
	{ title: "Basic Sciences", link: "/research/projects#bs" },
];

const Departments = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	return (
		<section
			ref={sectionRef}
			className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-8 md:px-12 lg:px-16 py-20">
			{/* Section Heading */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 1, ease: "easeOut" }}
				className="text-center max-w-4xl">
				<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide mb-4">
					<span className="text-accent">| </span> Research & Publications
				</h2>
				<p className="text-gray-300 text-sm sm:text-base md:text-lg">
					Advancing knowledge through research and innovation.
				</p>
			</motion.div>

			{/* Cards Grid */}
			<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
				{departments.map((dept, index) => {
					const cardRef = useRef(null);
					const cardInView = useInView(cardRef, { once: true, margin: "-50px" });

					return (
						<motion.div
							ref={cardRef}
							key={index}
							className="relative group"
							initial={{ opacity: 0, y: 50 }}
							animate={cardInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>

							<Card className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-600 shadow-xl rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-accent">
								{/* Card Content */}
								<CardContent className="p-6 md:p-8 text-center relative z-10">
									<CardTitle className="text-base sm:text-lg md:text-xl font-bold text-gray-100 group-hover:text-white transition-all duration-300">
										{dept.title}
									</CardTitle>
									<p className="text-gray-400 mt-3 text-xs sm:text-sm md:text-base group-hover:text-gray-200 transition-all duration-300">
										Discover research & academic excellence in {dept.title}.
									</p>
									<Link to={dept.link} className="mt-4 inline-block text-accent font-semibold tracking-wide transition-all duration-300 hover:text-accent-light">
										View More →
									</Link>
								</CardContent>
							</Card>
						</motion.div>
					);
				})}
			</div>

			{/* Call-to-Action Buttons */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
				className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-12">

				<Button asChild className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm md:text-lg font-semibold bg-accent hover:bg-accent-dark text-white transition-all duration-300">
					<Link to="/research/projects">View Projects</Link>
				</Button>

				<Button asChild className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm md:text-lg font-semibold bg-secondary hover:bg-secondary-dark text-white transition-all duration-300">
					<Link to="/research/publications">View Publications</Link>
				</Button>
			</motion.div>
		</section>
	);
};

export default Departments;

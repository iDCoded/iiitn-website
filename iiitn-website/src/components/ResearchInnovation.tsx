/* eslint-disable react-hooks/rules-of-hooks */
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const departments = [
	{ title: "Computer Science & Engineering", link: "/research/projects#cse" },
	{
		title: "Electronics & Communication Engineering",
		link: "/research/projects#ece",
	},
	{ title: "Basic Sciences", link: "/research/projects#bs" },
];

const Departments = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	return (
		<section
			ref={sectionRef}
			className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-20">
			{/* Section Heading */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 1, ease: "easeOut" }}
				className="text-center max-w-6xl">
				<h2 className="text-5xl font-extrabold tracking-wide mb-4">
					<span className="text-accent">| </span> Research & Publications
				</h2>
				<p className="text-gray-300 text-lg">
					Advancing knowledge through research and innovation.
				</p>
			</motion.div>

			{/* Cards Grid */}
			<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
				{departments.map((dept, index) => {
					const cardRef = useRef(null);
					const cardInView = useInView(cardRef, {
						once: true,
						margin: "-50px",
					});

					return (
						<motion.div
							ref={cardRef}
							key={index}
							className="relative group"
							initial={{ opacity: 0, y: 50 }}
							animate={cardInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.8,
								ease: "easeOut",
								delay: index * 0.15,
							}}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							<Card className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-600 shadow-xl rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-accent">
								{/* Glow Effect on Hover */}
								<div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/20 blur-xl"></div>

								{/* Card Content */}
								<CardContent className="p-8 text-center relative z-10">
									<CardTitle className="text-xl font-bold text-gray-100 group-hover:text-white transition-all duration-300">
										{dept.title}
									</CardTitle>
									<p className="text-gray-400 mt-3 group-hover:text-gray-200 transition-all duration-300">
										Discover research & academic excellence in {dept.title}.
									</p>

									{/* View More Link */}
									<Link
										to={dept.link}
										className="mt-4 inline-block text-accent font-semibold tracking-wide transition-all duration-300 hover:text-accent-light">
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
				className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
				<motion.div
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ duration: 0.3 }}>
					<Button
						asChild
						className="px-8 py-3 text-lg font-semibold bg-accent hover:bg-accent-dark text-white transition-all duration-300">
						<Link to="/research/projects">View Projects</Link>
					</Button>
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ duration: 0.3 }}>
					<Button
						asChild
						className="px-8 py-3 text-lg font-semibold bg-secondary hover:bg-secondary-dark text-white transition-all duration-300">
						<Link to="/research/publications">View Publications</Link>
					</Button>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Departments;

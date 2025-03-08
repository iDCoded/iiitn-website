import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import img1 from "../assets/IIIT22.jpg";
import img2 from "../assets/IIIT26.jpg";
import img3 from "../assets/IIIT21(1).jpg";
import img4 from "../assets/gym.jpg";
import img5 from "../assets/IIIT12.jpg";
import { Button } from "./ui/button";
import {
	DialogContent,
	DialogHeader,
	DialogTrigger,
	Dialog,
	DialogDescription,
	DialogTitle,
} from "./ui/dialog";

const campusLifeImages = [
	{ src: img1 },
	{ src: img2 },
	{ src: img3 },
	{ src: img4 },
	{ src: img5 },
];

const CampusLife = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

	return (
		<section ref={ref} className="py-20 px-6 bg-gray-50">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="max-w-7xl mx-auto">
				
				{/* Section Header */}
				<div className="flex flex-col sm:flex-row justify-between items-center mb-8">
					<h2 className="text-4xl font-bold text-primary">
						<span className="text-accent">|</span> Campus Life
					</h2>
					<div className="flex gap-4 mt-4 sm:mt-0">
						<Dialog>
							<DialogTrigger asChild>
								<Button className="px-6 py-3 text-lg font-semibold bg-accent hover:bg-accent-dark text-white transition-all duration-300">
									Campus Tour
								</Button>
							</DialogTrigger>
							<DialogContent className="max-w-screen-lg w-full">
								<DialogHeader>
									<DialogTitle>Campus Tour</DialogTitle>
									<DialogDescription>Tour of the campus</DialogDescription>
								</DialogHeader>
								<div className="flex justify-center items-center overflow-hidden">
									<iframe
										width="860"
										height="615"
										src="https://www.youtube.com/embed/wAOXk7KdkXo?si=3NWKnwWrvMdvGolD"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									/>
								</div>
							</DialogContent>
						</Dialog>

						<a href="/students/hostellife">
							<Button className="px-6 py-3 text-lg font-semibold bg-primary hover:bg-primary-dark text-white transition-all duration-300">
								More
							</Button>
						</a>
					</div>
				</div>

				<p className="text-left text-gray-600 mb-8">
					Discover the vibrant student life at IIIT Nagpur.
				</p>

				{/* Bento Grid Layout (3 in first row, 2 in second row) */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{campusLifeImages.slice(0, 3).map((item, index) => (
						<motion.div
							key={index}
							className="relative rounded-xl overflow-hidden shadow-lg"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={inView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}>
							
							<img
								src={item.src}
								alt="Campus Life"
								className="w-full h-64 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
							/>
						</motion.div>
					))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
					{campusLifeImages.slice(3).map((item, index) => (
						<motion.div
							key={index}
							className="relative rounded-xl overflow-hidden shadow-lg"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={inView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.5, ease: "easeOut", delay: (index + 3) * 0.1 }}>
							
							<img
								src={item.src}
								alt="Campus Life"
								className="w-full h-64 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
							/>
						</motion.div>
					))}
				</div>

			</motion.div>
		</section>
	);
};

export default CampusLife;

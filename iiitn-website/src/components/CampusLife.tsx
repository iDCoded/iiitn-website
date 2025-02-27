import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import img1 from "../assets/IIIT22.jpg";
import img2 from "../assets/IIIT26.jpg";
import img3 from "../assets/IIIT21(1).jpg";
import img4 from "../assets/IIIT17.jpg";
import img5 from "../assets/IIIT12.jpg";

const campusLifeImages = [
	{ src: img1, title: "Campus" },
	{ src: img2, title: "Lab" },
	{ src: img3, title: "Sports" },
	{ src: img4, title: "Amenities" },
	{ src: img5, title: "Campus Life" },
];

const CampusLife = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

	return (
		<section ref={ref} className="py-16 px-6 bg-white">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-3xl font-bold text-left text-primary">
						<span className="text-accent">|</span> Campus Life
					</h2>
					<a href="/hostellife">
						<button className="text-white bg-accent py-2 px-4 rounded-sm font-semibold hover:underline">
							More
						</button>
					</a>
				</div>
				<p className="text-left text-gray-600 mb-8">
					Discover the vibrant student life at IIIT Nagpur.
				</p>

				{/* Images Grid */}
				{/* Bento Grid Layout (3+2 Images) */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{campusLifeImages.slice(0, 3).map((item, index) => (
						<div
							key={index}
							className="relative rounded-lg overflow-hidden shadow-lg">
							<img
								src={item.src}
								alt={item.title}
								className="w-full h-48 sm:h-64 md:h-48 object-cover transition-transform hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-lg font-semibold">
								{item.title}
							</div>
						</div>
					))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
					{campusLifeImages.slice(3).map((item, index) => (
						<div
							key={index}
							className="relative rounded-lg overflow-hidden shadow-lg">
							<img
								src={item.src}
								alt={item.title}
								className="w-full h-48 sm:h-64 md:h-48 object-cover transition-transform hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-lg font-semibold">
								{item.title}
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default CampusLife;

import gym from "../assets/gym.jpg";
import acad from "../assets/acadblock.jpg";
import da from "../assets/dsa.png";
import micro from "../assets/IIIT26.jpg";
import libray from "../assets/librar.png";
import control_dignal from "../assets/control.png";
import cplab from "../assets/cplab.png";
import db from "../assets/dblab.png";

function Facilities() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col items-center text-gray-800">
			{/* Header Section */}
			<header className="bg-primary text-white py-16 text-center w-full">
				<h1 className="text-5xl font-bold">Facilities</h1>
				<p className="text-lg mt-2 italic">
					"Ensuring transparency and accountability in IIIT Nagpur."
				</p>
			</header>

			{/* Main Content Section */}
			<div className="max-w-6xl bg-white shadow-lg rounded-lg p-8 my-10">
				<h2 className="text-3xl font-semibold text-primary mb-6">
					Campus Facilities
				</h2>

				<div className="grid md:grid-cols-2 gap-10">
					{[
						{
							title: "Academic Block",
							img: acad,
							description:
								"State-of-the-art classrooms and lecture halls with modern teaching aids.",
						},
						{
							title: "Library",
							img: libray,
							description:
								"A vast collection of books, journals, and digital resources for students and faculty.",
						},
						{
							title: "Gym",
							img: gym,
							description:
								"Fully equipped gymnasium to promote fitness and well-being.",
						},
						{
							title: "Microprocessor Lab",
							img: micro,
							description:
								"Advanced microprocessor training and research facility.",
						},
						{
							title: "Control System Lab",
							img: control_dignal,
							description:
								"Laboratory for control systems and automation studies.",
						},
						{
							title: "Computer Programming Lab",
							img: cplab,
							description:
								"Well-equipped lab for hands-on programming and software development.",
						},
						{
							title: "Database Lab",
							img: db,
							description:
								"Dedicated lab for database management and research.",
						},
						{
							title: "Data Structure & Algorithm Lab",
							img: da,
							description:
								"Practical exposure to data structures and algorithm design.",
						},
						{
							title: "Nano SciTech Lab",
							img: "https://iiitn.ac.in/images/facilities/IIT24.jpg",
							description:
								"Cutting-edge research in nanotechnology and science.",
						},
					].map((facility, index) => (
						<div
							key={index}
							className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
							<img
								src={facility.img}
								alt={facility.title}
								className="w-48 h-32 rounded-lg shadow-md mb-4"
							/>
							<h3 className="text-2xl font-semibold text-primary">
								{facility.title}
							</h3>
							<p className="mt-2 text-center">{facility.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Facilities;

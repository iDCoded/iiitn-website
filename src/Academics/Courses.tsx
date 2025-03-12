import { useEffect, useState } from "react";

// const coursesDemo = [
// 	{
// 		department: "Department of Computer Science & Engineering",
// 		programs: [
// 			{
// 				name: "B.Tech. Computer Science & Engineering",
// 				content: [
// 					"Bachelor of Technology in Computer Science & Engineering is provided at IIIT Nagpur. Computer Science students follow an integrated curriculum that includes topics such as:",
// 					"- Programming Languages (Python, C++, Java)",
// 					"- Computer Architecture & Operating Systems",
// 					"- Theoretical foundations of Computer Science & Mathematics",
// 					"- Artificial Intelligence & Machine Learning",
// 					"- Database Systems & Big Data Analytics",
// 					"- Cyber Security & Network Systems",
// 					"This program prepares students for careers in software development, AI research, and system engineering by integrating both theoretical and practical knowledge.",
// 				],
// 			},
// 			{
// 				name: "B.Tech. CSE (Artificial Intelligence & Machine Learning)",
// 				content: [
// 					"A Bachelor of Technology in Computer Science Engineering (Artificial Intelligence & Machine Learning) is one of the most sought-after degrees today.",
// 					"Students will learn how to develop AI-driven applications using concepts like:",
// 					"- Deep Learning & Neural Networks",
// 					"- Probabilistic Models & Reinforcement Learning",
// 					"- Computer Vision & Natural Language Processing (NLP)",
// 					"- Ethics & Security in AI Systems",
// 					"According to industry reports, 30% of all B2B organizations will use AI to enhance sales processes, making this course highly valuable in the job market.",
// 				],
// 				scheme: "/pdfs/cse_ai_ml_scheme.pdf",
// 			},
// 			{
// 				name: "B.Tech. CSE (Data Science & Analytics)",
// 				content: [
// 					"This curriculum is designed to provide students with in-depth knowledge of data science, analytics, and computational problem-solving.",
// 					"The coursework covers:",
// 					"- Data Structures & Algorithms",
// 					"- Statistical & Mathematical Foundations for Data Science",
// 					"- Machine Learning & Predictive Analytics",
// 					"- Data Visualization & Business Intelligence",
// 					"- Big Data Technologies (Hadoop, Spark, etc.)",
// 					"Students develop problem-solving and analytical skills, preparing them for roles in data science, business intelligence, and AI-driven analytics.",
// 				],
// 				scheme: "/pdfs/cse_ds_scheme.pdf",
// 			},
// 			{
// 				name: "B.Tech. CSE (Human Computer Interaction & Gaming Technology)",
// 				content: [
// 					"This program integrates user experience (UX) design, gaming technology, and human-computer interaction research.",
// 					"The curriculum includes:",
// 					"- Game Development (Unity, Unreal Engine)",
// 					"- Augmented Reality (AR) & Virtual Reality (VR)",
// 					"- User Interface (UI) & Experience (UX) Design",
// 					"- Cognitive Psychology & Interaction Design",
// 					"- AI in Gaming & Game Mechanics",
// 					"This field is rapidly expanding, with applications in interactive entertainment, education, and simulation industries.",
// 				],
// 				scheme: "/pdfs/cse_hci_gt_scheme.pdf",
// 			},
// 		],
// 	},
// 	{
// 		department: "Department of Electronics & Communication Engineering",
// 		programs: [
// 			{
// 				name: "B.Tech. Electronics & Communication Engineering",
// 				content: [
// 					"The Electronics & Communication Engineering (ECE) program at IIIT Nagpur covers cutting-edge technologies in communication and embedded systems.",
// 					"The curriculum includes:",
// 					"- Digital & Analog Communication Systems",
// 					"- VLSI & Embedded Systems Design",
// 					"- Signal Processing & Image Recognition",
// 					"- Wireless & Optical Communication Technologies",
// 					"- Internet of Things (IoT) and Machine Learning",
// 					"The program is constantly updated to meet the latest industry demands, ensuring that students are equipped with the knowledge required in the electronics and telecommunications sector.",
// 				],
// 			},
// 			{
// 				name: "B.Tech. ECE (Internet of Things)",
// 				content: [
// 					"The Internet of Things (IoT) is revolutionizing industries by connecting devices, sensors, and networks.",
// 					"This program provides expertise in:",
// 					"- Wireless Sensor Networks & IoT Protocols",
// 					"- Embedded Systems & Microcontrollers",
// 					"- Cloud Computing & Edge Computing for IoT",
// 					"- Cybersecurity & Data Privacy in IoT",
// 					"- Applications of IoT in Smart Cities, Healthcare, & Automation",
// 					"Graduates can pursue careers in smart technology development, industrial automation, and IoT-driven AI systems.",
// 				],
// 				scheme: "/pdfs/ece_iot_scheme.pdf",
// 			},
// 		],
// 	},
// ];

function Courses() {
	interface Course {
		name: string;
		content: string[];
		scheme?: string;
	}

	interface Department {
		department: string;
		programs: Course[];
	}

	const [departments, setDepartments] = useState<Department[]>([]);

	useEffect(() => {
		const fetchCourses = async () => {
			try {
				const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/courses`);
				const data = await response.json();

				// Process and group data by department
				const departmentMap: Record<string, Course[]> = {};

				data.forEach((course: any) => {
					const department = course.c_sub_category || "General"; // Use 'General' if no department specified
					const name = course.title;
					const content = course.content;
					const scheme = course.media_doc_id || null;

					if (!departmentMap[department]) {
						departmentMap[department] = [];
					}

					departmentMap[department].push({ name, content, scheme });
				});

				// Convert map to array of Department objects
				const formattedDepartments: Department[] = Object.keys(departmentMap).map((department) => ({
					department,
					programs: departmentMap[department],
				}));

				setDepartments(formattedDepartments);
			} catch (error) {
				console.error("Failed to fetch courses:", error);
			}
		};

		fetchCourses();
	}, []);

	if (departments.length === 0) {
		return (
			<div className="text-center py-10">
				<p className="text-xl text-gray-600">No courses available at the moment.</p>
			</div>
		);
	}

	return (
		<div className="bg-gray-100 min-h-screen">
			{/* Header Section */}
			<header className="bg-primary text-white py-16 text-center">
				<h1 className="text-5xl font-bold">Academic Programs at IIIT Nagpur</h1>
				<p className="text-lg mt-2 italic">"Celebrating Excellence & Inspiring the Future"</p>
			</header>

			{/* Content Section */}
			<div className="max-w-6xl mx-auto py-10 px-5">
				{departments.map((dept, index) => (
					<div key={index} className="mb-12">
						<h2 className="text-3xl font-semibold text-primary mb-6">{dept.department}</h2>
						<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
							{dept.programs.map((course, idx) => (
								<div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
									<h3 className="text-xl font-semibold text-accent mb-2">{course.name}</h3>
									<ul className="text-gray-700 mb-4 list-disc list-inside">
										{course.content.map((point, i) => (
											<li key={i}>{point}</li>
										))}
									</ul>
									{course.scheme && (
										<a
											href={course.scheme}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 underline hover:text-blue-800 font-medium">
											View Scheme
										</a>
									)}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Courses;

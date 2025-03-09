import { useEffect, useState } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Skeleton } from "../../components/ui/skeleton";
import BS from "../../assets/BS.png";
import CSE from "../../assets/CSE_grp.png";
import ECE from "../../assets/ECE_grp.png";


interface Event {
	title: string;
	date?: string;
	image?: string;
	time?: string;
}

interface DepartmentData {
	heroimage: string;
	about: string;
	bos: string;
	bosdata?: { name: string; role: string; designation: string }[];
	achievements: string;
	research: string;
	facultyandstaff: string;
	projects: string[];
	laboratory: string[];
	events: Event[];
}

interface PageProps {
	title: string;
}

const departmentsDemo: Record<string, DepartmentData> = {
	cse: {
		heroimage: CSE,
		about:
			"The Department of Computer Science and Engineering at IIIT Nagpur offers a comprehensive curriculum...",
		bos: "The Board of Studies (BoS) of the CSE Department is responsible for designing the curriculum, evaluating academic programs, and ensuring the quality of education.",
		bosdata:
			[
				{ name: "Dr Nishat Afshan Ansari", role: "Chairman", designation: "Chairman & HoD, CSE" },
				{ name: "Dr. P. S. Deshpande", role: "Expert Member", designation: "Professor, CSE, VNIT" },
				{ name: "Shri. Gandhar Patwardhan", role: "Expert Member", designation: "Managing Director, S2P EDUTECH" },
				{ name: "Dr. Harsh Gaud", role: "Expert Member", designation: "Head of Department ECE" },
				{ name: "Dr. Ashish Tiwari", role: "Special Invitee", designation: "Assistant Professor, CSE, VNIT" },
				{ name: "Dr. Tausif Diwan", role: "Special Invitee", designation: "Associate Dean, IIITN" },
				{ name: "Dr. Prasad V Joshi", role: "Special Invitee", designation: "Head of Department, BS" },
				{ name: "Dr Pooja Jain", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Jitendra Tembhurne", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Milind Penurkar", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Mayuri Digalwar", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Richa Makhijani", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Kaushlendra Sharma", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Rahul Semwal", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Khushboo Jain", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Shishupal Kumar", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Anil Kumar Kushwah", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Aishwarya Sagar Anand Ukey", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Vrinda Yadav", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Jagdish Chakole", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Nileshchandra Pikle", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Amol Bhopale", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Suvra Jyoti Choudhury", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Neha Kasture", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Amit Shewale", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Snehal Bankatrao Shinde", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Vasundhara Swapnil Rathod", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Mangesh Ramaji Kose", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr Swati Hira", role: "Member", designation: "Assistant Professor" }
			],
		achievements:
			"The CSE Department has achieved numerous milestones in research, innovation, and academic excellence. Our faculty and students have published research papers, won awards, and participated in hackathons.",
		research:
			"The research focus areas of the CSE Department include artificial intelligence, machine learning, data science, computer networks, and software engineering.",
		facultyandstaff:
			"The CSE Department has a team of highly qualified faculty members...",
		projects: ["AI Chatbot", "Data Analytics Tool", "Software Development"],
		laboratory: ["Networks Lab", "AI Lab", "Software Engineering Lab"],
		events: [
			{
				title: "Hackathon 2025",
				date: "2025-03-15",
				time: "10:00 AM - 5:00 PM",
				image: "/hackathon.jpg",
			},
			{
				title: "Guest Lecture on AI",
				date: "2025-03-20",
				time: "2:00 PM - 3:30 PM",
				image: "/ai-lecture.jpg",
			},
		],
	},
	ece: {
		heroimage: ECE,
		about:
			"The Department of Electronics and Communication Engineering at IIIT Nagpur offers a comprehensive curriculum...",
		bos: "The Board of Studies (BoS) of the ECE Department...",
		bosdata:
			[
				{ name: "Dr. Harsh Goud", role: "Chairman", designation: "Head of Department, ECE" },
				{ name: "Dr. Tausif Diwan", role: "Special Invitee", designation: "Associate Dean, IIITN" },
				{ name: "Shri Vikas Naiyar", role: "Expert Member", designation: "Industry Expert" },
				{ name: "Dr. Vishal Satpute", role: "Expert Member", designation: "Associate Professor (ECE), VNIT Nagpur" },
				{ name: "Dr. Nishat Ansari", role: "Special Invitee", designation: "Head of Department, CSE" },
				{ name: "Dr. Prasad Joshi", role: "Special Invitee", designation: "Head of Department, BS" },
				{ name: "Dr. Mayur Parate", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Tapan Jain", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Rashmi Pandhare", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Paritosh Peshwe", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Parul Sahare", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Nikhil Agrawal", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Girish Ghivela", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Sushmita Dandeliya", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Shankar Bhattacharjee", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Rajanish Kumar Singh", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Khuraijam Nelson Singh", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Nikhil Dhengre", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Bhukya Venkanna Naik", role: "Member", designation: "Assistant Professor" }
			],
		achievements: "The ECE Department has achieved numerous milestones...",
		research: "The research focus areas include VLSI, Embedded Systems, IoT...",
		facultyandstaff:
			"The ECE Department has a team of highly qualified faculty members...",
		projects: ["Embedded System Design", "IoT Applications", "VLSI Design"],
		laboratory: ["VLSI Lab", "Embedded Systems Lab", "Communication Lab"],
		events: [
			{
				title: "Workshop on IoT",
				date: "2025-03-10",
				time: "9:00 AM - 1:00 PM",
				image: "/iot-workshop.jpg",
			},
			{
				title: "Webinar on VLSI Design",
				date: "2025-03-18",
				time: "3:00 PM - 4:30 PM",
				image: "/vlsi-webinar.jpg",
			},
		],
	},
	basic_science: {
		heroimage: BS,
		about:
			"The Department of Basic Sciences at IIIT Nagpur offers a comprehensive curriculum...",
		bos: "The Board of Studies (BoS) of the Basic Sciences Department...",
		bosdata:
			[
				{ name: "Dr Prasad Joshi", role: "Chairman", designation: "Head of Department, Basic Sciences" },
				{ name: "Dr. Tausif Diwan", role: "Special Invitee", designation: "Associate Dean" },
				{ name: "Dr. Harsh Goud", role: "Special Invitee", designation: "Head of Department, ECE" },
				{ name: "Dr. Nishat Ansari", role: "Special Invitee", designation: "Head of Department, CSE" },
				{ name: "Dr. Yogesh Deshpande", role: "External Member", designation: "Professor, (Psychology & Management), VNIT Nagpur" },
				{ name: "Dr. M. Devakar", role: "External Member", designation: "Professor, (Mathematics), VNIT Nagpur" },
				{ name: "Dr. R.S. Gedam", role: "External Member", designation: "Professor, (Physics), VNIT Nagpur" },
				{ name: "Dr. Bibhudatta Dash", role: "External Member", designation: "Assistant Professor, (Language), VNIT Nagpur" },
				{ name: "Dr. Maithili Paikane", role: "External Member", designation: "Assistant Professor, (Social Science)" },
				{ name: "Shri Varun Pimplapure", role: "External Member", designation: "Industry Expert (Delhivery) (Ex. Army officer)" },
				{ name: "Dr. Kirti Dorshetwar", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Charu Goel", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Aatish Daryapurkar", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Chandrashekhar Sakode", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Kamaljeet", role: "Member", designation: "Assistant Professor" },
				{ name: "Dr. Ujwal Warbe", role: "Member", designation: "Assistant Professor" }
			],
		achievements:
			"The Basic Sciences Department has achieved numerous milestones...",
		research:
			"The research focus areas include Physics, Chemistry, Mathematics...",
		facultyandstaff:
			"Basic Sciences Department has a team of highly qualified faculty members...",
		projects: [
			"Mathematical Modelling",
			"Quantum Physics Research",
			"Chemical Analysis",
		],
		laboratory: ["Physics Lab", "Chemistry Lab", "Mathematics Lab"],
		events: [
			{
				title: "Science Quiz Competition",
				date: "2025-03-05",
				time: "11:00 AM - 1:00 PM",
				image: "/science-quiz.jpg",
			},
			{
				title: "Guest Lecture on Quantum Physics",
				date: "2025-03-12",
				time: "2:00 PM - 3:30 PM",
				image: "/quantum-lecture.jpg",
			},
		],
	},
};

export default function DepartmentPage({ title }: PageProps) {
	const [data, setData] = useState<DepartmentData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch(`/api/departments/${title}`)
			.then((response) => response.json())
			.then((result) => {
				setData(result);
				setLoading(false);
			})
			.catch((error) => {
				setData(departmentsDemo[title]); // Fallback to demo data
				setLoading(false);
				setError(error);
			})
			.finally(() => {
				setLoading(false);
				setError(null);
			});
	}, [title]);

	if (loading) return <Skeleton className="h-60 w-full" />;
	if (error) return <p className="text-center text-red-500">{error}</p>;
	if (!data)
		return <p className="text-center text-gray-600">No data available.</p>;

	const sections = [
		{ id: "about", title: "About", content: data.about },
		{ id: "bos", title: "Board of Studies", content: data.bos },
		{ id: "achievements", title: "Achievements", content: data.achievements },
		{ id: "research", title: "Research", content: data.research },
		{
			id: "facultyandstaff",
			title: "Faculty & Staff",
			content: data.facultyandstaff,
		},
		{ id: "projects", title: "Projects", content: data.projects },
		{ id: "laboratory", title: "Laboratories", content: data.laboratory },
	];

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<header
				className="relative w-full h-64 flex flex-col justify-center items-center text-white text-center shadow-lg"
				style={{
					backgroundImage: `url(${data.heroimage})`, // Replace with actual image path
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				{/* Dark Overlay for Readability */}
				<div className="absolute inset-0 bg-black/50"></div>

				{/* Text Content */}
				<div className="relative z-10 px-6">
					<h1 className="text-4xl font-extrabold drop-shadow-lg">
						{title.toUpperCase()} Department
					</h1>
					<p className="opacity-90 text-lg mt-2 drop-shadow-md">
						Explore the research and academic excellence of the{" "}
						{title.toUpperCase()} department.
					</p>
				</div>
			</header>

			<div className="container mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-4 gap-8">
				{/* Sidebar Navigation */}
				<aside className="hidden md:block sticky top-[18vh] self-start space-y-6">
					<Card className="border border-gray-200 shadow-sm">
						<CardHeader>
							<CardTitle className="text-lg font-semibold text-primary">
								Quick Navigation
							</CardTitle>
						</CardHeader>
						<CardContent>
							<ScrollArea className="h-60">
								<ul className="space-y-3 text-sm">
									{sections.map((section) => (
										<li key={section.id}>
											<a
												href={`#${section.id}`}
												className="text-accent hover:underline">
												{section.title}
											</a>
										</li>
									))}
								</ul>
							</ScrollArea>
						</CardContent>
					</Card>
				</aside>

				{/* Department Information */}
				<main className="md:col-span-3 space-y-10">
					{sections.map((section) => (
						<Card
							key={section.id}
							id={section.id}
							className="shadow-md border border-gray-100">
							<CardHeader>
								<CardTitle className="relative text-xl font-bold">
									<span className="text-4xl text-accent">| </span>
									{section.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								{Array.isArray(section.content) ? (
									<ul className="list-disc list-inside space-y-2 text-gray-700">
										{section.content.map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								) : (
									<p className="text-gray-700">{section.content}</p>
								)}

								{/* Learn More Button for Faculty & Staff Section */}
								{section.id === "facultyandstaff" && (
									<div className="mt-4">
										<Button asChild>
											<a
												href={`/pages/directory/${title}`}
												className="text-white">
												Learn More
											</a>
										</Button>
									</div>
								)}

								{/* BOS Section */}
								{section.id === "bos" && (
									<div className="mt-4 overflow-x-auto">
										<table className="min-w-full border border-gray-200 shadow-md rounded-lg">
											<thead className="bg-primary text-white">
												<tr>
													<th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
													<th className="px-4 py-3 text-left text-sm font-semibold">Role</th>
													<th className="px-4 py-3 text-left text-sm font-semibold">Designation</th>
												</tr>
											</thead>
											<tbody className="bg-white divide-y divide-gray-200">
												{data.bosdata?.map((item, index) => (
													<tr key={index} className="hover:bg-gray-100 transition-all">
														<td className="px-4 py-3 text-gray-800 font-medium">{item.name}</td>
														<td className="px-4 py-3 text-gray-700">{item.role}</td>
														<td className="px-4 py-3 text-gray-700">{item.designation}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								)}

								{/* Projects Section */}
								{section.id === "projects" && (
									<div className="mt-4 space-y-2">
										<Button asChild>
											<a href="/research/projects">Learn More</a>
										</Button>
									</div>
								)}

								{/* Research Section */}
								{section.id === "research" && (
									<div className="mt-4 space-y-2">
										<Button asChild>
											<a href="/research/publications">
												Explore Research Areas
											</a>
										</Button>
									</div>
								)}
							</CardContent>
						</Card>
					))}
				</main>
			</div>

			<div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
				{/* 🟠 Events Section */}
				{data.events.length > 0 && (
					<div className="mt-12 col-span-3">
						<h2 className="text-3xl font-bold text-primary mb-6">
							<span className="text-6xl font-bold text-accent">|</span>Upcoming
							Events
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
							{data.events.map((event, index) => (
								<div
									key={index}
									className="group relative overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05] cursor-pointer">
									{/* Event Image */}
									<div className="h-60 w-full relative overflow-hidden">
										<img
											src={event.image || "/default-event.jpg"}
											alt={event.title}
											className="w-full h-full object-cover transition-transform duration-500 scale-110 group-hover:scale-100"
										/>

										{/* Animated Date Badge */}
										<div className="absolute top-3 left-3 bg-primary text-white text-sm font-bold px-3 py-2 rounded-md shadow-lg transition-all duration-300 transform group-hover:scale-110 group-hover:bg-accent">
											{event.date
												? new Date(event.date).toLocaleDateString("en-US", {
													month: "short",
													day: "2-digit",
												})
												: "TBD"}
										</div>
									</div>

									{/* Event Details */}
									<div className="p-5">
										<h3 className="text-lg font-semibold text-gray-900">
											{event.title}
										</h3>
										{event.time && (
											<p className="text-sm text-gray-600 mt-1">{event.time}</p>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

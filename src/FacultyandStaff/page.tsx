import { useNavigate } from "react-router-dom";
import StudentCard from "../components/StudentCard";
import NoticesSidebar from "../components/NoticesSidebar";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../components/ui/card";

import acad_curr from "../assets/academic_curri.jpg";
import curr_acad from "../assets/academic_curri.jpg";




const currentData = [
	{
		title: "Academic Curricula",
		description: "Semester Dates and deadlines",
		link: "/academics/curricula",
		imageSrc: acad_curr,
	},
	{
		title: "Academic Calendar",
		description: "Details about Scholarships and financial assistance",
		link: "/academics/calendar",
		imageSrc: curr_acad,
	},
	{
		title: "Courses",
		description: "All in one academic platform for managing assignments and additional course materials.",
		link: "://moodle.iiitnagpur.ac.in",
		imageSrc: curr_acad,
	},
	{
		title: "Faculty and Staff Portal",
		description: "All in one academic platform for managing assignments and additional course materials.",
		link: "#",
		imageSrc: curr_acad,
	},
];

const quickLinks = [
	{
		title: "Quick Links",
		items: [
			{ name: "Faculty & Staff Directory", link: "/pages/directory" },
			{
				name: "Academic Curricula",
				link: "/academics/curricula",
			},
			{
				name: "Time Table",
				link: "://docs.google.com/spreadsheets/d/e/2PACX-1vSp2JfZZCxiV3e3n3uKekiLFOeh2XQzDov_YDAU4QLRIGD5H6HCoWmQKORMAd8chLib0p-I0749s1Uj/pubhtml?gid=371376379&single=true&urp=gmail_link",
			},
			{
				name: "Faculty Achievements",
				link: "/pages/facultyachievements",
			},
			{
				name: "Research Publications",
				link: "/research/publications",
			},
			{ name: "Research Projects", link: "/research/projects" },
		],
	},
];


function FacultyandStaff() {
	const navigate = useNavigate();
	return (
		<div className="bg-gray-50 min-h-screen">
			{/* Hero Section */}
			<div className="bg-primary text-white py-16 text-center">
				<h1 className="text-3xl lg:text-4xl font-bold">Faculty and Staff</h1>
				<p className="text-lg mt-3 opacity-80">
					Stay connected and contribute to the growth of IIIT Nagpur.
				</p>
			</div>

			{/* Main Content */}
			<div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
				{/* Sidebar (Quick Links, Events, Resources) */}

				{/* Main Section */}
				<div className="flex-1 ">



					{/* Current Faculty & Staff */}
					<div className="mb-12 max-w-[80vh] mx-auto">
						<h2 className="text-2xl font-semibold mb-4">
							<span className="text-accent text-4xl">|&nbsp;</span>
							Faculty & Staff
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Get more details on programs, resources, and policies for current
							faculty and staff.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
							{currentData.map((data, index) => (
								<a
									onClick={() => navigate(data.link)}
									key={index}>
									<StudentCard
										key={index}
										title={data.title}
										description={data.description}
										imageSrc={data.imageSrc}
									/>
								</a>
							))}
						</div>
					</div>

					{/* Faculty & Staff Directory
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-[80vh] mx-auto">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4"><span className="text-accent text-4xl">|&nbsp;</span>Faculty Directory</h2>
                            <FSCard
                                title="Dr. ABC"
                                description="Professor"
                                imageSrc="://.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4"><span className="text-accent text-4xl">|&nbsp;</span>Staff Directory</h2>
                            <FSCard
                                title="Dr. ABC"
                                description="Professor"
                                imageSrc="://.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
                            />
                        </div>
                    </div> */}
				</div>

				<aside className="lg:w-1/4 space-y-6 w-full">
					{quickLinks.map((section, index) => (
						<Card key={index} className="shadow-sm border border-gray-200">
							<CardHeader>
								<CardTitle className="text-lg font-semibold text-primary">
									{section.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-sm">
									{section.items.map((item, i) => (
										<li key={i}>
											<a
												onClick={() => navigate(item.link)}
												className="text-accent hover:underline">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					))}
					{/* Notices */}
					<Card className="shadow-sm border border-gray-200 p-4">
						<CardHeader className="flex justify-between items-center flex-row">
							<CardTitle className="text-lg font-semibold text-primary">Faculty Notices</CardTitle>
							<button onClick={() => navigate("/notices")} className="text-sm text-accent hover:underline">View All</button>
						</CardHeader>
						<CardContent>
						</CardContent>
						<NoticesSidebar category="faculty" />
					</Card>



				</aside>
			</div>
		</div>
	);
}

export default FacultyandStaff;

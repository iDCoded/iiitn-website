import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../../../components/ui/card";

interface LeadershipPageProps {
	title: string;
}

interface Info {
	title: string;
	name: string;
	designation: string;
	email: string;
	content: string[];
	image?: File; // Optional field to store the image file itself
}

const data = [
	{
		title: "chairman",
		name: "Shri Ravi Sharma",
		designation: "Chairman, BoG IIIT Nagpur",
		email: "chairman@iiitn.ac.in",
		content: [
			"An accomplished former CEO, Ravi Sharma is now a mentor & philanthropist with a mission of 'Spreading Goodness' by supporting initiatives towards Sustainable Society, inclusive Education and Spirituality.",
			"Coming from modest and rural background, Ravi Sharma, intrigued in life by the diminishing goodness in society, felt compelled to enhance it in the world. Today, as a leading philanthropist, he supports & rewards goodness a unique trait that defines him.",
			"A distinguished Alumni of IIT Roorkee and one of the youngest CEOs of Telecom MNC in India, Ravi reached the pinnacle of the corporate sector and served as CEO for 13 years for companies like Alcatel Lucent South Asia, Videocon Telecom, and Adani Power. Tagged as transformational leader with out of box approach, he is known for performance culture and growth.",
			"At the peak of his career @50, Ravi left corporate and fully immersed himself in philanthropy. He established an eco-system and self-propagating mechanism for multiple NGOs under 'Mission Chetna,' that created & nurtured > 50 NGOs across India having over 10 million beneficiaries today in 11 states of India. He also founded the Prama Jyoti Foundation, adopting schools in the hinterland of India and upgraded them with teachers, infrastructure & computers thus transforming them into modern centers of learning.",
			"A true believer in science and Vedic knowledge, Ravi embraced spirituality as a way of life, and established Subodhanand Foundation, in memory of his spiritual Guru, to spread the knowledge of Vedas.",
			"Passionate about the intersection of technology and infrastructure in India, Ravi is leading IIT Alumni Council as its President, with a network of over 50,000 IITians across globe dedicated to volunteering for India's challenges and sustainability.",
			"In addition, Ravi is Chairman of Telecom Equipment Manufacturing Association (TEMA); Chairperson - Board of Governors for Indian Institute of Information of Technology Una (HP) and Nagpur (Maharashtra).",
			"As the owner of a multidimensional personality, he isn't just a successful professional and philanthropist; but also published poet of Hindi poems -Bheegi Ret (भीगी रेत), Model / Actor for brands like Raymond's & Mitsubishi and lyricist of an album 'Moonlight Whispers' by Times Music. In his youth, he also excelled as a state-level sportsman and as presenter on national television.",
			"With a clear vision, positive energy, and a constructive nation-building approach, Ravi inspires his network to become positive change makers and catalysts for spreading goodness in the world!",
		],
		image: new File([""], "chairman.jpg", { type: "image/jpeg" }),
	},
	{
		title: "director",
		name: "Professor Prem Lal Patel",
		designation: "Director",
		email: "director@iiitn.ac.in",
		content: [
			"Professor Prem Lal Patel, Director, VNIT, Nagpur took over the additional charge as Director of IIIT, Nagpur on 1st October, 2024. He is Professor (HAG) of Hydraulics and Water Resources in Department of Civil Engineering, Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat. He served as Deputy Director of the Institute (SVNIT) during Sept 17, 2019 to Sept. 16, 2022. He worked as Dean (PG), Dean (R&C), Dean (Academic) and the Head, Dept. of Civil Engineering at SVNIT Surat. Prior to joining SVNIT in 2007, he served as Associate Professor, Civil Engineering Department in Delhi College of Engineering (now DTU) for eight years. Prior to working at DCE, he served as Assistant Executive Engineer (Civil) in Border Roads Organization (BRO), Ministry of Road Transport and Highways of India, Govt. of India from 1995-1999. He did his Bachelors in Civil Engineering from Government Engineering College, Rewa, Madhya Pradesh, India and then, pursued his Master and Doctoral Degrees in Civil Engineering from Indian Institute of Technology Roorkee, India (the then University of Roorkee).",
			"His research areas include River Mechanics and Flood Control; Hydrological Modelling and optimization of water systems; and Impact of climate change on water resources system. He guided 14 Doctoral Theses, 49 Master Theses and executed more than six high values sponsored research projects and more than 25 Consultancy Projects. He has more than 260 papers in peer-reviewed journals and conferences of repute. He is a member of various Technical Societies and Expert Committees. Prof. Patel visited various countries like the United States of America, Netherlands, China, Italy, Japan and Dubai for presenting his research work.",
			"He was earlier in climate changing working group of IAHR dealing with Fluvial Mechanism. He is also Fellow member of Indian Society for Hydraulics, Indian Water Resources Society and Institution of Civil Engineers, India. He has been instrumental in setting up a Centre of Excellence (CoE) on Water Resources & Flood Management in the SVNIT Surat through research grant from World Bank sponsored TEQIP-II.",
		],
		image: new File([""], "director.jpg", { type: "image/jpeg" }),
	},
	{
		title: "registrar",
		name: "Shri Kailas N. Dakhale",
		designation: "Registrar",
		email: "registrar@iiitn.ac.in",
		content: [
			"With over 30 years of experience in administration and governance, Shri Kailas N. Dakhale has been a key contributor to the development of premier higher educational institutions in India. His extensive career spans across Indian Institute of Technology Kanpur (IIT Kanpur), Visvesvaraya National Institute of Technology Nagpur (VNIT Nagpur), and Indian Institute of Information Technology Nagpur (IIIT Nagpur), where he has played a pivotal role in institutional management and policy execution.",
			"Shri Dakhale possesses deep expertise in the administration of higher education institutions under the Ministry of Education, Government of India. His ability to swiftly identify and resolve critical academic and administrative challenges has earned him widespread recognition. He is known for his strategic approach to institutional governance, ensuring seamless operations across various departments.",
			"Over the years, he has held significant roles in multiple domains, including Stores & Purchase, Personnel Administration & Establishment, Estate Management, Dean of Student Affairs (DOSA), Training & Placement, Hostel Administration, and Academic & Examination Management. His experience in planning and executing institutional policies, as well as his coordination with government bodies and industries, has contributed significantly to the efficiency and growth of the institutions he has served.",
			"Shri Dakhale dedicated 14 years to IIT Kanpur, where he served in various administrative capacities before being promoted to Deputy Registrar. He later joined VNIT Nagpur as Joint Registrar, where he served for five years, earning recognition for his effective communication skills and leadership abilities. Additionally, he has worked in the industrial sector for seven years, handling key aspects of labor relations and industrial workforce management.",
			"In 2020, Shri Dakhale became associated with IIIT Nagpur, initially as the In-Charge Registrar before being officially appointed as the Registrar on 7th October 2020. His leadership has been instrumental in strengthening the administrative and academic framework of IIIT Nagpur, ensuring its continued growth as an Institution of National Importance.",
			"Beyond his institutional roles, Shri Dakhale has contributed significantly to the management of higher educational institutions across India. He has been a part of various selection, review, and scrutiny committees for institutions such as IIT Kanpur, IIT Jodhpur, IIT Gandhinagar, IISER Bhopal, Central University of Hyderabad, Central University of Sagar, Rajiv Gandhi Institute of Petroleum Technology (RGIPT) Amethi, Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya Wardha, Central University of Rajasthan, SVNIT Surat, and MNLU Nagpur.",
			"His contributions also extend to the establishment of new institutions, including IIITDM Jabalpur and IIT Jodhpur. His vast experience, combined with his ability to navigate the complexities of academic administration, makes him a valuable leader in the education sector.",
			"Shri Kailas N. Dakhale continues to drive excellence in institutional management, ensuring IIIT Nagpur remains at the forefront of technical education and research. His vision, dedication, and administrative acumen contribute significantly to the institution’s progress, fostering an environment of academic and professional growth.",
		],
		image: new File([""], "registrar.jpg", { type: "image/jpeg" }),
	},
];

function LeadershipPage({ title }: LeadershipPageProps) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleSidebar = () => setIsOpen(!isOpen);
	const [info, setInfo] = useState<Info | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`/api/governance/${title}`)
			.then((response) => response.json())
			.then((result) => {
				setInfo(result);
				setLoading(false);
			})
			.catch(() => {
				const info = data.find((item) => item.title === title.toLowerCase());
				setInfo(info || null);
				setLoading(false);
			});
	}, [title]);

	if (loading) return <div>Loading...</div>;

	return (
		<div className="bg-gray-50 text-gray-900 min-h-screen">
			{/* Hero Section */}
			<div className="bg-primary text-white py-16 text-center">
				<h1 className="text-4xl font-bold capitalize">{title}</h1>
				<p className="text-lg mt-2">Leadership at IIIT Nagpur</p>
			</div>

			{/* Mobile Sidebar Toggle */}
			<button
				className="md:hidden fixed top-4 left-4 bg-accent text-white p-2 rounded-full z-50"
				onClick={toggleSidebar}>
				{isOpen ? <X size={24} /> : <Menu size={24} />}
			</button>

			{/* Main Content */}
			<div className="max-w-6xl mx-auto px-6 py-12">
				<Card className="shadow-lg bg-white rounded-xl overflow-hidden">
					<CardHeader className="bg-accent text-white p-4">
						<CardTitle className="text-2xl">{title}</CardTitle>
					</CardHeader>
					<CardContent className="p-6">
						{/* Grid Layout for Better Responsiveness */}
						<div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 items-start">
							{/* Image Section */}
							<img
								src={info?.image ? URL.createObjectURL(info.image) : ""}
								alt={info?.designation}
								className="w-[200px] h-[200px] object-cover rounded-md border border-gray-300"
							/>

							{/* Info Section */}
							<div className="flex flex-col">
								<p className="font-bold text-2xl">{info?.name}</p>
								<p className="text-gray-600 text-lg">{info?.designation}</p>
								<p className="text-gray-500 mt-1">
									Email:{" "}
									<a
										href={`mailto:${info?.email}`}
										className="text-blue-600 hover:underline">
										{info?.email}
									</a>
								</p>

								{/* Bio Content */}
								<div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
									{info?.content.map((paragraph, index) => (
										<p key={index}>{paragraph}</p>
									))}
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default LeadershipPage;

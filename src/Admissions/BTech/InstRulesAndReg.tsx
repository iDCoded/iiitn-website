import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const rulesDemo = [
	{ title: "Anti-Ragging Rules", link: "#" },
	{ title: "Institute Rules", link: "#" },
	{ title: "Hostel Rules", link: "#" },
	{ title: "Institute Do's and Don'ts", link: "#" },
];

function InstRulesAndReg() {

	const [rules,setRules] = useState<Rule[]>([])

	const navigate = useNavigate();

	interface Rule {
		title: string;
		link: string;
	}

	// Fetch Rules from API
	useEffect(() => {
		const fetchAcadFeeData = async () => {
			try {
				const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/fees`);
				const data = await response.json();

				const formattedRules = data.map((item: any) => ({
					title: item.title,
					link: item.media_doc_id
				}));
				setRules(formattedRules);
			}
			catch (error) {
				console.error("Error fetching academic fee data:", error);
				setRules(rulesDemo);
			}
		}
		fetchAcadFeeData();
	}, []);
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-primary text-white py-14 text-center">
				<h1 className="text-3xl font-bold">
					Institute's Rules and Regulations
				</h1>
			</header>

			{/* Main Content */}
			<main className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
				<h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
					Please read and follow the institute's rules carefully.
				</h2>

				{/* Rules List */}
				<ul className="space-y-4">
					{rules.map((rule, index) => (
						<li
							key={index}
							className="bg-gray-200 p-4 rounded-md shadow-sm flex justify-between items-center">
							<span className="text-lg font-medium text-gray-700">
								{rule.title}
							</span>
							<button
								onClick={() => navigate(rule.link)}
								className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
								View Details
							</button>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
}

export default InstRulesAndReg;

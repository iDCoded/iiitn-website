const rules = [
	{ title: "Anti-Ragging Rules", link: "#" },
	{ title: "Institute Rules", link: "#" },
	{ title: "Hostel Rules", link: "#" },
	{ title: "Institute Do's and Don'ts", link: "#" },
];

function InstRulesAndReg() {
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
							<a
								href={rule.link}
								className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
								View Details
							</a>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
}

export default InstRulesAndReg;

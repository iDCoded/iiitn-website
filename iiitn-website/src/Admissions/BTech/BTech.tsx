
const bTechData = {
	year: "2024-2025",
	revisedInstituteSchedule: "#",
	hostelAvailability: "#",
	instituteReportingSchedule: "#",
	pwdNotice: "#",
	instituteDetails: "#",
	admissionCancellationPolicy: "#",
	antiRaggingGuidelines: "#",
	onlineAdmissionPortal: "#",
	abcIDGuide1: "#",
	abcIDGuide2: "#",
	courseDetails: "#",
};

const seatData = [
	["B. Tech. Computer Science & Engineering", 223],
	["B. Tech. CSE (Artificial Intelligence & Machine Learning)", 66],
	["B. Tech. CSE (Data Science & Analytics)", 66],
	["B. Tech. CSE (Human Computer Interaction & Gaming Technology)", 66],
	["B. Tech. Electronics & Communication Engineering", 150],
	["B. Tech. ECE (Internet of Things)", 66],
];

function BTech() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-[#002147] text-white py-14 text-center">
				<h1 className="text-3xl font-bold">B.Tech Admissions 2024-2025</h1>
			</header>

			{/* Main Content */}
			<main className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
				{/* Important Links */}
				<div className="space-y-4">
					{[
						["Revised Institute Reporting Schedule (08.08.2024)", bTechData.revisedInstituteSchedule],
						["Latest Hostel Accommodation Availability (08.08.2024 - 04:00 PM)", bTechData.hostelAvailability],
						["Institute Reporting Schedule 2024-2025", bTechData.instituteReportingSchedule],
						["Important Notice for Students with PWD Status", bTechData.pwdNotice],
						["Institute Details at a Glance 2024-25", bTechData.instituteDetails],
					].map(([label, link], index) => (
						<a
							key={index}
							href={link}
							className="block bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition"
						>
							{label}
						</a>
					))}
				</div>

				{/* Course Details */}
				<section className="mt-8">
					<h2 className="text-xl font-semibold text-gray-800">IIIT Nagpur Offers the Following Undergraduate Courses:</h2>
					<table className="mt-4 w-full border border-gray-300 text-gray-700">
						<thead className="bg-gray-200">
							<tr>
								<th className="p-2 border">Sr. No.</th>
								<th className="p-2 border">Program Name</th>
								<th className="p-2 border">Total Seat Intake</th>
							</tr>
						</thead>
						<tbody>
							{seatData.map(([course, seats], index) => (
								<tr key={index} className="border">
									<td className="p-2 text-center">{index + 1}</td>
									<td className="p-2">{course}</td>
									<td className="p-2 text-center">{seats}</td>
								</tr>
							))}
							<tr className="bg-gray-100 font-semibold">
								<td className="p-2 text-center" colSpan={2}>
									Total
								</td>
								<td className="p-2 text-center">637</td>
							</tr>
						</tbody>
					</table>
					<a
						href={bTechData.courseDetails}
						className="mt-4 block bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition"
					>
						More Details About Courses
					</a>
				</section>

				{/* Additional Links */}
				<div className="mt-8 space-y-4">
					<a
						href={bTechData.admissionCancellationPolicy}
						className="block bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition"
					>
						Admission Cancellation & Fees Refund Policy
					</a>

					<div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
						<a
							href={bTechData.abcIDGuide1}
							className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition"
						>
							How to Generate ABC / APPAR ID (Guide 1)
						</a>
						<a
							href={bTechData.abcIDGuide2}
							className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition"
						>
							How to Generate ABC / APPAR ID (Guide 2)
						</a>
					</div>

					<a
						href={bTechData.antiRaggingGuidelines}
						className="block bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition"
					>
						Antiragging Undertaking & Guidelines
					</a>

					<a
						href={bTechData.onlineAdmissionPortal}
						className="block bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition"
					>
						Online Admission Portal
					</a>
				</div>
			</main>

			
		</div>
	);
}

export default BTech;

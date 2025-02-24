import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

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
		<div className="bg-gray-50 min-h-screen flex flex-col">
			{/* 🔷 Hero Section */}
			<header className="bg-[#002147] text-white py-14 text-center px-4">
				<h1 className="text-3xl md:text-4xl font-bold">B.Tech Admissions 2024-2025</h1>
				<p className="mt-2 text-md md:text-lg text-gray-200">
					Get all the details about IIIT Nagpur B.Tech admissions
				</p>
			</header>

			{/* 📌 Main Content */}
			<main className="max-w-5xl w-full mx-auto p-4 md:p-6">
				{/* 🏫 Key Admission Information */}
				<Card className="mb-6">
					<CardContent className="p-4 md:p-6">
						<CardTitle className="text-[#002147]">Key Admission Information</CardTitle>
						<ul className="mt-4 space-y-3 text-gray-700">
							<li>📌 <a href={bTechData.revisedInstituteSchedule} className="text-[#E87722] hover:underline">Revised Institute Reporting Schedule (08.08.2024)</a></li>
							<li>🏠 <a href={bTechData.hostelAvailability} className="text-[#E87722] hover:underline">Hostel Accommodation Availability (08.08.2024)</a></li>
							<li>🕒 <a href={bTechData.instituteReportingSchedule} className="text-[#E87722] hover:underline">Institute Reporting Schedule 2024-2025</a></li>
							<li>♿ <a href={bTechData.pwdNotice} className="text-[#E87722] hover:underline">Notice for PWD Students</a></li>
							<li>📊 <a href={bTechData.instituteDetails} className="text-[#E87722] hover:underline">Institute Details at a Glance</a></li>
						</ul>
					</CardContent>
				</Card>

				{/* 📚 Course Details */}
				<Card className="mb-6">
					<CardContent className="p-4 md:p-6">
						<CardTitle className="text-[#002147]">IIIT Nagpur Undergraduate Courses</CardTitle>
						<div className="overflow-x-auto">
							<table className="mt-4 w-full border border-gray-300 text-gray-700 text-sm md:text-base">
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
										<td className="p-2 text-center" colSpan={2}>Total</td>
										<td className="p-2 text-center">637</td>
									</tr>
								</tbody>
							</table>
						</div>
						<a
							href={bTechData.courseDetails}
							className="mt-4 block text-[#E87722] hover:underline text-center"
						>
							More Details About Courses
						</a>
					</CardContent>
				</Card>

				{/* 📜 Resources & Guidelines (Accordion) */}
				<Card>
					<CardContent className="p-4 md:p-6">
						<CardTitle className="text-[#002147]">Resources & Guidelines</CardTitle>
						<Accordion type="single" collapsible className="mt-4">
							<AccordionItem value="admission-policy">
								<AccordionTrigger>📜 Admission Cancellation & Refund Policy</AccordionTrigger>
								<AccordionContent>
									<a href={bTechData.admissionCancellationPolicy} className="text-[#E87722] hover:underline">
										View Admission Cancellation Policy
									</a>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="abc-id">
								<AccordionTrigger>📄 How to Generate ABC / APPAR ID</AccordionTrigger>
								<AccordionContent>
									<ul className="space-y-2">
										<li><a href={bTechData.abcIDGuide1} className="text-[#E87722] hover:underline">Guide 1</a></li>
										<li><a href={bTechData.abcIDGuide2} className="text-[#E87722] hover:underline">Guide 2</a></li>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="antiragging">
								<AccordionTrigger>🚨 Antiragging Undertaking & Guidelines</AccordionTrigger>
								<AccordionContent>
									<p><a href="https://antiragging.in/affidavit_university_form.php" className="text-[#E87722] hover:underline">
										Fill the Antiragging Undertaking Form
									</a></p>
									<p><a href="https://iiitn.ac.in/images/admission2024/Antiragging%20Undertaking%20Guidlines.pdf" className="text-[#E87722] hover:underline">
										View Antiragging Guidelines
									</a></p>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="online-admission">
								<AccordionTrigger>🖥 Online Admission Portal</AccordionTrigger>
								<AccordionContent>
									<a href={bTechData.onlineAdmissionPortal} className="text-[#E87722] hover:underline">
										Go to Admission Portal
									</a>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</CardContent>
				</Card>
			</main>
		</div>
	);
}

export default BTech;

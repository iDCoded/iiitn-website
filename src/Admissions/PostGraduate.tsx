import { useState,useEffect } from "react";

interface PhdAdmission {
	title: string;
	link: string;
}


function MTech() {
	const [phdAdmissions, setPhdAdmissions] = useState<PhdAdmission[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchPhdAdmissions = async () => {
			try {
				const res = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/media/media/category/phd_admissions`
				);
				if (!res.ok) {
					throw new Error("Failed to fetch Ph.D. Admissions data");
				}
				const data = await res.json();

				const phdAdmissionsData = data.map((admission: any) => ({
					title: admission.title,
					link: admission.media_doc_id,
				}));
				setPhdAdmissions(phdAdmissionsData);
			} catch (error) {
				console.error("Error fetching Ph.D. Admissions data:", error);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		fetchPhdAdmissions();
	}, []);

	

	
	return (
		<div className="bg-gray-100 min-h-screen">
			{/* Header Section */}
			<header className="bg-gray-800 text-white py-12 text-center px-4">
				<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
					Post Graduation Admissions
				</h1>
				<p className="mt-2 text-sm md:text-md lg:text-lg text-gray-300">
					Information regarding M.Tech & Ph.D. admissions at IIIT Nagpur
				</p>
			</header>

			{/* Admissions Information */}
			<section className="max-w-3xl w-full mx-auto bg-white shadow-md p-5 md:p-6 rounded-lg mt-6 md:mt-8">
				<h2 className="text-xl md:text-2xl font-semibold text-gray-800">
					Admissions for Post Graduate Programs
				</h2>
				<p className="text-gray-700 mt-3 text-sm md:text-base">
					IIIT Nagpur offers M.Tech and Ph.D. programs in various disciplines. Below are the latest notifications and details regarding admissions.
				</p>
			</section>

			{/* PhD Admissions Notifications */}
			<section className="max-w-3xl w-full mx-auto bg-white shadow-md p-5 md:p-6 rounded-lg mt-6">
				<h3 className="text-lg md:text-xl font-semibold text-gray-800">
					Ph.D. Admission Notifications
				</h3>
				{
					loading ? (
						<div className="text-center py-4">
							Loading Ph.D. Admissions...
						</div>
					) : error ? (
						<div className="text-center py-4 text-red-500">
							Failed to fetch Ph.D. Admissions data
						</div>
					) : (
						<ul className="mt-4">
							{phdAdmissions.map((admission, index) => (
								<li key={index} className="py-2">
									<a
										href={admission.link}
										target="_blank"
										rel="noreferrer"
										className="text-blue-500 hover:underline"
									>
										{admission.title}
									</a>
								</li>
							))}
						</ul>
					)	
				}


				
			</section>

			{/* Academic Rule Book */}
			<section className="max-w-3xl w-full mx-auto bg-white shadow-md p-5 md:p-6 rounded-lg mt-6 mb-6">
				<h3 className="text-lg md:text-xl font-semibold text-gray-800">
					Academic Rule Book
				</h3>
				<p className="text-gray-700 mt-3 text-sm md:text-base">
					Refer to the academic rule book for policies and guidelines related to postgraduate programs.
				</p>
				<a href="#" className="inline-block mt-3 px-4 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition text-sm md:text-base">
					View Rule Book
				</a>
			</section>
		</div>
	);
}

export default MTech;

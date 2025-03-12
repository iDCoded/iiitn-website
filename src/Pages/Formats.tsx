import {useState, useEffect } from "react";





function Formats() {
	interface Format {
		name: string;
		link: string;
	}

	interface ApiResponseFormat {
		title: string;
		media_doc_id: string;
		m_sub_category: string;
	}

	const [instituteFormats, setInstituteFormats] = useState<Format[]>([]);
	const [centralFormats, setCentralFormats] = useState<Format[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchFormats = async () => {
			try {
				const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/formats`);
				if (!res.ok) throw new Error("Failed to fetch formats data");

				const data: ApiResponseFormat[] = await res.json(); // Ensure it's typed correctly

				// ✅ Filter and Map only the required fields
				const instituteFormats: Format[] = data
					.filter((format: ApiResponseFormat) => format.m_sub_category === "institute")
					.map((format: ApiResponseFormat) => ({
						name: format.title,
						link: format.media_doc_id,
					}));

				const centralFormats: Format[] = data
					.filter((format: ApiResponseFormat) => format.m_sub_category === "central")
					.map((format: ApiResponseFormat) => ({
						name: format.title,
						link: format.media_doc_id,
					}));

				setInstituteFormats(instituteFormats);
				setCentralFormats(centralFormats);
			} catch (err) {
				console.error("Error fetching formats data:", err);
			
			} finally {
				setLoading(false);
			}
		};

		fetchFormats();
	}, []);
  


	if(loading){

		return (
			<div className="bg-gray-100 min-h-screen">
				<div className="min-h-screen flex items-center justify-center">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
				</div>
			</div>
		);

	}

	return (
		<div className="bg-gray-100 min-h-screen">
			<header className="bg-primary text-white py-16 text-center">
				<h1 className="text-5xl font-bold">Formats</h1>
				<p className="text-lg mt-2 italic">
					"Ensuring a fair and transparent resolution process"
				</p>
			</header>

			<div className="max-w-4xl mx-auto py-10">
				<h2 className="text-2xl font-semibold text-primary mb-4">
					Institute Formats
				</h2>
				<div className="overflow-x-auto">
					<table className="min-w-full bg-white border rounded-lg shadow-md">
						<thead className="bg-primary text-white">
							<tr>
								<th className="px-4 py-3">Sr. No.</th>
								<th className="px-4 py-3 text-left">Format</th>
								<th className="px-4 py-3">Link</th>
							</tr>
						</thead>
						<tbody>
							{instituteFormats.map((format, index) => (
								<tr key={index} className="border-b">
									<td className="px-4 py-3 text-center">{index + 1}</td>
									<td className="px-4 py-3">{format.name}</td>
									<td className="px-4 py-3 text-center">
										<a
											href={format.link}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 underline hover:text-blue-800">
											Download
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<h2 className="text-2xl font-semibold text-primary mt-10 mb-4">
					Central Formats
				</h2>
				<div className="overflow-x-auto">
					<table className="min-w-full bg-white border rounded-lg shadow-md">
						<thead className="bg-primary text-white">
							<tr>
								<th className="px-4 py-3">Sr. No.</th>
								<th className="px-4 py-3 text-left">Format</th>
								<th className="px-4 py-3">Link</th>
							</tr>
						</thead>
						<tbody>
							{centralFormats.map((format, index) => (
								<tr key={index} className="border-b">
									<td className="px-4 py-3 text-center">{index + 1}</td>
									<td className="px-4 py-3">{format.name}</td>
									<td className="px-4 py-3 text-center">
										<a
											href={format.link}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 underline hover:text-blue-800">
											Download
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Formats;

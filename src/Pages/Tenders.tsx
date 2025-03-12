import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";


const deftenderData = [
	{
		title: "Tender for Supply of Desktop Computers",
		startdate: "2024-07-01",
		lastdate: "2024-09-30",
		documentlink: "#",
		status: true,
	},
	{
		title: "Tender for Campus Networking",
		startdate
		: "2024-07-15",
		lastdate: "2024-08-15",
		documentlink: "#",
		status: false,
	},
	{
		title: "Tender for Furniture Supply",
		startdate: "2024-07-01",
		lastdate: "2024-07-20",
		documentlink: "#",
		status: true,
	},
];

function Tenders() {
	interface Tender {
		title: string;
		startdate: string;
		lastdate: string;
		documentlink: string;
		status: boolean;
	}

	const [tenderData, setTenderData] = useState<Tender[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchTenders = async () => {
			try {
				const res = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/tenders`
				);
				if (!res.ok) {
					throw new Error("Failed to fetch tender data");
				}
				const data = await res.json();
				console.log(data);
				const tenderDataList = data.map((tender: any) => ({
					title: tender.title,
					startdate: tender.date,
					lastdate: tender.lastdate,
					documentlink: tender.media_doc_path,
					status: tender.visibility,
				}));

				const updatedTenders = await Promise.all(
					tenderDataList.map(async (tender: any) => {
						if (tender.documentlink) {
							try {
								const docReq = await fetch(
									`${import.meta.env.VITE_API_BASE_URL}/media/${tender.documentlink}`
								);
								if (!docReq.ok) throw new Error("Failed to fetch document");
								const docRes = await docReq.json();

								return { ...tender, documentlink: docRes.url };
							} catch (err) {
								console.error(
									`Error fetching document for tender ${tender.title}:`,
									err
								);
								return tender;
							}
						}
						return tender;
					})
				);

				setTenderData(updatedTenders.length > 0 ? updatedTenders : deftenderData);
			} catch (err) {
				console.error("Error fetching tenders:", err);
				setTenderData(deftenderData);
			} finally {
				setLoading(false);
			}
		};

		fetchTenders();
	}, []);

	return (
		loading ? (
			<div className="flex justify-center items-center min-h-screen">
				<Skeleton className="w-full max-w-7xl h-96" />
			</div>
		) : (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<div className="bg-primary text-white py-16 text-center">
				<h1 className="text-4xl font-bold">Tenders</h1>
				<p className="text-lg mt-2">
					Stay updated with the latest tenders from IIIT Nagpur.
				</p>
			</div>

			{/* Table Section */}
			<div className="w-full px-8 py-6">
				<div className="overflow-x-auto">
					<table className="w-full max-w-7xl mx-auto border-collapse bg-white shadow-lg rounded-lg">
						<thead>
							<tr className="bg-primary text-white text-left">
								<th className="p-5">Sr.No</th>
								<th className="p-5">Tender Particulars</th>
								<th className="p-5">Last Date</th>
								<th className="p-5">Status</th>
								<th className="p-5">Document</th>
							</tr>
						</thead>
						<tbody>
							{tenderData.map((tender, index) => (
								<tr
									key={index}
									className="border-b hover:bg-gray-100 transition-all duration-200">
									<td className="p-5">{index + 1}</td>
									<td className="p-5">{tender.title}</td>
									<td className="p-5">{tender.lastdate}</td>
									<td className="p-5">
										<span
											className={`px-4 py-1 rounded-full text-white text-sm ${
												tender.status === true ? "bg-green-500" : "bg-red-500"
											}`}>
													
											{tender.status === true ? "Active" : "Inactive"}
										</span>
									</td>
									<td className="p-5">
										<a
											href={tender.documentlink}
											className="text-blue-600 hover:underline">
											Download 📄
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		)
	);

}


export default Tenders;

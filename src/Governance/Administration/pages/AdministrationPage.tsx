import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../../../components/ui/card";
import { useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";

interface Person {
	id: string;
	name: string;
	position: string;
	email: string;
	phone?: string;
	content: string;
	imageSrc: string;
}

function LeadershipPage() {
	const { id } = useParams<{ id: string }>();

	const [isOpen, setIsOpen] = useState(false);
	const [info, setInfo] = useState<Person | null>(null); // Ensure proper type handling
	const [loading, setLoading] = useState(true);

	const toggleSidebar = () => setIsOpen(!isOpen);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/faculty/faculty_staff/${id}`
				);

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const person = await response.json(); // Assuming API returns a single object, not an array

				setInfo({
					id: person.id, // Ensure ID is from API response
					name: person.name,
					position: person.positions,
					email: person.email,
					phone: person.phone_no,
					content: person.content,
					imageSrc: person.image_path,
				});
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		if (id) {
			fetchData();
		}
	}, [id]);

	if (loading) return <div className="text-center py-10">Loading...</div>;

	if (!info) return <div className="text-center py-10 text-red-500">Data not found.</div>;

	return (
		<div className="bg-gray-50 text-gray-900 min-h-screen">
			{/* Hero Section */}
			<div className="bg-primary text-white py-16 text-center">
				<h1 className="text-4xl font-bold capitalize">{info.position}</h1>
				<p className="text-lg mt-2">Leadership at IIIT Nagpur</p>
			</div>

			{/* Mobile Sidebar Toggle */}
			<button
				className="md:hidden fixed top-4 left-4 bg-accent text-white p-2 rounded-full z-50"
				onClick={toggleSidebar}
			>
				{isOpen ? <X size={24} /> : <Menu size={24} />}
			</button>

			{/* Main Content */}
			<div className="max-w-6xl mx-auto px-6 py-12">
				<Card className="shadow-lg bg-white rounded-xl overflow-hidden">
					<CardHeader className="bg-accent text-white p-4">
						<CardTitle className="text-2xl">{info.position}</CardTitle>
					</CardHeader>
					<CardContent className="p-6">
						{/* Grid Layout for Better Responsiveness */}
						<div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 items-start">
							{/* Image Section */}
							<img
								src={info.imageSrc || "/placeholder.png"} // Provide a default image
								alt={info.position}
								className="w-[200px] h-[200px] object-cover rounded-md border border-gray-300"
							/>

							{/* Info Section */}
							<div className="flex flex-col">
								<p className="font-bold text-2xl">{info.name}</p>
								<p className="text-gray-600 text-lg">{info.position}</p>
								<p className="text-gray-500 mt-1">
									Email:{" "}
									<a
										href={`mailto:${info.email}`}
										className="text-blue-600 hover:underline"
									>
										{info.email}
									</a>
								</p>
								{info.phone && (
									<p className="text-gray-500 mt-1">
										Phone:{" "}
										<a
											href={`tel:${info.phone}`}
											className="text-blue-600 hover:underline"
										>
											{info.phone}
										</a>
									</p>
								)}

								{/* Bio Content */}
								<div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
									<MarkdownPreview source={info.content || "No content available."} />
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

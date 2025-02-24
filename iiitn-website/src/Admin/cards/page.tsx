import { useEffect, useState } from "react";
import { Card, columns } from "./columns";
import { DataTable } from "./data-table";

function CardTablePage() {
	const [cardData, setCardData] = useState<Card[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCardData = async () => {
			try {
				const response = await fetch("http://localhost:5000/card/cards");
				if (!response.ok) throw new Error("Failed to fetch card data");

				const data: Card[] = await response.json();
				setCardData(data);
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (err: any) {
				console.error(err);
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchCardData();
	});

	if (loading) return <p className="text-center text-gray-500">Loading...</p>;
	if (error) return <p className="text-center text-red-500">Error: {error}</p>;

	return (
		<div className="container mx-auto py-10">
			<DataTable columns={columns} data={cardData} />
		</div>
	);
}

export default CardTablePage;

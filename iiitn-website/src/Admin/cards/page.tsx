import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "../data-table";
import { ICard } from "@/interfaces/types";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { CardForm } from "@/components/form/card-form";

function CardTablePage() {
	const [cardData, setCardData] = useState<ICard[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchCardData = async () => {
			try {
				const response = await fetch("http://localhost:5000/card/cards");
				if (!response.ok) throw new Error("Failed to fetch card data");

				if (response.ok) {
					const data: ICard[] = await response.json();
					setCardData(data);
				}
			} catch (err: unknown) {
				console.error(err);
				setError("Unable to fetch data. Please try again later.");
			} finally {
				setLoading(false);
			}
		};

		fetchCardData();
	}, []);

	if (loading) return <p className="text-center text-gray-500">Loading...</p>;
	if (error) return <p className="text-center text-red-500">Error: {error}</p>;

	return (
		<div className="container mx-auto py-10 h-screen">
			<div className="flex flex-col items-end gap-8">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant={"outline"} size={"lg"}>
							<Plus strokeWidth={4} />
							<p>Add a card</p>
						</Button>
					</DialogTrigger>
					<DialogContent className="max-h-[80vh] overflow-y-auto">
						<DialogHeader>
							<DialogTitle>Create Card</DialogTitle>
						</DialogHeader>
						<CardForm />
					</DialogContent>
				</Dialog>
				<DataTable columns={columns} data={cardData} />
			</div>
		</div>
	);
}

export default CardTablePage;

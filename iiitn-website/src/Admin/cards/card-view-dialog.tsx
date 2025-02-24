import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ICard } from "@/interfaces/types";
import { Eye } from "lucide-react";

const ViewCardDialog = ({ card }: { card: ICard }) => {
	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant={"ghost"} size={"icon"}>
						<Eye />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>View Card</DialogTitle>
					</DialogHeader>
					<Card className="shadow-lg rounded-lg overflow-hidden">
						<img
							src={"/placeholder.svg"}
							alt={card.caption}
							className="w-full h-40 object-cover"
						/>
						<CardContent className="p-4">
							<h3 className="text-lg font-semibold text-[#002147]">
								{card.title}
							</h3>
							<p className="text-sm text-gray-600">{card.content}</p>
						</CardContent>
					</Card>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default ViewCardDialog;

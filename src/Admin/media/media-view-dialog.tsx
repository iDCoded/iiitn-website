import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { IMedia } from "@/interfaces/types";

const ViewMediaDialog = ({ media }: { media: IMedia }) => {
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
						<DialogTitle>View Media</DialogTitle>
					</DialogHeader>
					<Card className="shadow-lg rounded-lg">
						<img
							src={media.media_img_id?.toString() || "/placeholder.svg"}
							alt={media.title}
							className="w-full h-40 object-cover rounded-lg"
						/>
					</Card>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default ViewMediaDialog;

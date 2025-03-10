import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { MediaUploadForm } from "@/components/form/image-upload-form";

export function MediaUpload() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={"outline"}>
					<Plus />
					Upload Media
				</Button>
			</DialogTrigger>
			<DialogContent className="max-h-[80vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>&nbsp;</DialogTitle>
				</DialogHeader>
				<MediaUploadForm />
			</DialogContent>
		</Dialog>
	);
}

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ImageUpload } from "@/components/form/image-upload";

export function MediaUpload() {
	// const [file, setFile] = useState<File | null>(null);
	// const [title, setTitle] = useState("");
	// const [caption, setCaption] = useState("");
	// const [description, setDescription] = useState("");

	// const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	if (e.target.files) {
	// 		setFile(e.target.files[0]);
	// 	}
	// };

	// const handleSubmit = (e: React.FormEvent) => {
	// 	e.preventDefault();
	// 	if (file) {
	// 		console.log("Image upload:", { file, title, caption, description });
	// 		toast({
	// 			title: "Image Uploaded",
	// 			description: "Your image has been successfully uploaded.",
	// 		});
	// 		setFile(null);
	// 		setTitle("");
	// 		setCaption("");
	// 		setDescription("");
	// 	}
	// };

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={"outline"} size={"icon"}>
					<Plus />
				</Button>
			</DialogTrigger>
			<DialogContent className="max-h-[80vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Create Card</DialogTitle>
				</DialogHeader>
				<ImageUpload />
			</DialogContent>
		</Dialog>
	);
}

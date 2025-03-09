import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ICard } from "@/interfaces/types";

const schema = z.object({
	title: z.string().min(1, { message: "Title is required" }),
	caption: z.string().min(1, { message: "Caption is required" }),
	content: z.string().min(1, { message: "Content is required" }),
	location: z.string().min(1, { message: "Location is required" }),
	c_category: z.string().min(1, { message: "Category is required" }),
	c_sub_category: z.string().min(1, { message: "Sub-category is required" }),
	date: z.string().min(1, { message: "Date is required" }),
});

type FormData = z.infer<typeof schema>;

const CardEditDialog = ({ card }: { card: ICard }) => {
	const form = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			title: card.title,
			caption: card.caption,
			content: card.content,
			location: card.location,
			c_category: card.c_category,
			c_sub_category: card.c_sub_category,
			date: new Date(card.date).toISOString().split("T")[0],
		},
	});

	const onSubmit = async (data: FormData) => {
		await fetch(
			`${import.meta.env.VITE_API_BASE_URL}/card/cards/${card.c_id}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost">Edit Card</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit Card</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input placeholder="Enter title" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="caption"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Caption</FormLabel>
									<FormControl>
										<Input placeholder="Enter caption" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="content"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Content</FormLabel>
									<FormControl>
										<Textarea
											className="max-h-[20vh] overflow-y-scroll"
											placeholder="Enter content"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="location"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Location</FormLabel>
									<FormControl>
										<Input placeholder="Enter location" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="c_category"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Category</FormLabel>
									<FormControl>
										<Input placeholder="Enter category" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="c_sub_category"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Sub-Category</FormLabel>
									<FormControl>
										<Input placeholder="Enter sub-category" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="date"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Date</FormLabel>
									<FormControl>
										<Input type="date" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" size="lg" className="w-full">
							Save
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default CardEditDialog;

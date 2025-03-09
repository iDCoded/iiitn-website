import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageIcon, User } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import MDEditor from "@uiw/react-md-editor";

const formSchema = z.object({
	f_id: z.string(),
	p_id: z.string(),
	b_id: z.string(),
	pub_id: z.string(),
	media_img_id: z.string(),
	media: z
		.instanceof(FileList)
		.refine((fileList) => fileList.length > 0, { message: "No file selected" }),
	join_year: z.coerce.number().int().gte(1900).lte(new Date().getFullYear()),
	content: z.string().min(1, "Content is required"),
	positions: z.string().min(1, { message: "Please enter the positions" }),
	f_or_s: z.enum(["Faculty", "Staff"], {
		message: "Please select Faculty or Staff",
	}),
	education: z.string().min(1, { message: "Please enter the education" }),
	experience: z.coerce.number(),
	teaching: z.string().min(1, { message: "Please enter the teaching" }),
	research: z.string().min(1, { message: "Please enter the research" }),
});

export default function FacultyForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			f_id: "",
			p_id: "",
			b_id: "1",
			pub_id: "",
			media_img_id: "",
			media: undefined,
			content: "",
			join_year: new Date().getFullYear(),
			positions: "",
			f_or_s: "Faculty",
			education: "",
			experience: 0,
			teaching: "",
			research: "",
		},
	});

	const fileRef = form.register("media");

	const handleSubmit = async (data: z.infer<typeof formSchema>) => {
		// Upload the profile picture and get it's media ID
		const file = data.media[0];

		const formData = new FormData();
		formData.append("file", file);
		formData.append("media_type", file.name);

		try {
			const media_request = await fetch(
				`${import.meta.env.VITE_API_BASE_URL}/media/upload`,
				{
					method: "POST",
					body: formData,
				}
			);
			const media_res = await media_request.json();

			if (media_request.ok) {
				const facultyData = {
					p_id: 1, // ! Remove in production -> Get user ID from logged in user
					b_id: 1, // ! Remove in production
					pub_id: "1",
					media_img_id: media_res.media_img_id,
					join_year: data.join_year,
					positions: data.positions,
					f_or_s: data.f_or_s,
					education: data.education,
					experience: data.experience,
					teaching: data.teaching,
					research: data.research,
					content: data.content,
					media: data.media,
				};

				const res = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/faculty/faculty_staff/${1}`, // ! Faculty ID is hardcoded
					{
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(facultyData),
					}
				);
				const res_json = await res.json();
				console.log("res_json", res_json);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="max-h-[80vh] mx-auto">
			<div className="flex items-center gap-3 mb-8">
				<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
					<User className="h-6 w-6 text-primary" />
				</div>
				<div>
					<h2 className="text-2xl font-semibold">Enter your details</h2>
					<p className="text-sm text-gray-500">Specify your details</p>
				</div>
			</div>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className="space-y-6 pb-6">
					<FormField
						control={form.control}
						name="join_year"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="join_year">Year of Joining</FormLabel>
								<FormControl>
									<Input id="join_year" placeholder="Enter year" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="media"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Profile Picture</FormLabel>
								<FormControl>
									<div className="flex flex-col gap-4">
										<div className="flex items-center gap-3">
											<Input
												type="file"
												id={field.name}
												accept="image/*"
												{...fileRef}
												placeholder="Upload Media"
											/>
											<Button
												type="button"
												variant="outline"
												onClick={() =>
													document.getElementById(field.name)?.click()
												}>
												<ImageIcon className="mr-2 h-4 w-4" />
												Browse
											</Button>
										</div>
										{field.value && field.value[0].type.includes("image") && (
											<div className="rounded-lg border bg-card">
												<img
													src={
														URL.createObjectURL(field.value[0]) ||
														"/placeholder.svg"
													}
													alt="Preview"
													className="w-full h-[200px] object-cover rounded-t-lg"
												/>
												<div className="p-3">
													<p className="text-sm text-gray-500">
														Selected file: {field.value[0].name}
													</p>
												</div>
											</div>
										)}{" "}
									</div>
								</FormControl>
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
									<MDEditor
										value={field.value}
										onChange={field.onChange}
										data-color-mode="light"
										preview="edit"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="positions"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="positions">Positions</FormLabel>
								<FormControl>
									<Input
										id="positions"
										placeholder="Enter positions"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="education"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="education">Education</FormLabel>
								<FormControl>
									<Input
										id="education"
										placeholder="Enter education"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="experience"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="experience">Experience</FormLabel>
								<FormControl>
									<Input
										id="experience"
										placeholder="Enter experience"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="teaching"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="teaching">Teaching</FormLabel>
								<FormControl>
									<Input
										id="teaching"
										placeholder="Enter teaching"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="research"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="research">Research</FormLabel>
								<FormControl>
									<Input
										id="research"
										placeholder="Enter research"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="f_or_s"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="f_or_s">Faculty or Staff</FormLabel>
								<FormControl>
									<Select onValueChange={field.onChange} value={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="Select Faculty or Staff" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Faculty">Faculty</SelectItem>
											<SelectItem value="Staff">Staff</SelectItem>
										</SelectContent>
									</Select>
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
		</div>
	);
}

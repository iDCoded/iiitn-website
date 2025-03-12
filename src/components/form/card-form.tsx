import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Check, ImageIcon, PlusCircle } from "lucide-react";
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
	title: z.string().min(1, "Title is required"),
	caption: z.string().min(1, "Description is required"),
	content: z.string().min(1, "Description is required"),
	location: z.string().min(1, "Location is required"),
	preference: z.coerce.number(),
	c_category: z.string().min(1, "Category is required"),
	c_sub_category: z.string().min(1, "Sub-category is required"),
	date: z.date(),
	expiry_date: z.date(),
	media_img_id: z.number().optional(),
	media_vid_id: z.number().optional(),
	media_doc_id: z.number().optional(),
	updated_by: z.number(),
	added_by: z.number(),
	media: z
		.instanceof(FileList)
		.refine((fileList) => fileList.length > 0, { message: "No file selected" }),
});

const deafultSubCategories = {
	News: ["Local", "Global", "College"],
	Events: ["Seminar", "Conference", "Workshop"],
	Announcements: ["Product", "Company", "Industry"],
	Projects: ["Internal", "Client", "Research"],
};

const defaultCategories = ["News", "Events", "Announcements", "Projects"];

export function CardForm() {
	const [categories, setCategories] = useState<string[]>([]);
	const [subcategories, setSubcategories] = useState<Record<string, string[]>>({
		"": [],
	});

	const [categoryInput, setCategoryInput] = useState("");
	const [subcategoryInput, setSubcategoryInput] = useState("");
	const [showCategorySuggestions, setShowCategorySuggestions] = useState(false);
	const [showSubcategorySuggestions, setShowSubcategorySuggestions] =
		useState(false);
	const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
	const [filteredSubcategories, setFilteredSubcategories] = useState<string[]>(
		[]
	);
	const [isNewCategory, setIsNewCategory] = useState(false);
	const [isNewSubcategory, setIsNewSubcategory] = useState(false);

	const categoryRef = useRef<HTMLDivElement>(null);
	const subcategoryRef = useRef<HTMLDivElement>(null);

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			caption: "",
			content: "",
			location: "",
			c_category: "",
			c_sub_category: "",
			media_img_id: 1,
			updated_by: 1,
			added_by: 1,
			media: undefined,
			preference: 0,
		},
	});

	const fileRef = form.register("media");

	useEffect(() => {
		setCategories(defaultCategories);
		setSubcategories(deafultSubCategories);
	}, []);

	// Handle outside clicks to close suggestion dropdowns
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				categoryRef.current &&
				!categoryRef.current.contains(event.target as Node)
			) {
				setShowCategorySuggestions(false);
			}
			if (
				subcategoryRef.current &&
				!subcategoryRef.current.contains(event.target as Node)
			) {
				setShowSubcategorySuggestions(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Filter categories based on input
	useEffect(() => {
		if (categoryInput) {
			const filtered = categories.filter((cat) =>
				cat.toLowerCase().includes(categoryInput.toLowerCase())
			);
			setFilteredCategories(filtered);
			setIsNewCategory(
				filtered.length === 0 || !filtered.includes(categoryInput)
			);
		} else {
			setFilteredCategories(categories);
			setIsNewCategory(false);
		}
	}, [categoryInput, categories]);

	// Filter subcategories based on input and selected category
	useEffect(() => {
		const currentCategory = form.getValues("c_category");
		if (subcategoryInput && currentCategory && subcategories[currentCategory]) {
			const filtered = subcategories[currentCategory].filter((subcat) =>
				subcat.toLowerCase().includes(subcategoryInput.toLowerCase())
			);
			setFilteredSubcategories(filtered);
			setIsNewSubcategory(
				filtered.length === 0 || !filtered.includes(subcategoryInput)
			);
		} else if (currentCategory && subcategories[currentCategory]) {
			setFilteredSubcategories(subcategories[currentCategory]);
			setIsNewSubcategory(false);
		} else {
			setFilteredSubcategories([]);
			setIsNewSubcategory(false);
		}
	}, [subcategoryInput, form, subcategories]);

	// Reset subcategory when category changes
	useEffect(() => {
		const subscription = form.watch((_value, { name }) => {
			if (name === "c_category") {
				form.setValue("c_sub_category", "");
				setSubcategoryInput("");
			}
		});

		return () => subscription.unsubscribe();
	}, [form]);

	const handleCategorySelect = (category: string) => {
		form.setValue("c_category", category);
		setCategoryInput(category);
		setShowCategorySuggestions(false);
		setIsNewCategory(false);
	};

	const handleSubcategorySelect = (subcategory: string) => {
		form.setValue("c_sub_category", subcategory);
		setSubcategoryInput(subcategory);
		setShowSubcategorySuggestions(false);
		setIsNewSubcategory(false);
	};

	const handleSubmit = async (data: z.infer<typeof formSchema>) => {
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
				type CardDataType = {
					c_category: string;
					c_sub_category: string;
					title: string;
					caption: string;
					content: string;
					date: Date;
					location: string;
					updated_by: number;
					updated_time: Date;
					added_by: number;
					added_time: Date;
					preference: number;
					expiry_date: Date;
					visibility: boolean;
					media_img_id?: number;
					media_vid_id?: number;
					media_doc_id?: number;
				};
				let card_data: CardDataType = {
					c_category: data.c_category.toLowerCase(),
					c_sub_category: data.c_sub_category.toLowerCase(),
					title: data.title,
					caption: data.caption,
					content: data.content,
					date: data.date,
					location: data.location,
					updated_by: 1,
					updated_time: new Date(),
					added_by: 1,
					added_time: new Date(),
					preference: data.preference,
					expiry_date: data.expiry_date,
					visibility: false,
				};
				console.log(card_data);

				if (file.type.includes("image")) {
					card_data = { ...card_data, media_img_id: media_res.media_id };
				} else if (file.type.includes("video")) {
					card_data = { ...card_data, media_vid_id: media_res.media_id };
				} else {
					card_data = { ...card_data, media_doc_id: media_res.media_id };
				}

				const card_req = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(card_data),
					}
				);

				const card_res = await card_req.json();

				console.log("Card response", card_res);
			}
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div>
			<div className="flex items-center gap-3 mb-8">
				<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
					<ImageIcon className="h-6 w-6 text-primary" />
				</div>
				<div>
					<h2 className="text-2xl font-semibold">Create a card</h2>
					<p className="text-sm text-gray-500">Add a new card to the website</p>
				</div>
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input placeholder="Enter the title" {...field} />
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
									<Input placeholder="Enter the caption" {...field} />
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
						name="media"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Media</FormLabel>
								<FormControl>
									<div className="flex flex-col gap-4">
										<div className="flex items-center gap-3">
											<Input
												type="file"
												id={field.name}
												accept="*"
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
					<div className="flex flex-row justify-around gap-2">
						<FormField
							control={form.control}
							name="location"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Location</FormLabel>
									<FormControl>
										<Input placeholder="Enter the location" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="preference"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Preference</FormLabel>
									<FormControl>
										<Input
											placeholder="Specify the preference"
											{...field}
											type="number"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="flex flex-row justify-around gap-2">
						<FormField
							control={form.control}
							name="expiry_date"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Expiry Date</FormLabel>
									<FormControl>
										<Input
											type="date"
											placeholder="Enter the date"
											{...field}
											value={
												field.value
													? field.value.toISOString().split("T")[0]
													: ""
											}
											onChange={(e) => field.onChange(new Date(e.target.value))}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="date"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Date</FormLabel>
									<FormControl>
										<Input
											type="date"
											placeholder="Enter the date"
											{...field}
											value={
												field.value
													? field.value.toISOString().split("T")[0]
													: ""
											}
											onChange={(e) => field.onChange(new Date(e.target.value))}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="flex flex-row justify-around gap-2">
						<FormField
							control={form.control}
							name="c_category"
							render={({ field }) => (
								<FormItem className="w-full relative" ref={categoryRef}>
									<FormLabel>Category</FormLabel>
									<FormControl>
										<div>
											<Input
												placeholder="Enter or select category"
												value={categoryInput}
												onChange={(e) => {
													setCategoryInput(e.target.value);
													field.onChange(e.target.value);
													setShowCategorySuggestions(true);
												}}
												onFocus={() => setShowCategorySuggestions(true)}
											/>
											{showCategorySuggestions && (
												<div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
													{filteredCategories.length > 0 ? (
														filteredCategories.map((category) => (
															<div
																key={category}
																className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
																onClick={() => handleCategorySelect(category)}>
																<Check
																	className={cn(
																		"mr-2 h-4 w-4",
																		field.value === category
																			? "opacity-100"
																			: "opacity-0"
																	)}
																/>
																{category}
															</div>
														))
													) : (
														<div className="px-4 py-2 text-sm flex items-center gap-2">
															<PlusCircle className="h-4 w-4" />
															<span>Create "{categoryInput}"</span>
														</div>
													)}
												</div>
											)}
										</div>
									</FormControl>
									{isNewCategory && categoryInput && (
										<p className="text-xs text-blue-500 mt-1">
											New category will be created upon submission
										</p>
									)}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="c_sub_category"
							render={({ field }) => (
								<FormItem className="w-full relative" ref={subcategoryRef}>
									<FormLabel>Sub-category</FormLabel>
									<FormControl>
										<div>
											<Input
												placeholder="Enter or select sub-category"
												value={subcategoryInput}
												onChange={(e) => {
													setSubcategoryInput(e.target.value);
													field.onChange(e.target.value);
													setShowSubcategorySuggestions(true);
												}}
												onFocus={() => setShowSubcategorySuggestions(true)}
												disabled={!form.getValues("c_category")}
											/>
											{showSubcategorySuggestions &&
												form.getValues("c_category") && (
													<div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
														{filteredSubcategories.length > 0 ? (
															filteredSubcategories.map((subcategory) => (
																<div
																	key={subcategory}
																	className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
																	onClick={() =>
																		handleSubcategorySelect(subcategory)
																	}>
																	<Check
																		className={cn(
																			"mr-2 h-4 w-4",
																			field.value === subcategory
																				? "opacity-100"
																				: "opacity-0"
																		)}
																	/>
																	{subcategory}
																</div>
															))
														) : subcategoryInput ? (
															<div className="px-4 py-2 text-sm flex items-center gap-2">
																<PlusCircle className="h-4 w-4" />
																<span>Create "{subcategoryInput}"</span>
															</div>
														) : (
															<div className="px-4 py-2 text-sm">
																No subcategories available
															</div>
														)}
													</div>
												)}
										</div>
									</FormControl>
									{isNewSubcategory && subcategoryInput && (
										<p className="text-xs text-blue-500 mt-1">
											New subcategory will be created upon submission
										</p>
									)}
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button type="submit">Create Card</Button>
				</form>
			</Form>
		</div>
	);
}

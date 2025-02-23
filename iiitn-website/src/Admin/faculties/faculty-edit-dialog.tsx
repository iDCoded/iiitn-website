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
import { Faculty } from "@/interfaces/types";
import { Input } from "@/components/ui/input";
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

const schema = z.object({
	p_id: z.number(),
	d_id: z.string(),
	join_year: z
		.string()
		.regex(/^\d{4}$/, { message: "Please enter a valid year" }),
	positions: z.string().min(1, { message: "Please enter the positions" }),
	f_or_s: z.enum(["Faculty", "Staff"], {
		message: "Please select Faculty or Staff",
	}),
});

type FormData = z.infer<typeof schema>;

const FacultyEditDialog = ({ faculty }: { faculty: Faculty }) => {
	const form = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			p_id: faculty.p_id,
			d_id: faculty.d_id?.toString(),
			join_year: faculty.join_year.toString(),
			positions: faculty.positions,
			f_or_s: faculty.f_or_s,
		},
	});

	const onSubmit = async (data: FormData) => {
		await fetch(`http://localhost:5000/faculty/faculty_staff/${faculty.f_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost">Edit Faculty</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit Faculty</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="p_id"
							render={({ field }) => (
								<FormItem className="space-y-2">
									<FormLabel htmlFor="p_id">ID</FormLabel>
									<FormControl>
										<Input
											id="p_id"
											placeholder="Enter ID"
											{...field}
											type="number"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="d_id"
							render={({ field }) => (
								<FormItem className="space-y-2">
									<FormLabel htmlFor="d_id">Department ID</FormLabel>
									<FormControl>
										<Input
											type="number"
											id="d_id"
											placeholder="Enter Department ID"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
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
							name="f_or_s"
							render={({ field }) => (
								<FormItem className="space-y-2">
									<FormLabel htmlFor="f_or_s">Faculty or Staff</FormLabel>
									<FormControl>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}>
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
			</DialogContent>
		</Dialog>
	);
};

export default FacultyEditDialog;

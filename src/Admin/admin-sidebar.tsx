import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { ChevronsUpDown, User } from "lucide-react";
import FacultyEditDialog from "./faculties/faculty-edit-dialog";
import { Faculty } from "@/interfaces/types";

interface AdminSidebarProps {
	data?: {
		navMain: {
			title: string;
			url: string;
			items?: {
				title: string;
				url: string;
			}[];
		}[];
	};
	activeItem: string | null;
}

export function AdminSidebar({
	data = { navMain: [] },
	activeItem,
}: AdminSidebarProps) {
	const handleItemClick = (url: string) => {
		console.log("URL: ", url);
		// Handle item click if needed
	};

	const testFaculty: Faculty = {
		f_id: "",
		p_id: "",
		d_id: "",
		pub_id: "",
		name: "",
		email: "",
		phone_no: "",
		media_img_id: 0,
		join_year: 0,
		positions: "",
		education: "",
		experience: 0,
		teaching: "",
		research: "",
		f_or_s: "Faculty",
	};

	return (
		<Sidebar>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="#">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<User className="size-4" />
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-semibold">Admin Panel</span>
									<span className="">v1.0.0</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						{data.navMain.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild>
									<a
										href={item.url}
										className="font-medium"
										onClick={() => handleItemClick(item.url)}>
										{item.title}
									</a>
								</SidebarMenuButton>
								{item.items?.length ? (
									<SidebarMenuSub>
										{item.items.map((subItem) => (
											<SidebarMenuSubItem key={subItem.title}>
												<SidebarMenuSubButton
													asChild
													isActive={activeItem === subItem.url}
													onClick={() => handleItemClick(subItem.url)}>
													<a href={subItem.url}>{subItem.title}</a>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								) : null}
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton
									size="lg"
									className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
									<span>Profile</span>
									<ChevronsUpDown className="ml-auto size-4" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent side="right" align="end" sideOffset={8}>
								<DropdownMenuLabel>Faculty</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild>
									<Dialog>
										<DialogTrigger asChild>
											<Button
												variant={"secondary"}
												className="bg-primary"
												size={"lg"}>
												<p>Edit your details</p>
											</Button>
										</DialogTrigger>
										<DialogContent>
											<DialogHeader>
												<DialogTitle>Edit your details</DialogTitle>
											</DialogHeader>
											<FacultyEditDialog faculty={testFaculty} />
										</DialogContent>
									</Dialog>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			{data.navMain.length > 0 && <SidebarRail />}
		</Sidebar>
	);
}

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
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
import { User as Faculty } from "@/interfaces/types";
import { ChevronUp, User, User2 } from "lucide-react";
// // import { Faculty } from "@/interfaces/types";

interface FacultySidebarProps {
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
	faculty: Faculty;
}

export function FacultySidebar({
	data = { navMain: [] },
	activeItem,
	faculty,
}: FacultySidebarProps) {
	const handleItemClick = (url: string) => {
		console.log("URL: ", url);
		// Handle item click if needed
	};

	// ! Dummy faculty object
	// ! This faculty will be fetched accessing the logged in faculty member's information (f_id).
	// // const testFaculty: Faculty = {
	// // 	f_id: "",
	// // 	p_id: "",
	// // 	d_id: "",
	// // 	pub_id: "",
	// // 	name: "",
	// // 	email: "",
	// // 	phone_no: "",
	// // 	media_img_id: 0,
	// // 	join_year: 0,
	// // 	positions: "",
	// // 	education: "",
	// // 	experience: 0,
	// // 	teaching: "",
	// // 	research: "",
	// // 	f_or_s: "Faculty",
	// // };

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
								<SidebarMenuButton>
									<User2 /> {faculty.name}{" "}
									{import.meta.env.DEV && <div>| {faculty.id}</div>}
									<ChevronUp className="ml-auto" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent side="top">
								<DropdownMenuItem>
									<span>Sign out</span>
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

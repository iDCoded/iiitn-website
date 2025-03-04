import {
	Sidebar,
	SidebarContent,
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
import { User } from "lucide-react";

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
			{data.navMain.length > 0 && <SidebarRail />}
		</Sidebar>
	);
}

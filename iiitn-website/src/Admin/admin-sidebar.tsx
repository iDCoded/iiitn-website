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

const data = {
	navMain: [
		{
			title: "Announcements",
			url: "#",
			items: [
				{
					title: "Events",
					url: "#",
					isActive: true,
				},
				{
					title: "Media",
					url: "#",
				},
			],
		},
		{
			title: "Faculty",
			url: "#",
			items: [
				{
					title: "Manage Faculty",
					url: "#",
				},
			],
		},
	],
};

export function AdminSidebar() {
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
									<a href={item.url} className="font-medium">
										{item.title}
									</a>
								</SidebarMenuButton>
								{item.items?.length ? (
									<SidebarMenuSub>
										{item.items.map((item) => (
											<SidebarMenuSubItem key={item.title}>
												<SidebarMenuSubButton asChild isActive={item.isActive}>
													<a href={item.url}>{item.title}</a>
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
			<SidebarRail />
		</Sidebar>
	);
}

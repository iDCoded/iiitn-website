import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./admin-sidebar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorBoundary from "./error-boundary";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const sidebarData = {
	navMain: [
		{
			title: "Updates",
			url: "#",
			items: [
				{
					title: "Card",
					url: "#card",
				},
				{
					title: "Media",
					url: "#media",
				},
			],
		},
		{
			title: "Profiles",
			url: "#",
			items: [
				{
					title: "View All Users",
					url: "#users",
				},
				{
					title: "View All Faculty",
					url: "#allfaculty",
				},
			],
		},
		{
			title: "Publications",
			url: "#",
			items: [
				{
					title: "View All Publications",
					url: "#publications",
				},
			],
		},
	],
};

// Extract valid hashes dynamically from sidebarData
const validHashes = sidebarData.navMain.flatMap((section) =>
	section.items.map((item) => item.url)
);

export default function AdminDashboard({
	children,
}: {
	children: React.ReactNode;
}) {
	const [sidebar, setSidebar] = useState<string | null>(null);
	const [lastSelected, setLastSelected] = useState<string | null>("#card");

	const location = useLocation();

	useEffect(() => {
		if (validHashes.includes(location.hash)) {
			setSidebar(location.hash);
			setLastSelected(location.hash);
		} else {
			setSidebar(lastSelected);
		}
	}, [location, lastSelected]);

	return (
		<ErrorBoundary>
			<SidebarProvider>
				<div className="flex min-h-screen w-full">
					<AdminSidebar activeItem={sidebar} data={sidebarData} />
					<main className="flex-1 relative">
						<TooltipProvider>
							<Tooltip delayDuration={800}>
								<TooltipTrigger className="absolute top-4 left-4" asChild>
									<SidebarTrigger />
								</TooltipTrigger>
								<TooltipContent>Toggle Sidebar</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<div className="min-h-screen py-12 px-6 flex items-center justify-center">
							<div className="w-full max-w-4xl">{children}</div>
						</div>
					</main>
				</div>
			</SidebarProvider>
		</ErrorBoundary>
	);
}

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./admin-sidebar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const sidebarData = {
	navMain: [
		{
			title: "Announcements",
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
			title: "Faculty",
			url: "#",
			items: [
				{
					title: "Create Faculty",
					url: "#faculty",
				},
				{
					title: "View All Faculty",
					url: "#allfaculty",
				},
			],
		},
	],
};

export default function AdminDashboard({
	children,
}: {
	children: React.ReactNode;
}) {
	const [sidebar, setSidebar] = useState<string | null>(null);
	const [lastSelected, setLastSelected] = useState<string | null>("#card");

	const location = useLocation();
	useEffect(() => {
		console.log("hash", location.hash);
		if (
			location.hash === "#card" ||
			location.hash === "#media" ||
			location.hash === "#faculty" ||
			location.hash === "#allfaculty"
		) {
			setSidebar(location.hash);
			setLastSelected(location.hash);
		} else {
			setSidebar(lastSelected);
		}
	}, [location, lastSelected]);

	return (
		<SidebarProvider>
			<div className="flex min-h-screen w-full">
				<AdminSidebar activeItem={sidebar} data={sidebarData} />
				<main className="flex-1 relative">
					<SidebarTrigger className="absolute top-4 left-4" />
					<div className="min-h-screen py-12 px-6 flex items-center justify-center">
						<div className="w-full max-w-4xl">{children}</div>
					</div>
				</main>
			</div>
		</SidebarProvider>
	);
}

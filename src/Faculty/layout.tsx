import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FacultySidebar } from "./faculty-sidebar";
import ErrorBoundary from "./error-boundary";

const sidebarData = {
	navMain: [
		{
			title: "Profile",
			url: "#",
			items: [
				{
					title: "Edit you profile",
					url: "#profile",
				},
			],
		},
		{
			title: "Publications",
			url: "#",
			items: [
				{
					title: "Publications",
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

export default function FacultyDashboard({
	children,
}: {
	children: React.ReactNode;
}) {
	const [sidebar, setSidebar] = useState<string | null>("#profile");
	const [lastSelected, setLastSelected] = useState<string | null>("#profile");

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
					<FacultySidebar activeItem={sidebar} data={sidebarData} />
					<main className="flex-1 relative">
						<SidebarTrigger className="absolute top-4 left-4" />
						<div className="min-h-screen py-12 px-6 flex items-center justify-center">
							<div className="w-full max-w-4xl">{children}</div>
						</div>
					</main>
				</div>
			</SidebarProvider>
		</ErrorBoundary>
	);
}

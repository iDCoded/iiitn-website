import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./admin-sidebar";

export default function AdminDashboard({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider>
			<div className="flex min-h-screen w-full">
				<AdminSidebar activeItem={null} />
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

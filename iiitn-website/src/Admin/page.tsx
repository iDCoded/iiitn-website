import { useState } from "react";
import {
	BellRing,
	Calendar,
	ImageIcon,
	Home,
	LogOut,
	Menu,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnnouncementForm } from "@/components/form/announcement-form";
import { EventForm } from "@/components/form/event-form";
import { ImageUpload } from "@/components/form/image-upload";

export default function AdminDashboard() {
	const [activeTab, setActiveTab] = useState("announcements");
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const menuItems = [
		{ id: "announcements", label: "Announcements", icon: BellRing },
		{ id: "events", label: "Events", icon: Calendar },
		{ id: "images", label: "Image Upload", icon: ImageIcon },
	];

	const handleMenuItemClick = (id: string) => {
		setActiveTab(id);
		setSidebarOpen(false); // Close the sidebar
	};

	return (
		<div className="flex h-screen bg-gray-50">
			{/* Sidebar */}
			<div
				className={`fixed inset-0 z-40 lg:static lg:inset-auto lg:z-auto lg:flex lg:w-64 bg-white border-r border-gray-200 flex-col ${
					sidebarOpen ? "block" : "hidden"
				}`}>
				<div className="p-4 border-b">
					<h1 className="text-xl font-semibold flex items-center gap-2">
						<Home className="h-5 w-5" />
						Admin Panel
					</h1>
				</div>

				{/* Navigation */}
				<nav className="flex-1 p-4">
					<div className="space-y-1">
						{menuItems.map((item) => (
							<Button
								key={item.id}
								variant={activeTab === item.id ? "default" : "ghost"}
								className={`w-full justify-start ${
									activeTab === item.id ? "" : "hover:bg-gray-100"
								}`}
								onClick={() => handleMenuItemClick(item.id)}>
								<item.icon className="mr-2 h-4 w-4" />
								{item.label}
							</Button>
						))}
					</div>
				</nav>

				{/* User Profile */}
				<div className="p-4 border-t">
					<div className="flex items-center gap-3 mb-3">
						<Avatar>
							<AvatarImage src="/avatar.svg" />
							<AvatarFallback>AD</AvatarFallback>
						</Avatar>
						<div className="flex-1 min-w-0">
							<p className="text-sm font-medium">Admin User</p>
							<p className="text-xs text-gray-500 truncate">
								admin@iiitn.ac.in
							</p>
						</div>
					</div>
					<Button
						variant="ghost"
						size="sm"
						className="w-full justify-start text-red-600 hover:text-red-600 hover:bg-red-50">
						<LogOut className="mr-2 h-4 w-4" />
						Logout
					</Button>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 overflow-auto">
				<div className="p-8">
					{/* Toggle Sidebar Button */}
					<Button
						variant="ghost"
						className="lg:hidden mb-4"
						onClick={() => setSidebarOpen(!sidebarOpen)}>
						<Menu className="mr-2 h-5 w-5" />
						Menu
					</Button>
					<Card>
						<CardContent className="p-6">
							{activeTab === "announcements" && <AnnouncementForm />}
							{activeTab === "events" && <EventForm />}
							{activeTab === "images" && <ImageUpload />}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

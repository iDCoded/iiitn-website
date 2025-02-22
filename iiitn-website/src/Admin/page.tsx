import { EventForm } from "@/components/form/event-form";
import { FacultyForm } from "@/components/form/faculty-form";
import { ImageUpload } from "@/components/form/image-upload";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AdminSidebar } from "./admin-sidebar";

const sidebarData = {
	navMain: [
		{
			title: "Announcements",
			url: "#",
			items: [
				{
					title: "Events",
					url: "#events",
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
					title: "Manage Faculty",
					url: "#faculty",
				},
			],
		},
	],
};

const AdminPage = () => {
	const [sidebar, setSidebar] = useState<string | null>(null);
	const [lastSelected, setLastSelected] = useState<string | null>("#events");

	const location = useLocation();
	useEffect(() => {
		console.log("hash", location.hash);
		if (
			location.hash === "#events" ||
			location.hash === "#media" ||
			location.hash === "#faculty"
		) {
			setSidebar(location.hash);
			setLastSelected(location.hash);
		} else {
			setSidebar(lastSelected);
		}
	}, [location, lastSelected]);

	return (
		<>
			<div className="px-8 flex justify-center items-center">
				<AdminSidebar data={sidebarData} activeItem={sidebar} />
				<Card className="w-5xl">
					<CardContent className="p-6">
						{sidebar === "#events" && <EventForm />}
						{sidebar === "#media" && <ImageUpload />}
						{sidebar === "#faculty" && <FacultyForm />}
					</CardContent>
				</Card>
			</div>
		</>
	);
};

export default AdminPage;

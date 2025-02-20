import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AnnouncementForm } from "@/components/form/announcement-form";
import { EventForm } from "@/components/form/event-form";
import { ImageUpload } from "@/components/form/image-upload";
import { BellRing, Calendar, ImageIcon } from "lucide-react";

export default function AdminDashboard() {
	return (
		<div className="container mx-auto p-6">
			<h1 className="text-3xl font-bold mb-6">College Admin Dashboard</h1>
			<Tabs defaultValue="announcements" className="space-y-4">
				<TabsList className="grid w-full grid-cols-3">
					<TabsTrigger value="announcements">
						<BellRing className="mr-2 h-4 w-4" />
						Announcements
					</TabsTrigger>
					<TabsTrigger value="events">
						<Calendar className="mr-2 h-4 w-4" />
						Events
					</TabsTrigger>
					<TabsTrigger value="images">
						<ImageIcon className="mr-2 h-4 w-4" />
						Image Upload
					</TabsTrigger>
				</TabsList>
				<TabsContent value="announcements">
					<Card>
						<CardHeader>
							<CardTitle>Create Announcement</CardTitle>
							<CardDescription>
								Create a new announcement for the college website.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<AnnouncementForm />
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value="events">
					<Card>
						<CardHeader>
							<CardTitle>Create Event</CardTitle>
							<CardDescription>
								Add a new event to the college calendar.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<EventForm />
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value="images">
					<Card>
						<CardHeader>
							<CardTitle>Upload Image</CardTitle>
							<CardDescription>
								Upload images to the college website gallery.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ImageUpload />
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}

import { AnnouncementForm } from "@/components/form/announcement-form";
import { Card, CardContent } from "@/components/ui/card";

const AdminPage = () => {
	return (
		<div className="px-8 flex justify-center items-center">
			<Card className="w-5xl">
				<CardContent className="p-6">
					<AnnouncementForm />
				</CardContent>
			</Card>
		</div>
	);
};

export default AdminPage;

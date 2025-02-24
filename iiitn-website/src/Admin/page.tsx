import { FacultyForm } from "@/components/form/faculty-form";
import { ImageUpload } from "@/components/form/image-upload";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FacultyTablePage from "./faculties/page";
import CardTablePage from "./cards/page";

const validHashes = ["#card", "#media", "#faculty", "#allfaculty"];

const AdminPage = () => {
	const [sidebar, setSidebar] = useState<string | null>("#card");
	const location = useLocation();

	useEffect(() => {
		if (validHashes.includes(location.hash)) {
			setSidebar(location.hash);
		}
	}, [location]);

	return (
		<div className="px-8 flex justify-center items-center">
			{sidebar === "#media" && (
				<Card className="w-5xl">
					<CardContent className="p-6">
						<ImageUpload />
					</CardContent>
				</Card>
			)}
			{sidebar === "#faculty" && (
				<Card className="w-5xl">
					<CardContent className="p-6">
						<FacultyForm />
					</CardContent>
				</Card>
			)}
			{sidebar === "#card" && <CardTablePage />}
			{sidebar === "#allfaculty" && <FacultyTablePage />}
		</div>
	);
};

export default AdminPage;

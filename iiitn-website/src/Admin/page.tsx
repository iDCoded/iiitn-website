import CardForm from "@/components/form/event-form";
import { FacultyForm } from "@/components/form/faculty-form";
import { ImageUpload } from "@/components/form/image-upload";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FacultyTablePage from "./faculties/page";

const AdminPage = () => {
	const [sidebar, setSidebar] = useState<string | null>(null);
	const [lastSelected, setLastSelected] = useState<string | null>("#events");

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
		<>
			<div className="px-8 flex justify-center items-center">
				{sidebar !== "#allfaculty" && (
					<Card className="w-5xl">
						<CardContent className="p-6">
							{sidebar === "#card" && <CardForm onSubmit={undefined} />}
							{sidebar === "#media" && <ImageUpload />}
							{sidebar === "#faculty" && <FacultyForm />}
						</CardContent>
					</Card>
				)}

				{sidebar === "#allfaculty" && <FacultyTablePage />}
			</div>
		</>
	);
};

export default AdminPage;

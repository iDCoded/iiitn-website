import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FacultyTablePage from "./faculties/page";
import CardTablePage from "./cards/page";
import MediaTablePage from "./media/page";
import UserTablePage from "./users/page";
import FacultyPublicationsTablePage from "@/Faculty/publications/page";

const validHashes = [
	"#card",
	"#media",
	"#users",
	"#allfaculty",
	"#publications",
];

const AdminPage = () => {
	const [sidebar, setSidebar] = useState<string | null>(validHashes[0]);
	const location = useLocation();

	useEffect(() => {
		if (validHashes.includes(location.hash)) {
			setSidebar(location.hash);
		}
	}, [location]);

	return (
		<div className="px-8 flex justify-center items-center">
			{sidebar === "#users" && <UserTablePage />}
			{sidebar === "#card" && <CardTablePage />}
			{sidebar === "#media" && <MediaTablePage />}
			{sidebar === "#allfaculty" && <FacultyTablePage />}
			{sidebar === "#publications" && <FacultyPublicationsTablePage />}
		</div>
	);
};

export default AdminPage;

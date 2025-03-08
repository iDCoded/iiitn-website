import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FacultyProfileForm from "./faculty-profile-form";
import FacultyPublicationsTablePage from "./publications/page";

const validHashes = ["#profile", "#publications"];

const FacultyPage = () => {
	const [sidebar, setSidebar] = useState<string | null>(validHashes[0]);
	const location = useLocation();

	useEffect(() => {
		if (validHashes.includes(location.hash)) {
			setSidebar(location.hash);
		}
	}, [location]);

	return (
		<div className="px-8 flex justify-center items-center">
			{sidebar === "#profile" && <FacultyProfileForm />}
			{sidebar === "#publications" && <FacultyPublicationsTablePage />}
		</div>
	);
};

export default FacultyPage;

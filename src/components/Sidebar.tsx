import { useNavigate } from "react-router-dom";

interface SidebarProps {
	sections: { id: string; title: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
	const navigate = useNavigate();
	return (
		<aside className="hidden md:block sticky top-20 self-start">
			<div className="p-4 border rounded-lg shadow-sm bg-white">
				<h2 className="text-lg font-semibold mb-3 text-gray-800">
					Quick Links
				</h2>
				<ul className="space-y-2 divide-y divide-gray-200">
					{sections.map((section) => (
						<li key={section.id} className="pt-2">
							<a
								onClick={() => navigate(`#${section.id}`)}
								className="block text-gray-700 hover:text-accent transition">
								{section.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;

interface DepartmentCardProps {
    title: string;
    description: string;
    link: string;
}

function DepartmentCard({ title, description, link }: DepartmentCardProps) {
    return (
        <div className="shadow-lg w-[32rem] h-[24rem] m-6 rounded-lg overflow-hidden flex flex-col">
            <div className="bg-[#002147] text-white p-5">
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <div className="p-6 bg-white flex flex-col justify-between h-full">
                <p className="text-gray-700 text-base overflow-hidden flex-grow">
                    {description}
                </p>
                <div className="mt-4">
                    <a 
                        href={link} 
                        className="inline-block text-[#E87722] font-semibold text-lg hover:underline"
                    >
                        Learn More →
                    </a>
                </div>
            </div>
        </div>
    );
}

export { DepartmentCard };

interface DepartmentCardProps {
    title: string;
    imageSrc: string; // Image source prop
    description: string; // Text moved below the image
    link: string;
}

function DepartmentCard({ title, imageSrc, description, link }: DepartmentCardProps) {
    return (
        <div className="shadow-lg w-[24rem] h-[34rem] m-6 rounded-lg overflow-hidden flex flex-col bg-white">
            {/* Title Section */}
            <div className="bg-[#002147] text-white p-5">
                <h2 className="text-xl font-bold">{title}</h2>
            </div>

            {/* Image Section */}
            <div className="w-full h-60 overflow-hidden flex justify-center items-center p-4">
                <img 
                    src={imageSrc} 
                    alt={title} 
                    className="w-full h-full object-cover rounded-md"
                />
            </div>

            {/* Description Below Image */}
            <div className="px-4 pb-4 text-center flex-grow ">
                <p className="text-gray-700 text-sm sm:text-base">{description}</p>
            </div>

            {/* Learn More Link */}
            <div className="px-4 pb-4 text-center">
                <a
                    href={link}
                    className="text-[#E87722] font-semibold text-base hover:underline inline-flex items-center group"
                >
                    Learn More
                    <span className="ml-2 inline-block transform rotate-[-45deg] transition-transform duration-300 ease-in-out group-hover:rotate-0">
                        →
                    </span>
                </a>
            </div>
        </div>
    );
}

export { DepartmentCard };

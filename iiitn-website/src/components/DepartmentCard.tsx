interface DepartmentCardProps {
    title: string;
    imageSrc: string;
    description: string;
    link: string;
}

function DepartmentCard({ title, imageSrc, description, link }: DepartmentCardProps) {
    return (
        <div className="relative w-96 bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group flex flex-col">
            {/* Image Section */}
            <div className="relative w-full h-64 overflow-hidden">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 scale-105 group-hover:scale-100"
                />
                {/* Overlay Effect on Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h2 className="text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {description}
                </p>

                {/* Learn More Button at the Bottom */}
                <div className="mt-4">
                    <a
                        href={link}
                        className="inline-flex items-center justify-center w-full py-2 text-white bg-accent font-semibold text-base rounded-md transition-all duration-300 hover:bg-[#d1651d] hover:shadow-md"
                    >
                        Learn More
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export { DepartmentCard };

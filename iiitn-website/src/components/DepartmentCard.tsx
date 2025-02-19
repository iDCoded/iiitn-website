interface DepartmentCardProps {
    title: string;
    imageSrc: string; // Image source prop
    overlayText: string; // Text to display on hover
    link: string;
}

function DepartmentCard({ title, imageSrc, overlayText, link }: DepartmentCardProps) {
    return (
        <div className="shadow-lg w-[24rem] h-[32rem] m-6 rounded-lg overflow-hidden flex flex-col ">
            <div className="bg-[#002147] text-white p-5">
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <div className="flex-grow bg-white flex flex-col relative">
                {/* Image Section */}
                <div className="relative group ">
                    <div className="flex justify-center items-center mt-4">
                    <img 
                        src={imageSrc} 
                        alt={title} 
                        className=" object-cover transition duration-300 ease-in-out group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 ml-4">
                        <span className="text-black text-lg">{overlayText}</span>
                    </div>
                    </div>
                    
                </div>

                <a 
                    href={link} 
                    className="text-[#E87722] font-semibold text-lg hover:underline mt-2 p-4"
                >
                    Learn More →
                </a>
            </div>
        </div>
    );
}


export { DepartmentCard };

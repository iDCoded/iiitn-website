const ShimmerLoader = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
			{Array.from({ length: 6 }).map((_, index) => (
				<div key={index} className="bg-gray-800/50 animate-pulse rounded-xl h-60 w-full"></div>
			))}
		</div>
	);
};

export default ShimmerLoader;
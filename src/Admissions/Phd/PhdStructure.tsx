
const PhDStructure = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Programme Features */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">Programme Features</h2>
                <ul className="list-disc pl-6 mt-4 text-gray-700">
                    <li><strong>M.Tech Holders:</strong> 6 credits</li>
                    <li><strong>B.Tech Holders:</strong> 12 credits</li>
                    <li>Credits can be earned through <strong>MOOCs</strong> (NPTEL, Coursera, edX, etc.)</li>
                </ul>
            </section>

            {/* Research Areas */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">Research Areas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                    <div>
                        <h3 className="text-lg font-semibold">CSE & IT</h3>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li>Machine Learning</li>
                            <li>Artificial Intelligence</li>
                            <li>Big Data Analytics</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">ECE</h3>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li>Wireless Sensor Networks</li>
                            <li>Microwave & Antennas</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PhDStructure;

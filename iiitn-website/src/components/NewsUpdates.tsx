import { Card, CardContent, CardTitle } from "./ui/card";

const newsData = [
    {
        title: "Hackathon 2025 Announced!",
        description: "Join us for an exciting coding challenge!",
        date: "14 Feb 2025",
        category: "Event",
        image: "/images/hackathon.jpg",
    },
    {
        title: "Admissions Open",
        description: "Apply now for B.Tech, M.Tech, and Ph.D. programs.",
        date: "12 Feb 2025",
        category: "Announcement",
        image: "/images/admissions.jpg",
    },
    {
        title: "New Research in AI",
        description: "Breakthrough research in deep learning from IIIT Nagpur.",
        date: "11 Feb 2025",
        category: "Press Release",
        image: "/images/ai-research.jpg",
    },
];

const NewsUpdates = () => {
    return (
        <section className="py-16 px-6 bg-gray-100">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">
                    <span className="text-red-600">|</span> News
                </h2>
                <a href="/news" className="text-red-600 hover:underline text-sm">
                    View All &gt;
                </a>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newsData.map((news, index) => (
                    <Card key={index} className="shadow-lg hover:shadow-2xl transition duration-300">
                        <img src={news.image} alt={news.title} className="w-full h-48 object-cover rounded-t-lg" />
                        <CardContent className="p-4">
                            <CardTitle className="text-lg font-bold">{news.title}</CardTitle>
                            <p className="text-gray-600">{news.description}</p>
                            <div className="mt-3 text-sm text-gray-500">
                                {news.date} | {news.category}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default NewsUpdates;

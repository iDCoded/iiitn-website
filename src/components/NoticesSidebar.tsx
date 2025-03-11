import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Notice {
    title: string;
    link: string;
    m_sub_category?: string;
    media_doc_id?: string;
}

interface NoticesSidebarProps {
    category: "student" | "faculty";
}


const NoticesSidebar = ({ category }: NoticesSidebarProps) => {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/notices`);
                const data: Notice[] = await response.json();
                
                // Filter notices based on category
                const filteredNotices = data
                    .filter((item) => item.m_sub_category === category)
                    .slice(0, 3) // Get latest 3 notices
                    .map((notice) => ({
                        title: notice.title,
                        link: `${import.meta.env.VITE_API_BASE_URL}/media/${notice.media_doc_id}`,
                    }));

                setNotices(filteredNotices);
            } catch (error) {
                console.error("Failed to fetch notices", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNotices();
    }, [category]);

    return (
        <div className="space-y-6">
            {loading ? (
                <div className="space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
            ) : notices.length > 0 ? (
                <ul className="space-y-2 text-sm px-6">
                    {notices.map((notice, index) => (
                        <li key={index}>
                            <a
                                href={notice.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:underline line-clamp-1"
                            >
                                {notice.title}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600 text-sm">No recent notices.</p>
            )}
        </div>
    );
};

export default NoticesSidebar;

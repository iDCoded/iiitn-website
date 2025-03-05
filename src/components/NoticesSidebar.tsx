import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"; // Placeholder for loading state

const NoticesSidebar = () => {
    const [notices, setNotices] = useState<{ title: string; link: string }[]>([
        { title: "Notice 1", link: "#" },
        { title: "Notice 2", link: "#" },
        { title: "Notice 3", link: "#" },
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Placeholder API route for fetching notices
        fetch("/api/student-notices")
            .then((res) => res.json())
            .then((data) => {
                setNotices(data.slice(0, 5)); // Displaying first 5 notices
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

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
                                <a href={notice.link} className="text-accent hover:underline line-clamp-1">
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

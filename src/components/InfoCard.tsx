import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const InfoCard = ({ title, content }: { title: string; content: string | string[] }) => (
    <Card className="shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-all">
        <CardHeader className="bg-accent text-white p-5 rounded-t-lg">
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-gray-700">
            {Array.isArray(content) ? (
                <ul className="list-disc list-inside space-y-2">
                    {content.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            ) : (
                <p>{content}</p>
            )}
        </CardContent>
    </Card>
);

export default InfoCard;
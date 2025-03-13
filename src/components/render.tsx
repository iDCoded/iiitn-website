import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Card {
    title?: string;
    c_category?: string;
    c_sub_category?: string;
    caption?: string;
    content?: string;
    date?: string;
    location?: string;
    media_img_id?: string;
    media_vid_id?: string;
    media_doc_id?: string;
    updated_by?: string;
    updated_time?: string;
    added_by?: string;
    added_time?: string;
    visibility?: string;
    preference?: string;
    expiry_date?: string;
}

const CardDetails = ({ card }: { card: Card }) => {
    return (
        <div className="max-w-4xl md:w-4xl sm:w-xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-lg">
            {/* Image Section */}
            {card.media_img_id && (
                <div className="mb-6">
                    <img
                        src={card.media_img_id}
                        alt="Card Image"
                        className="w-full h-48 sm:h-96 object-cover rounded-lg shadow-md"
                    />
                </div>
            )}

            {/* Secondary Info: Category, Date, Location */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-600 text-sm mb-6">
                <div className="mb-2 sm:mb-0">
                    {card.c_category && (
                        <span className="text-primary font-semibold">{card.c_category}</span>
                    )}
                    {card.c_sub_category && <span> / {card.c_sub_category}</span>}
                </div>
                <div>
                    {card.date && <span className="mr-4">📅 {card.date}</span>}
                    {card.location && <span>📍 {card.location}</span>}
                </div>
            </div>

            {/* Title */}
            {card.title && (
                <h1 className="text-2xl sm:text-4xl font-extrabold text-primary mb-4">{card.title}</h1>
            )}

            {/* Caption */}
            {card.caption && (
                <p className="text-lg sm:text-xl italic text-accent font-medium mb-6">
                    "{card.caption}"
                </p>
            )}

            {/* Content as Markdown Preview */}
            {card.content && (
                <div className="prose lg:prose-xl max-w-full text-gray-700">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{card.content}</ReactMarkdown>
                </div>
            )}

            {/* Video & Document Section */}
            <div className="mt-8 space-y-6">
                {card.media_doc_id && (
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-primary">📄 Document</h2>
                        <p className="mt-2 text-accent">
                            <a
                                href={card.media_doc_id}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                View Document
                            </a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardDetails;

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
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            {/* Title */}
            {card.title && (
                <h1 className="text-2xl font-bold text-primary mb-2">| {card.title}</h1>
            )}

            {/* Category & Sub-category */}
            {(card.c_category || card.c_sub_category) && (
                <p className="text-gray-700 text-sm mb-2">
                    {card.c_category && <span className="font-semibold">{card.c_category}</span>}
                    {card.c_sub_category && ` / ${card.c_sub_category}`}
                </p>
            )}

            {/* Caption */}
            {card.caption && (
                <p className="text-gray-600 italic mb-4">"{card.caption}"</p>
            )}

            {/* Content */}
            {card.content && (
                <p className="text-gray-700 mb-4">{card.content}</p>
            )}

            {/* Date & Location */}
            {(card.date || card.location) && (
                <p className="text-sm text-gray-500 mb-4">
                    {card.date && <span>📅 {card.date}</span>}
                    {card.location && <span> | 📍 {card.location}</span>}
                </p>
            )}

            {/* Media (Image, Video, Document) */}
            <div className="space-y-4 mb-4">
                {card.media_img_id && (
                    <img
                        src={card.media_img_id}
                        alt="Attached Image"
                        className="w-full rounded-lg shadow-md"
                    />
                )}
                {card.media_vid_id && (
                    <video controls className="w-full rounded-lg shadow-md">
                        <source src={card.media_vid_id} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                {card.media_doc_id && (
                    <p className="text-blue-500">
                        📄 <a href={card.media_doc_id} target="_blank" rel="noopener noreferrer">
                            View Document
                        </a>
                    </p>
                )}
            </div>

            {/* Updated & Added Info */}
            <div className="text-sm text-gray-600 space-y-2">
                {card.updated_by && card.updated_time && (
                    <p>✏️ Updated by {card.updated_by} on {card.updated_time}</p>
                )}
                {card.added_by && card.added_time && (
                    <p>➕ Added by {card.added_by} on {card.added_time}</p>
                )}
            </div>

            {/* Visibility & Preference */}
            {(card.visibility || card.preference) && (
                <p className="text-sm text-gray-500 mt-4">
                    {card.visibility && <span>👀 Visibility: {card.visibility}</span>}
                    {card.preference && <span> | ⭐ Preference: {card.preference}</span>}
                </p>
            )}

            {/* Expiry Date */}
            {card.expiry_date && (
                <p className="text-sm text-red-500 mt-4">⏳ Expires on: {card.expiry_date}</p>
            )}
        </div>
    );
};

export default CardDetails;

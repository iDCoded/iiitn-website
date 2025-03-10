import { useParams } from "react-router-dom";
import CardDetails from "../components/render"; // Adjust the path accordingly
import { useEffect, useState } from "react";

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

function ClubDetails() {
    const { id } = useParams();
    const [card, setCard] = useState<Card>();
    const [error, setError] = useState<Error>();

    useEffect(() => {
        const fetchClub = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_BASE_URL}/card/cards/${id}`
                );
                const data = await res.json();
                setCard({
                    title: data.title,
                    c_category: data.c_category,
                    c_sub_category: data.c_sub_category,
                    caption: data.caption,
                    content: data.content,
                    date: data.date,
                    location: data.location,
                    media_img_id: data.media_img_id || "",
                    media_vid_id: data.media_vid_id,
                    media_doc_id: data.media_doc_id,
                    updated_by: data.updated_by,
                    updated_time: data.updated_time,
                    added_by: data.added_by,
                    added_time: data.added_time,
                    visibility: data.visibility,
                    preference: data.preference,
                    expiry_date: data.expiry_date,
                });
            } catch (error) {
                console.error("Error fetching club:", error);
                setError(error as Error);
            }
        }
        fetchClub();
    }, [id]);

    if (!card) {
        return <div className="text-center text-xl mt-10">Club not found</div>;
    }

    if(error) {
        <div className="text-center text-xl mt-10 text-red-500">Error fetching club: {error.message}</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <header className="bg-primary text-white py-14 text-center">
                <h1 className="text-4xl font-bold">Club Details</h1>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-12">
                <CardDetails card={card} />
            </div>
        </div>
    );
}

export default ClubDetails;

import { useLocation } from "react-router-dom";
import CardDetails from "../components/render"; // Adjust the path accordingly

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
    const location = useLocation();
    const card: Card | undefined = location.state?.card;

    if (!card) {
        return <div className="text-center text-xl mt-10">Club not found</div>;
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

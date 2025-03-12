import { useEffect, useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "../components/ui/accordion";
import heroimage from "../assets/aboutBanner.jpg";

export default function AboutUs() {
    interface Document {
        title: string;
        m_sub_category: string;
        media_doc_id?: string | null;
        media_img_id?: string;
        date?: string;
        m_id: number;
    }

    const defData: Document[] = [
        { m_id: 1, title: "Act (PPP)", m_sub_category: "act",media_doc_id: "#", media_img_id: "", date: "2025-03-06" },
        { m_id: 2, title: "Statute", m_sub_category: "statute",media_doc_id: "#",  media_img_id: "", date: "2025-03-06" },
        { m_id: 3, title: "Sample Document", m_sub_category: "mou", media_img_id: "", date: "2025-03-06" },
        { m_id: 23, title: "Sample MoU Document", m_sub_category: "mou", media_img_id: "", date: "2025-03-06" },
        { m_id: 456, title: "Sample MoU Docment", m_sub_category: "mou", media_img_id: "", date: "2025-03-06" },
        { m_id: 78, title: "Sample MoU Dment", m_sub_category: "mou", media_img_id: "", date: "2025-03-06" },
        { m_id: 67, title: "Sample MoUment", m_sub_category: "mou", media_img_id: "", date: "2025-03-06" },
        { m_id: 45, title: "Sample MoU Document", m_sub_category: "mou", media_img_id: "", date: "2025-03-06" },
        { m_id: 19, title: "Sample MoU Document", m_sub_category: "mou", media_img_id: "", date: "2025-03-06" },
        { m_id: 6, title: "Sample MoU Dment", m_sub_category: "mou", media_img_id: "", date: "2025-03-06" },
        { m_id: 5, title: "Sample MoU Doent", m_sub_category: "mou", media_img_id: "", date: "2025-03-06" },
        { m_id: 4, title: "Sample MoU Docment", m_sub_category: "mou", media_img_id: "", date: "2025-03-10" },
    ];

    const [documents, setDocuments] = useState<{ actDocs: Document[]; statuteDocs: Document[] }>({
        actDocs: [],
        statuteDocs: [],
    });
    const [mouData, setMouData] = useState<Document[]>([]);
    const [loading, setLoading] = useState(true);
    const [openItem, setOpenItem] = useState<string | undefined>(undefined);

    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_API_BASE_URL}/media/media/category/about`
        )
            .then((response) => response.json())
            .then((data) => {
                if (!data || data.length === 0) {
                    data = defData;
                }
                const actDocs = data.filter((doc: Document) => doc.m_sub_category.toLowerCase() === "act");
                const statuteDocs = data.filter((doc: Document) => doc.m_sub_category.toLowerCase() === "statute");
                const mouDocs = data.filter((doc: Document) => doc.m_sub_category.toLowerCase() === "mou");

                setDocuments({ actDocs, statuteDocs });
                setMouData(mouDocs);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching documents:", error);
                setDocuments({
                    actDocs: defData.filter(doc => doc.m_sub_category === "act"),
                    statuteDocs: defData.filter(doc => doc.m_sub_category === "statute")
                });
                setMouData(defData.filter(doc => doc.m_sub_category === "mou"));
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    return (
        <div className="bg-white text-text min-h-screen">
            <header
                className="relative w-full h-64 flex flex-col justify-center items-center text-white text-center shadow-lg"
                style={{
                    backgroundImage: `url(${heroimage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg">About IIIT Nagpur</h1>
                    <p className="text-xl font-medium mt-2">An Institute of National Importance</p>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-8 py-16 space-y-16">
                {documents.actDocs.map((doc) => (
                    <Section key={doc.m_id} title={doc.title} link={doc.media_doc_id} content="The Indian Institute of Information Technology (IIIT), Nagpur is one of the IIIT under the Indian Institute of Information Technology (Public-Private Partnership) Act, 2017.

" />
                ))}
                {documents.statuteDocs.map((doc) => (
                   <Section
                   key={doc.m_id}
                   title={doc.title}
                   link={doc.media_doc_id}
                   content={`The Indian Institute of Information Technology, Nagpur governs by the Statutes formulated by GoI.\n\nThese Statutes may be called the Statutes of the Indian Institute of Information Technology, Nagpur, 2017.`}
               />
                ))}

                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-primary flex items-center">
                        <span className="text-accent mr-3 text-4xl">|</span> Memorandums of Understanding (MoUs)
                    </h2>
                  


                    <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={(value) => setOpenItem(value === openItem ? undefined : value)}
        >
            {mouData.map(({ title, media_doc_id, media_img_id, date, m_id }) => (
                <AccordionItem key={m_id} value={m_id.toString()} className="border-b border-gray-200">
                    <AccordionTrigger className="py-4 text-lg font-semibold hover:text-accent transition duration-200">
                        {title}
                    </AccordionTrigger>
                    <AccordionContent className="p-5 text-text leading-relaxed">
                        {date && <p>Signed on {new Date(date).toDateString()}</p>}
                        {media_img_id && (
                            <div className="mt-4">
                                <img src={media_img_id} alt={title} className="w-full rounded-lg shadow-md" />
                            </div>
                        )}
                        {media_doc_id && (
                            <a
                                href={media_doc_id}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:underline block mt-2"
                            >
                                View Document
                            </a>
                        )}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>

                </div>
            </div>
        </div>
    );
}

const Section = ({ title, content, link }: { title: string; content: string; link?: string | null }) => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold text-primary flex items-center">
            <span className="text-accent mr-3 text-4xl">|</span> {title}
        </h2>
        <p className="text-text leading-relaxed text-lg">
            {content.split("\n").map((line, index) => (
                <span key={index}>
                    {line}
                    <br />
                </span>
            ))}
        </p>
        {link && (
            <a href={link} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                Learn more
            </a>
        )}
    </div>
);

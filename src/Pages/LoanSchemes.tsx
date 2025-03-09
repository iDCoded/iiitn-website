import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LoanScheme {
  title: string;
  media_img_id: string;
  media_doc_id: string;
  caption: string;
  content: string;
}

function LoanSchemes() {
  const [loanSchemes, setLoanSchemes] = useState<LoanScheme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoanSchemes = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/card/cards/category/loanschemes`
        );
        const data = await response.json();
        setLoanSchemes(
          data.map((item: any) => ({
            title: item.title,
            media_img_id: item.media_img_id,
            media_doc_id: item.media_doc_id,
            caption: item.caption,
            content: item.content,
          }))
        )
      } catch (error) {
        console.error("Failed to fetch loan schemes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoanSchemes();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-primary text-white py-16 text-center">
        <h1 className="text-5xl font-bold">Loan Schemes</h1>
        <p className="text-lg mt-2 italic">"Recognizing Excellence in Academics & Research"</p>
      </header>

      {/* Loan Schemes List */}
      <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {loading ? (
          <p className="text-center text-gray-600">Loading loan schemes...</p>
        ) : loanSchemes.length > 0 ? (
          loanSchemes.map((bank, index) => (
            <Card key={index} className="shadow-md border">
              {/* Bank Logo */}
              <CardHeader className="flex justify-center bg-gray-50 p-6 rounded-t-lg">
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL}/media/${bank.media_img_id}`}
                  alt={bank.title}
                  className="h-16"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl text-center">{bank.title}</CardTitle>
                <p className="text-sm text-gray-600 mt-2">{bank.caption}</p>
                <p className="mt-3 text-gray-700">{bank.content}</p>
                <div className="mt-4 text-center">
                  <a
                    href={`${import.meta.env.VITE_API_BASE_URL}/media/${bank.media_doc_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View PDF
                  </a>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-600">No loan schemes available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default LoanSchemes;

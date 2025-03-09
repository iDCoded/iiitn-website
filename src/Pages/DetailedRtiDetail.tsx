
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";

function DetailedRtiDetail() {

  interface RtiDetail {
    title: string;
    content: string;
  }

  const [rtiDetail, setRtiDetail] = useState<RtiDetail | null>(null);
  const { rtidetailid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    const fetchRtiDetail = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/card/cards/${rtidetailid}`);
        const data = await response.json();
        setRtiDetail(
          {
            title: data[0].title,
            content: data[0].content,
          }
        );
      } catch (error) {
        console.error("Failed to fetch RTI details:", error);
        setRtiDetail({
          title: "RTI Details",
          content: "No information available due to a network issue.",
        });
      }
    }

    fetchRtiDetail();
  }, [rtidetailid]);

  return (
    <div className="flex flex-col min-h-screen p-6 justify-center">
      {rtiDetail ? (
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">{rtidetailid}: {rtiDetail.title}</h1>

          <div className="border p-4 rounded-lg bg-gray-100 shadow-md">
            <MarkdownPreview source={rtiDetail.content} className="!bg-white p-4 rounded-lg !text-primary" />
          </div>

          {/* Back button immediately after info div with some space */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
            >
              ← Back
            </button>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-center">No details found for ID: {rtidetailid}</p>
      )}
    </div>
  );
}

export default DetailedRtiDetail;

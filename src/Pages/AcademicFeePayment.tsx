import { FaUniversity } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import qr from "../assets/qr.jpg";
import MDEditor from "@uiw/react-md-editor";
import { useState, useEffect } from "react";

const defacademicFeeData = [
  {
    content: "Academic Fee Payment",
    qrCodeImg: qr, // Default QR code image
    paymentLink: "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm", // Default payment link
  },
];

function AcademicFeePayment() {
  const [academicFeeData, setAcademicFeeData] = useState<
    { content: string; qrCodeImg: string; paymentLink: string }[]
  >(defacademicFeeData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAcademicFee = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/card/cards/category/fee`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch academic fee data");
        }

        const data = await res.json();

        // ✅ Filter only items where c_sub_category is "acad_fee_details"
        const filteredData = data
          .filter((fee: any) => fee.c_sub_category === "acad_fee_details")
          .map((fee: any) => ({
            content: fee.content, // Keeping content static
            qrCodeImg: fee.media_img_id, // ✅ Assign `media_img_id` to `qrCodeImg`
            paymentLink: fee.caption, // ✅ Assign `caption` to `paymentLink`
          }));

        setAcademicFeeData(filteredData.length > 0 ? filteredData : defacademicFeeData);
      } catch (error) {
        console.error("Error fetching academic fee data:", error);
        setAcademicFeeData(defacademicFeeData);
      } finally {
        setLoading(false);
      }
    };

    fetchAcademicFee();
  }, []); // ✅ Runs only once on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* 🔹 Header Section */}
      <header className="w-full bg-primary text-white py-12 text-center shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Academic Fee Payment
        </h1>
        <p className="mt-1 text-gray-200 text-lg">
          Secure and easy online payment options
        </p>
      </header>

      {/* 📌 Main Content */}
      <main className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6 md:p-10 mt-8">
        {/* 🏦 Institute Bank Details */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
            <FaUniversity className="text-accent" /> Institute Bank Details
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
		  <MDEditor.Markdown 
  source={academicFeeData[0]?.content} 
  style={{ background: "transparent", color: "black" }} 
/>


          </div>
        </section>

        {/* 🔗 Online Payment Button */}
        <section className="mb-10 text-center">
          <a
            href={academicFeeData[0]?.paymentLink}
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#d8691d] transition duration-300 shadow-md"
          >
            <AiOutlineLink className="text-xl" /> Pay Online
          </a>
        </section>

        {/* 📜 QR Code Section */}
        <section className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Scan to Pay</h2>
          <div className="flex justify-center">
            <figure className="border rounded-lg overflow-hidden shadow-md bg-gray-200 p-4 w-full max-w-xs">
              <img
                src={academicFeeData[0]?.qrCodeImg}
                alt="Academic Fee QR Code"
                className="w-full h-auto rounded-lg"
              />
              <figcaption className="text-gray-600 mt-2 text-center text-sm p-2">
                Scan the QR Code to make the payment
              </figcaption>
            </figure>
          </div>
        </section>

        {/* 📌 Additional Links */}
        <section className="mt-10 space-y-4 text-center">
          <a
            href="/admissions/btech/acadfees"
            className="block bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#001a35] transition duration-300 shadow-md"
          >
            First Year Academic Fee Structure
          </a>
          <a
            href="/pages/academicfee"
            className="block bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 shadow-md"
          >
            Complete Academic Fee Structure
          </a>
        </section>
      </main>
    </div>
  );
}

export default AcademicFeePayment;

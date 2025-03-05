import sbi from "../assets/sbi.png";
import canara from "../assets/canara.png";  
import pnb from "../assets/pnb.jpg";
import bom from "../assets/bom.png";


const bankLoanData = [
    {
      title: "State Bank of India",
      pdf: "https://iiitn.ac.in/images/admission2025/SBI_SCHL.jpg",
      link: "https://www.sbi.co.in/",
      address: "State Bank of India, 11, Parliament Street, New Delhi - 110001",
      description:
        "SBI offers education loans for students pursuing higher studies in India and abroad, covering tuition fees, hostel fees, and other expenses.",
      logo: sbi,
    },
    {
      title: "Canara Bank",
      pdf: "https://iiitn.ac.in/images/admission2024/CANARA_BANK_LOAN_SCHEME%20%282%29.pdf",
      link: "https://www.canarabank.com/",
      address: "Canara Bank, 112, J.C. Road, Bangalore - 560002",
      description:
        "Canara Bank provides education loans with flexible repayment options and interest rate subsidies for eligible students.",
      logo: canara,
    },
    {
      title: "Punjab National Bank",
      pdf: "https://iiitn.ac.in/images/admission2024/PNB%20Bank%20_Loan%20Doc.pdf",
      link: "https://www.pnbindia.in/",
      address: "Punjab National Bank, Head Office, Delhi - 110001",
      description:
        "PNB offers student loans with minimal processing fees and collateral-free options under government schemes.",
      logo: pnb,
    },
    {
      title: "Bank of Maharashtra",
      pdf: "https://iiitn.ac.in/images/admission2024/Edu%20loan%20flyer%20General-1.pdf",
      link: "https://www.bankofmaharashtra.in/",
      address: "Bank of Maharashtra, Shivajinagar, Pune - 411005",
      description:
        "Bank of Maharashtra provides affordable education loans with extended moratorium periods and low-interest rates.",
      logo: bom,
    },
  ];
  
  function LoanSchemes() {
    return (
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-primary text-white py-16 text-center">
          <h1 className="text-5xl font-bold">Loan Schemes</h1>
          <p className="text-lg mt-2 italic">"Recognizing Excellence in Academics & Research"</p>
        </header>
  
        <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {bankLoanData.map((bank, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg border">
              <img src={bank.logo} alt={bank.title} className="h-16 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-center">{bank.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{bank.address}</p>
              <p className="mt-3 text-gray-700">{bank.description}</p>
              <div className="mt-4 flex justify-between">
                <a
                  href={bank.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View PDF
                </a>
                <a
                  href={bank.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default LoanSchemes;
  
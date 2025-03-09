import { useEffect, useState } from 'react';
import ContactCard from '../../components/ContactCard'

const ContactTPdata = [
  {
    name: "Dr. Anil Kumar Tiwari",
    positions: "Training and Placement Officer",
    email: "example@gmail.com",
    phone: "1234567890",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
  },
  {
    name: "Dr. Anil Kumar Tiwari",
    positions: "Training and Placement Officer",
    email: "example@gmail.com",
    phone: "1234567890",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
  },
  {
    name: "Dr. Anil Kumar Tiwari",
    positions: "Training and Placement Officer",
    email: "example@gmail.com",
    phone: "1234567890",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
  }
]

function ContactTP() {

  interface ContactTPdata{
    name: string;
    positions: string;
    email: string;
    phone: string;
    imgSrc: string;
  }

  const [contactData, setContactData] = useState<ContactTPdata[]>(ContactTPdata);
  const [loading, setLoading] = useState<Boolean>();

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/faculty/faculty_staff`);
        const data = await response.json();
        const filteredData = data.filter((contact: ContactTPdata) => contact.positions.includes("Training and Placement Officer"));
        setContactData(
          filteredData.map((contact: any) => ({
            name: contact.name,
            positions: contact.positions,
            email: contact.email,
            phone: contact.phone_no,
            imgSrc: contact.media_img_id
          }))
        );
      } catch (error) {
        console.error("Failed to fetch contact data:", error);
        setContactData(ContactTPdata);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      
      {/* Header Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Training and Placement Cell</h1>
        <p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        {loading ? (
          <p className='h-screen'>Loading...</p>
        ) : (
          contactData.map((contact, index) => (
            <ContactCard key={index} name={contact.name} role={contact.positions} email={contact.email} phone={contact.phone} imgSrc={contact.imgSrc} />
          ))
        )}
      </div>
    </div>
  )
}

export default ContactTP

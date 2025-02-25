import ContactCard from '../../components/ContactCard'
const ContactTPdata = [
  {
    name: "Dr. Anil Kumar Tiwari",
    position: "Training and Placement Officer",
    email: "example@gmail.com",
    phone: "1234567890",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
  },
  {
    name: "Dr. Anil Kumar Tiwari",
    position: "Training and Placement Officer",
    email: "example@gmail.com",
    phone: "1234567890",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
  },
  {
    name: "Dr. Anil Kumar Tiwari",
    position: "Training and Placement Officer",
    email: "example@gmail.com",
    phone: "1234567890",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
  }
]
 


function ContactTP() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      
      {/* Header Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Training and Placement Cell</h1>
        <p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        {ContactTPdata.map((contact, index) => (
          <ContactCard key={index} name={contact.name} role={contact.position} email={contact.email} phone={contact.phone} imgSrc={contact.imgSrc} />
        ))}
      </div>
    </div>
  )
}

export default ContactTP

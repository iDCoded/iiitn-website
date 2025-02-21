import React from 'react';
import CompanyCard from '../../components/CompanyCard';
import PlacementNav from '@/components/PlacementNav';


function Companies() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      
      <PlacementNav />
      {/* Header Section */}
      <div className="bg-[#002147] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Companies</h1>
        <p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
      </div>
           
      {/* Companies Visited Section */}
      <div className='flex flex-col h-auto border-4 border-black p-6 m-4 rounded-lg bg-white shadow-lg max-w-6xl mx-auto'>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Companies Visited</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          <CompanyCard title='TCS' imageSrc='https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png' description='Tata Consultancy Services Limited is an Indian multinational information technology services and consulting company headquartered in Mumbai, Maharashtra, India.' />
          <CompanyCard title='Infosys' imageSrc='https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png' description='Infosys Limited is an Indian multinational corporation that provides business consulting, information technology, and outsourcing services.' />
          <CompanyCard title='Wipro' imageSrc='https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png' description='Wipro Limited is an Indian multinational corporation that provides IT, consulting, and business process services.' />
          <CompanyCard title='Capgemini' imageSrc='https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png' description='Capgemini SE is a multinational information technology services and consulting company headquartered in Paris, France.' />
          <CompanyCard title='Cognizant' imageSrc='https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png' description='Cognizant is an American multinational technology company that provides IT services, including digital, technology, consulting, and operations services.' />
          <CompanyCard title='HCL Technologies' imageSrc='https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png' description='HCL Technologies is an Indian multinational information technology services and consulting company headquartered in Noida, India.' />
        </div>
        <p className="text-center text-lg mt-4 text-gray-600">Go to <a className="text-blue-600 font-medium" href="/placements/statistics">Statistics</a> for detailed info.</p>
      </div>

      {/* Guidelines Section */}
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg mb-24">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guidelines for Companies</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-blue-600 hover:underline font-medium">Invitation for Campus Placements</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline font-medium">Placement Policy</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline font-medium">Placement Brochure</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline font-medium">Guidelines for Companies</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline font-medium">Job Announcement Form</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Companies;

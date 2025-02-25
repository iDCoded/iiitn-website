import React from 'react';

import TCS from '../assets/TCS.jpg';
import gom from '../assets/gom.png';
import goi from '../assets/Shikshamantralay2.jpg';

function InstitutesProfile() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center text-gray-800">
      {/* Header Section */}
      <header className="bg-primary text-white py-16 text-center w-full">
        <h1 className="text-5xl font-bold">Institute Profile</h1>
        <p className="text-lg mt-2 italic">
          "Ensuring transparency and accountability in IIIT Nagpur."
        </p>
      </header>

      {/* Content Section */}
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 my-10">
        <h2 className="text-3xl font-semibold text-primary mb-4"><span className="text-accent text-4xl mr-2">|</span>Institute Profile</h2>
        <p className="text-justify leading-relaxed">
          Indian Institute of Information Technology, Nagpur (IIITN) is one of the 20 Indian Institutes of Information Technology
          established under the Public-Private Partnership Scheme by the Ministry of Education (erstwhile Ministry of Human Resource Development),
          Government of India. IIITN has been declared as an “Institution of National Importance” under the provisions of the Indian Institute
          of Information Technology (Public-Private Partnership) Act, 2017. The Institute started functioning during the year 2016-17 and
          shifted to its permanent campus in Butibori, Nagpur, under the Department of Higher Education, Ministry of Education. It is supported
          by the Department of Higher Education, Government of Maharashtra, and Tata Consultancy Services, Mumbai, as an Industry Partner.
        </p>

        <h3 className="text-2xl font-semibold text-primary mt-6"><span className="text-accent text-4xl mr-2">|</span>Institute’s Mandate</h3>
        <p className="text-justify leading-relaxed">
          One of the main objectives of the Institute is to develop competent and capable youth imbued with the spirit of innovation
          and entrepreneurship with a social and environmental orientation to meet the knowledge needs of the country and provide Global
          Leadership in Information Technology & Allied Fields.
        </p>

        <h3 className="text-2xl font-semibold text-primary mt-6"><span className="text-accent text-4xl mr-2">|</span>Institute’s Vision</h3>
        <p className="text-justify leading-relaxed">
          The Institute aspires to attain the status of a top-notch institution in Information Technology and Allied Fields and to emerge
          as an elite Research Institution by imparting futuristic quality education of Global Standards to corroborate the status of an
          “Institution of National Importance”.
        </p>

        <h3 className="text-2xl font-semibold text-primary mt-6"><span className="text-accent text-4xl mr-2">|</span>Institute’s Mission</h3>
        <p className="text-justify leading-relaxed">
          To undertake socially relevant, industry-oriented In-House Research & Development Programmes as well as to undertake cutting-edge
          research through Public-Private Participation in Information Technology & Allied Fields. The Institute shall endeavor to develop
          innovation and entrepreneurship with social and environmental orientation.
        </p>
      </div>

      {/* Logos Section */}
      <div className="flex justify-center gap-8 mb-10">
        <img src={goi} alt="Govt of India" className="w-32 h-auto" />
        <img src={gom} alt="Government of Maharashtra Logo" className="w-32 h-auto" />
        <img src={TCS} alt="TCS Logo" className="w-32 h-auto" />
      </div>
    </div>
  );
}

export default InstitutesProfile;

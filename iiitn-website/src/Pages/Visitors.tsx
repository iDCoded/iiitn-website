import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import heroimage from "../assets/visitorsBanner.jpeg";


function Visitors() {
  return (
    <section className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header
                className="relative w-full h-75 flex flex-col justify-center items-center text-white text-center shadow-lg"
                style={{
                    backgroundImage: `url(${heroimage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>        <h1 className="text-4xl font-bold">Visitors</h1>
        <p className="text-lg mt-2">Stay updated with the latest tenders from IIIT Nagpur.</p>
      </header>

      <section className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-semibold text-primary">🗺️ Location & Accessibility</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          The campus is located in <b>Waranga, Buti Bori, Nagpur</b>, well connected by <b>rail, air, and road transport</b>.
        </p>

        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-primary">🚉 By Rail</h3>
          <p className="text-gray-700 mt-1">Nagpur Main Railway Station - <b>20 KM</b></p>
        </div>

        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-primary">✈️ By Air</h3>
          <p className="text-gray-700 mt-1">Dr. Babasaheb Ambedkar International Airport (Nagpur) - <b>8 KM</b></p>
        </div>

        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-primary">🚌 By Road</h3>
          <p className="text-gray-700 mt-1">Nagpur Central Bus Stand - <b>22 KM</b></p>
        </div>
      </section>

      {/* Official Address Section */}
      <section className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-primary">🏫 Official Address</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          <b>IIIT Nagpur</b>  
          <br /> Survey No. 140, 141/1,  
          <br /> Behind Br. Sheshrao Wankhade Shetkari Sahkari Soot Girni,  
          <br /> Village - Waranga, PO - Dongargaon (Butibori),  
          <br /> Tahsil - Nagpur (Rural), District Nagpur,  
          <br /> <b>Maharashtra - 441108</b>
        </p>
      </section>

      {/* Google Maps Section */}
      <section className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-primary">🗺️ Find Us on Google Maps</h2>
        <div className="mt-4">
          <iframe
            title="IIIT Nagpur Location"
            className="w-full h-80 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.828076166463!2d79.04975991488986!3d21.092746685959896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bff53a6b91fd%3A0x1830b3a2b4e17a2e!2sIIIT%20Nagpur!5e0!3m2!1sen!2sin!4v1617794286415!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <Card className="shadow-lg border border-gray-300">
          <CardHeader className="bg-primary text-white rounded-t-lg py-5">
            <CardTitle className="text-2xl">Guest House Information</CardTitle>
          </CardHeader>
          <CardContent className="p-12 space-y-8">
            <Accordion type="single" collapsible className="space-y-4">
              
              {/* Booking Info */}
              <AccordionItem value="booking" className="border-b border-gray-300 pb-4">
                <h3 className="text-lg font-semibold text-primary mb-3">📅 Booking Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <a href="#" className="text-accent font-medium hover:underline">
                      Online Booking Form for Guest House
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-accent font-medium hover:underline">
                      Requisition Slip to Book Guest House
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-accent font-medium hover:underline">
                      Rules for the Allotment of Guest House Accommodation & Room Tariff
                    </a>
                  </li>
                </ul>
              </AccordionItem>

              {/* Contact Section */}
              <AccordionItem value="contact" className="border-b border-gray-300 pb-4">
                <h3 className="text-lg font-semibold text-primary mb-3">📞 Contact for Booking & Queries</h3>
                <div className="mt-3 text-gray-800 space-y-4">
                  <p>
                    <strong>Guest House IIIT Nagpur:</strong> <br />
                    📱 Contact No: <span className="text-gray-900 font-semibold">9730075010</span>
                  </p>
                  <p>
                    <strong>Mr. Avinash Suryawanshi</strong> <br />
                    AoSD (Admin) <br />
                    📱 Mobile No: <span className="text-gray-900 font-semibold">9960206223</span> <br />
                    📧 Email:{" "}
                    <a href="mailto:aosd@iiitn.ac.in" className="text-accent font-medium hover:underline">
                      aosd@iiitn.ac.in
                    </a>
                  </p>
                </div>
              </AccordionItem>

              {/* Address */}
              <AccordionItem value="address" className="border-b border-gray-300 pb-4">
                <h3 className="text-lg font-semibold text-primary mb-3">📍 IIIT Nagpur Address</h3>
                <p className="text-gray-800">
                  <strong>INDIAN INSTITUTE OF INFORMATION TECHNOLOGY NAGPUR (IIITN)</strong>
                  <br />
                  📍 S.No. 140, 141/1 Behind Br. Sheshrao Wankhade Shetkari Sahkari Soot Girni,
                  Village Waranga, Nagpur - 441108
                </p>
              </AccordionItem>

              {/* Payment Details */}
              <AccordionItem value="payment" className="border-b border-gray-300 pb-4">
                <h3 className="text-lg font-semibold text-primary mb-3">💰 Payment Details</h3>
                <p className="text-gray-800">
                  <a href="#" className="text-accent font-medium hover:underline">
                    Payment details for guest house fees through SB Collect
                  </a>
                </p>
              </AccordionItem>

              {/* Accommodation */}
              <AccordionItem value="accommodation" className="pb-4">
                <h3 className="text-lg font-semibold text-primary mb-3">🏨 Accommodation & Hotels</h3>
                <p className="text-gray-800">
                  <a href="#" className="text-accent font-medium hover:underline">
                    Guest House details and nearest hotel details
                  </a>
                </p>
              </AccordionItem>

            </Accordion>
          </CardContent>
        </Card>
      </main>




    </section>
  )
}

export default Visitors
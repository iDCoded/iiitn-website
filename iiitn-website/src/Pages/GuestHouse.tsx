import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

function GuestHouse() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
      {/* Header Section */}
      <header className="bg-primary text-white py-16 text-center shadow-md mb-10">
        <h1 className="text-4xl font-bold">Guest House</h1>
        <p className="text-lg mt-2">
          Stay connected and contribute to the growth of IIIT Nagpur.
        </p>
      </header>

      {/* Content Section */}
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
    </div>
  );
}

export default GuestHouse;

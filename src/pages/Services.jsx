import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="bg-gray-50">
      {/* Hero / Intro Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-400 text-white py-14 md:py-20 mb-10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Our Services</h1>
          <p className="text-lg md:text-2xl font-medium mb-4">
            One-stop solution for your government, travel, and daily service needs — quick, reliable, and hassle-free.
          </p>
          <p className="text-base md:text-lg opacity-90">
            We provide end-to-end support for certificates, ticketing, applications, printing, and more. Trust us for friendly guidance and fast results!
          </p>
        </div>
      </section>

      {/* Government Services */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Government Certificate & Document Assistance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-4">
          <ServiceCard icon="🏛️" title="Caste Certificate" />
          <ServiceCard icon="📜" title="Domicile Certificate" />
          <ServiceCard icon="💰" title="Income Certificate" />
          <ServiceCard icon="🛂" title="Passport Applications" />
        </div>
        <div className="text-center text-gray-600 text-sm mb-8">
          We ensure correct documentation and timely submission, saving you effort and confusion.
        </div>
      </section>

      {/* Travel & Booking Services */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Travel Made Simple</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4 max-w-3xl mx-auto">
          <ServiceCard icon="🚆" title="Railway Ticket Booking" />
          <ServiceCard icon="🚌" title="Bus Ticket Booking" />
          <ServiceCard icon="✈️" title="Air Ticket Booking" />
        </div>
        <div className="text-center text-gray-600 text-sm mb-8">
          Affordable, quick, and confirmed bookings without the hassle.
        </div>
      </section>

      {/* Applications & Education Support */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Form Filling & Educational Applications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4 max-w-3xl mx-auto">
          <ServiceCard icon="📝" title="Govt. Exam Applications" />
          <ServiceCard icon="🏫" title="School/College Admission" />
          <ServiceCard icon="🎓" title="Scholarship Applications" />
        </div>
        <div className="text-center text-gray-600 text-sm mb-8">
          We help students and applicants avoid errors and meet deadlines.
        </div>
      </section>

      {/* Print & Stationery Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Printing & Stationery Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4 max-w-3xl mx-auto">
          <ServiceCard icon="📄" title="Photocopy & Printing" />
          <ServiceCard icon="🖨️" title="Color/Black Printing" />
          <ServiceCard icon="✏️" title="Stationery Supplies" />
        </div>
        <div className="text-center text-gray-600 text-sm mb-8">
          All essentials available in one place.
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-12 mt-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Need a Service Today?</h3>
            <p className="mb-4">Visit us or contact us for quick assistance with your certificates, bookings, printing, and more.</p>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-700 hover:bg-blue-100 px-6 py-2 rounded-full font-semibold shadow transition"
              >
                Contact Us
              </Link>
              <a
                href="https://maps.app.goo.gl/LTpZJWJ1xXuiwD3E6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-full font-semibold shadow transition"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Modern ServiceCard for this page
function ServiceCard({ icon, title }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition">
      <span className="text-4xl mb-3">{icon}</span>
      <div className="font-semibold text-lg text-blue-700 mb-2 text-center">{title}</div>
      {/* <Link
        to="/contact"
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition"
      >
        Get Started
      </Link> */}
    </div>
  );
}
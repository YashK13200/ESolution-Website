import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-50">
      {/* Contact Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-400 text-white py-14 md:py-20 mb-10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Get in Touch</h1>
          <p className="text-lg md:text-2xl font-medium mb-4">
            We’re here to help you with certificates, bookings, printing, and more — anytime you need us.
          </p>
          <p className="text-base md:text-lg opacity-90">
            Reach out via phone, WhatsApp, email, or simply visit our shop. We respond quickly and ensure you get the assistance you need without hassle.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Contact Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-4">
          <ContactCard
            icon="📍"
            title="Shop Address"
            content={
              <>
                Jharna Tola,<br />
                Nanda Nagar, Gorakhpur,<br />
                Uttar Pradesh 273008
                <br />
                <a
                  href="https://maps.app.goo.gl/LTpZJWJ1xXuiwD3E6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline block mt-1"
                >
                  View on Google Maps
                </a>
              </>
            }
          />
          <ContactCard
            icon="📞"
            title="Phone"
            content={
              <a
                href="tel:+911234567890"
                className="text-blue-600 hover:underline font-semibold"
              >
                +91 9807374318
              </a>
            }
          />
          <ContactCard
            icon="💬"
            title="WhatsApp"
            content={
              <a
                href="https://wa.me/919807374318"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline font-semibold"
              >
                Chat on WhatsApp
              </a>
            }
          />
          <ContactCard
            icon="✉️"
            title="Email"
            content={
              <a
                href="mailto:jinkazma748@gmail.com"
                className="text-blue-600 hover:underline font-semibold"
              >
                rohitshop7777@gmail.com
              </a>
            }
          />
        </div>
        <div className="text-center text-gray-600 text-sm mb-8">
          <span className="font-semibold">Operating Hours:</span> Monday–Saturday, 9 AM – 7 PM
        </div>
      </section>

      {/* Contact Form Section */}
      {/* <section className="container mx-auto px-4 py-8 max-w-2xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              className="w-full border rounded px-3 py-2"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email / Phone</label>
            <input
              className="w-full border rounded px-3 py-2"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition" type="submit">
            Send Message
          </button>
        </form>
      </section> */}

      {/* Map & Directions Section */}
      <section className="container mx-auto px-4 py-8 max-w-3xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Find Us Easily</h2>
        <div className="rounded-xl overflow-hidden shadow mb-2">
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps?q=Unnamed+Road,+Jharna+Tola,+Nanda+Nagar,+Gorakhpur,+Uttar+Pradesh+273008&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="text-gray-600 text-sm mb-8">
          Visit us in person for fast assistance. We are located near Nanda Nagar, Gorakhpur.
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-10 mt-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Need urgent ticket booking or document support?</h3>
            <p className="mb-4">Call us now — we’ll get it done for you.</p>
            <div className="flex gap-4">
              <a
                href="tel:+911234567890"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-full font-semibold shadow transition"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow transition"
              >
                Message on WhatsApp
              </a>
              <a
                href="https://maps.app.goo.gl/LTpZJWJ1xXuiwD3E6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 hover:bg-blue-100 px-6 py-2 rounded-full font-semibold shadow transition"
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

// Contact Card Component
function ContactCard({ icon, title, content }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition">
      <span className="text-4xl mb-2">{icon}</span>
      <div className="font-semibold text-lg text-blue-700 mb-1">{title}</div>
      <div className="text-gray-700">{content}</div>
    </div>
  );
}
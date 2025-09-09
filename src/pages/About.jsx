import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-400 text-white py-16 md:py-24 mb-10 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-2/3 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Who We Are</h1>
            <p className="text-lg md:text-2xl font-medium mb-4">
              Your trusted neighborhood service partner for documents, travel, and daily essentials.
            </p>
            <p className="text-base md:text-lg opacity-90">
              For years, we’ve been helping students, families, and professionals with government certificates, ticket bookings, and everyday services.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/community-concept-illustration_114360-1834.jpg?w=400"
              alt="Community Service"
              className="w-64 h-64 object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full opacity-30 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-800 rounded-full opacity-20 blur-3xl -z-10"></div>
      </section>

      {/* Our Story / Background Section */}
      <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Journey</h2>
          <p className="text-gray-700 mb-4">
            Founded with the vision to simplify everyday tasks, our shop has become a one-stop destination for trusted services — from government certificates to printing and stationery.
          </p>
          <p className="text-gray-700 mb-4">
            We started as a small family-run business and have grown into a trusted partner for hundreds of students, job seekers, travelers, and families in our community.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
            alt="Shop"
            className="w-56 h-56 object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <ValueCard icon="✅" title="Trust & Reliability" desc="Accurate service with proper documentation." />
            <ValueCard icon="🤝" title="Customer-First Approach" desc="Personalized assistance for every client." />
            <ValueCard icon="💸" title="Affordable & Transparent" desc="Clear pricing, no hidden costs." />
            <ValueCard icon="🎓" title="Experience & Expertise" desc="Years of handling government forms and travel bookings." />
          </div>
        </div>
      </section>

      {/* Meet the Shop / Community Connection Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">More Than Just a Service Shop</h2>
        <p className="text-gray-700 mb-4 max-w-2xl">
          We don’t just provide services, we build relationships. Our aim is to make processes simpler and faster for students, job seekers, travelers, and families. As a local, family-owned business, we’re proud to be rooted in the community and to serve you with a smile.
        </p>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-12 mt-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Here to Help You</h3>
            <p className="mb-4">Whether it’s a certificate, a ticket, or a simple photocopy — we’ve got you covered.</p>
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
                Visit Our Shop
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Value Card Component
function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
      <span className="text-4xl mb-3">{icon}</span>
      <div className="font-bold text-blue-700 mb-1">{title}</div>
      <div className="text-gray-600 text-center">{desc}</div>
    </div>
  );
}
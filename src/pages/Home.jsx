import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    icon: '🏛️',
    title: 'Govt. Certificates',
    desc: 'Caste, Domicile, Income & more.',
  },
  {
    icon: '🎫',
    title: 'Ticket Booking',
    desc: 'Railway & Air ticket booking.',
  },
  {
    icon: '📝',
    title: 'Form Filling',
    desc: 'Exam, school, college, govt. forms.',
  },
  {
    icon: '📄',
    title: 'Copy & Print',
    desc: 'Photocopy, document printing, scanning.',
  },
  {
    icon: '✏️',
    title: 'Stationery',
    desc: 'All daily-use stationery supplies.',
  },
];

const features = [
  {
    icon: '⚡',
    title: 'Fast & Reliable',
    desc: 'Quick turnaround for all services.',
  },
  {
    icon: '💸',
    title: 'Affordable Pricing',
    desc: 'Transparent, pocket-friendly rates.',
  },
  {
    icon: '🎓',
    title: 'Experienced Team',
    desc: 'Years of expertise in government & exam applications.',
  },
  {
    icon: '🤝',
    title: 'Friendly Support',
    desc: 'We guide you at every step.',
  },
];

const faqs = [
  {
    q: 'How long does it take to get a certificate?',
    a: 'Most certificates are processed within 1-2 days, depending on requirements.',
  },
  {
    q: 'Do you provide urgent ticket bookings?',
    a: 'Yes, we offer urgent railway and air ticket booking services.',
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-400 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
            >
              Service Shop
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg md:text-2xl font-medium mb-6"
            >
              Your Trusted Partner for Government & Daily Services
            </motion.p>
            <Link
              to="/services"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-100 transition"
            >
              Explore Services
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://etimg.etb2bimg.com/thumb/msid-114868709,width-1200,height-900,resizemode-4/.jpg"
              alt="Digital Services"
              className="w-80 md:w-[28rem] rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full opacity-30 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-800 rounded-full opacity-20 blur-3xl -z-10"></div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Our Major Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition"
            >
              <span className="text-5xl mb-4">{s.icon}</span>
              <div className="font-semibold text-lg mb-2 text-blue-700">{s.title}</div>
              <div className="text-gray-600 text-center">{s.desc}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to="/services"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition"
              >
                <span className="text-4xl mb-3">{f.icon}</span>
                <div className="font-bold text-blue-700 mb-1">{f.title}</div>
                <div className="text-gray-600 text-center">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Shop */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">About Our Shop</h2>
          <p className="text-gray-700 mb-4">
            For over 10 years, Service Shop has helped students, travelers, and locals with all their paperwork, ticket booking, and stationery needs. We’re known for our friendly support and deep experience in government and exam applications.
          </p>
          <Link
            to="/about"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition"
          >
            Learn More About Us
          </Link>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
            alt="Shop"
            className="w-64 h-64 object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* Customer Support / Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Need help with a certificate, booking, or printing?</h3>
            <p className="mb-2">We’re just one call away. Reach out for quick support!</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 transition"
              >
                <span>💬</span> WhatsApp
              </a>
              <a
                href="tel:+911234567890"
                className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 transition"
              >
                <span>📞</span> Call Now
              </a>
              <Link
                to="/contact"
                className="bg-white text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-full font-semibold flex items-center gap-2 transition"
              >
                <span>📍</span> Visit Us
              </Link>
            </div>
            <div className="mt-4 text-sm">Open: 9:00 AM – 8:00 PM (Mon–Sat)</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <div className="font-semibold text-blue-700 mb-2">{faq.q}</div>
              <div className="text-gray-700">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
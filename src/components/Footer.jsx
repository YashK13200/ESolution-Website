import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4 gap-8">
        {/* Logo & Shop Info */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <img
              src="/favicon.svg"
              alt="Rohit-ESolution Logo"
              className="w-10 h-10 mr-2 rounded-full bg-white p-1 shadow"
            />
            <span className="font-bold text-xl tracking-wide">Rohit-ESolution</span>
          </div>
          <div className="text-sm mb-1">
            Address: Unnamed Road, Jharna Tola, Nanda Nagar,<br />
            Gorakhpur, Uttar Pradesh 273008
          </div>
          <div className="text-sm mb-1">Open: 9am - 8pm</div>
          <a
            href="https://maps.app.goo.gl/LTpZJWJ1xXuiwD3E6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-2 text-blue-200 hover:text-white underline"
          >
            <img
              src="https://gimgs2.nohat.cc/thumb/f/640/svg-pin-map--freesvgorg50742.jpg"
              alt="Google Maps"
              className="w-5 h-5 mr-1"
            />
            View on Google Maps
          </a>
          {/* Social Media Links */}
          <div className="flex gap-3 mt-4">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400 transition"
              title="Facebook"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-300 transition"
              title="Twitter X"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 0h-20.324c-.995 0-1.838.843-1.838 1.838v20.324c0 .995.843 1.838 1.838 1.838h20.324c.995 0 1.838-.843 1.838-1.838v-20.324c0-.995-.843-1.838-1.838-1.838zm-5.59 7.548l-2.568 3.646 2.568 3.646h-1.646l-2.568-3.646-2.568 3.646h-1.646l2.568-3.646-2.568-3.646h1.646l2.568 3.646 2.568-3.646h1.646z"/></svg>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 transition"
              title="Instagram"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col gap-2 mt-6 md:mt-0">
          <span className="font-semibold mb-1">Quick Links</span>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
        {/* Embedded Google Map */}
        <div className="mt-6 md:mt-0">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Unnamed+Road,+Jharna+Tola,+Nanda+Nagar,+Gorakhpur,+Uttar+Pradesh+273008&output=embed"
            width="250"
            height="120"
            style={{ border: 0, borderRadius: '0.75rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-blue-800 pt-4 text-center text-xs text-blue-200">
        &copy; {new Date().getFullYear()} Rohit-ESolution. All rights reserved.
      </div>
    </footer>
  );
}
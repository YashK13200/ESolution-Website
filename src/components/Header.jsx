import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-blue-600">Rohit-ESolutions</Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-medium hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`
              }
              end
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              onClick={() => setOpen(false)}
              end
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
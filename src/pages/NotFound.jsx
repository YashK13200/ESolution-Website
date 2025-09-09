import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">404</h1>
      <p className="mb-4 text-gray-600">Page not found.</p>
      <Link to="/" className="text-blue-600 hover:underline">Go to Home</Link>
    </div>
  );
}
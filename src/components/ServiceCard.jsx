import React from 'react';

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition">
      <div className="text-4xl mb-3">{icon}</div>
      <div className="font-semibold text-lg mb-2">{title}</div>
      <div className="text-gray-600 text-center">{description}</div>
    </div>
  );
}
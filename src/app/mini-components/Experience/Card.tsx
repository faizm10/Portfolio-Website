// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  role: string;
  period: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, role, period, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-xl text-black font-semibold">{title}</h3>
      <h4 className="text-md text-gray-500">{role}</h4>
      <p className="text-sm text-gray-700">{period}</p>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;

// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="mb-8 p-4 bg-white rounded-lg shadow-md text-center">
      <h3 className="text-3xl font-semibold text-gray-700 mb-3">{title}</h3>
      <p className="text-black">{content}</p>
    </div>
  );
};

export default Card;

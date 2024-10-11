import React from 'react';

const ResultCard = ({ title, description }) => {
  return (
    <div className="p-6 text-center bg-gray-800 rounded-lg shadow-md">
      <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full"></div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default ResultCard;

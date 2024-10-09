import React from 'react';

const Card = ({ title }) => {
  return (
    <div className="bg-blue-500 p-4 rounded-md text-white">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-sm">Lorem ipsum proesent</p>
    </div>
  );
};

export default Card;

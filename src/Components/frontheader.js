import React from 'react';

const Header = () => {
  return (
    <header className="bg-indigo-900 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">Neurogen Imaging</div>
      <div className="flex items-center">
        <div className="text-white">Vaibhav Bagekari</div>
        <div className="ml-4">
          <button className="p-2 bg-white rounded-full">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

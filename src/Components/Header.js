import React from 'react';

const Header = ({ logo, username }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 shadow-lg">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-3xl font-bold text-white">AI Image Generator</h1>
      </div>
      <div className="flex items-center">
        <span className="mr-2 font-semibold text-white">{username}</span>
        <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
          {/* Placeholder for profile icon */}
          <span className="text-white">👤</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

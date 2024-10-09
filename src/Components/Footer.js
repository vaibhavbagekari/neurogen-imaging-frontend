import React from 'react';
import logo from '../Assets/Blacklogo.png';

function Footer() {
  return (
    <>
      <div className="border-b-2 text-primary-dark">
        <div className="font-bold flex flex-wrap justify-center bg-gray-700 gap-4 rounded-t-2xl py-8">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-80" />

          {/* Quick Links Section */}
          <div className="w-full md:w-[33%] text-center">
            <h1 className="self-center text-2xl relative inline-block mb-4">
              Quick Links
              <span className="block h-1 bg-secondary-light transition-all duration-300 ease-in-out scale-x-0 origin-left hover:scale-x-100"></span>
            </h1>
            <ul>
              <li className="hover:text-secondary-light">Home</li>
              <li className="hover:text-secondary-light">About</li>
              <li className="hover:text-secondary-light">Login</li>
              <li className="hover:text-secondary-light">Terms & Conditions</li>
            </ul>
          </div>

          {/* Milestone Software Section */}
          <div className="w-full md:w-[33%] text-center">
            <h1 className="self-center text-2xl relative inline-block mb-4">
              Milestone Software
              <span className="block h-1 bg-secondary-light transition-all duration-300 ease-in-out scale-x-0 origin-left hover:scale-x-100"></span>
            </h1>
            <p>
              <i className="fa-solid fa-circle-phone" /> +91 256762178
            </p>
            <p>bagekariv@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="flex text-sm text-primary-dark flex-wrap-reverse p-1 justify-center gap-6 items-center bg-gray-800 py-4">
        <p>
          Copyright <i className="fa-regular fa-copyright"></i> 2024
        </p>
        <p>Milestone Software Solution</p>
      </div>
    </>
  );
}

export default Footer;

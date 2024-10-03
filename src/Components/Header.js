import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../Constants/Routes';
import logo from '../Assets/hLogo.png';

const Header = () => {
  const [location, setLocation] = useState("PUBLIC");
  const menuOptions = routes.MENU_OPTIONS[location] || {};
  const [isVisible, setIsVisible] = useState(true); // To track header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // To track the last scroll position

  // Function to control the visibility of the header
  const controlHeader = () => {
    const currentScrollY = window.scrollY;

    // Only show the header when scrolling up and hide it when scrolling down
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // User is scrolling down and has scrolled more than 100px
      setIsVisible(false);
    } else {
      // User is scrolling up
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`backdrop-blur-xl bg-black/5 fixed w-full flex justify-center py-4 border-gray-700 border-b-[0.1px] transition-transform ease-in-out duration-500 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <NavLink to="/home">
        <img src={logo} alt="Logo" className="w-[180px] absolute left-0 top-0 m-2 mx-8" />
      </NavLink>
      <nav className="  w-max flex gap-6 text-md text-right px-4">
        {Object.entries(menuOptions).map(([label, route], key) => (
          <NavLink to={route} key={key} className={({ isActive }) =>
            `dark:text-primary-dark text-primary-light hover:text-secondary-light ${isActive ? 'dark:text-primary-light ' : ' '}` // Apply active color
          }>
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Header;

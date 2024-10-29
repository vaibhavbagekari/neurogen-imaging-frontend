import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../Constants/Routes';
import logo from '../Assets/hLogo.png';
import useTheme from '../Context/ThemeContext';
import { getUser, removeCookie, setUser } from '../Utils/user';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // To track header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // To track the last scroll position
  const [menuOptions, setMenuOptions] = useState(routes.MENU_OPTIONS["PUBLIC"])

 
  const onChangeBtn = (e) => {
    const darkModestatus = e.currentTarget.checked
    if (darkModestatus) {
      darkTheme();
    }
    else {
      lightTheme()
    }
  }

  const { themeMode, lightTheme, darkTheme } = useTheme()

  const controlHeader = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
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
    <>
      <div
        className={`backdrop-blur-xl bg-black/5 fixed w-full flex justify-center py-4 h-14 border-gray-700 border-b-[0.1px] transition-transform ease-in-out duration-500 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <NavLink to={menuOptions.Home}>
          <img src={logo} alt="Logo" className="w-[180px] absolute left-0 top-0 m-2 mx-8" />
        </NavLink>
        <nav className=" hidden  w-max md:flex gap-6 text-md text-right px-4">
          {Object.entries(menuOptions).map(([label, route], key) => (
            <NavLink to={route} key={key} className={({ isActive }) =>
              `dark:text-primary-dark hover:text-secondary-light ${isActive ? 'text-primary-light dark:text-primary-light' : ' '}` // Apply active color
            }>
              {label}
            </NavLink>
          ))}
          <label className=" absolute right-0 mr-3 inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={onChangeBtn}
              checked={themeMode === "dark"}
            />
            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-0 dark:peer-focus:ring-primary-light rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-primary-light dark:after:bg-slate-600 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-light"></div>
            <span className="ml-3 text-sm font-medium dark:text-white" >{themeMode} Theme</span>
          </label>
        </nav>
      </div>
    </>
  );
};

export default Header;

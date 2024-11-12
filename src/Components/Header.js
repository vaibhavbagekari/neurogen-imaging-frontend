import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../Constants/Routes";
import logo from "../Assets/hLogo.png";
import useTheme from "../Context/ThemeContext";
import { UserContext } from "../Context";
import { CiDark, CiLight } from "react-icons/ci";
import UserProfileBadge from "../Common/UserProfileBadge";
import LogOutButton from "../Common/LogOutButton";
import { FaRegUserCircle } from "react-icons/fa";
import { getInitials } from "../Utils";

const Header = () => {
  const { user } = useContext(UserContext);
  const [isVisible, setIsVisible] = useState(true); // To track header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // To track the last scroll position
  const [menuOptions, setMenuOptions] = useState(routes.MENU_OPTIONS["PUBLIC"]);
  const [isShowProfile, setIsShowProfile] = useState(false);
  const initials = getInitials(user?.full_name);
  const onChangeBtn = (e) => {
    const darkModestatus = e.currentTarget.checked;
    if (darkModestatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  const toggleProfileShow = () => {
    setIsShowProfile(!isShowProfile);
  };

  const { themeMode, lightTheme, darkTheme } = useTheme();

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
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (user) {
      setMenuOptions(routes.MENU_OPTIONS["LOGIN"]);
    }
    else{
      setMenuOptions(routes.MENU_OPTIONS["PUBLIC"]);
    }
  }, [user]);
  return (
    <>
      <div
        className={`backdrop-blur-xl bg-black/5 fixed w-full flex justify-center py-4 h-14 border-gray-700 border-b-[0.1px] transition-transform ease-in-out duration-500 z-50 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <NavLink to={menuOptions.Home}>
          <img
            src={logo}
            alt="Logo"
            className="w-[180px] absolute left-0 top-0 m-2 mx-8"
          />
        </NavLink>
        <nav className=" hidden  w-max md:flex gap-6 text-md text-right px-4">
          {Object.entries(menuOptions).map(([label, route], key) => (
            <NavLink
              to={route}
              key={key}
              className={
                ({ isActive }) =>
                  `dark:text-primary-dark hover:text-secondary-light ${
                    isActive
                      ? "text-primary-light dark:text-primary-light"
                      : " "
                  }` 
              }
            >
              {label}
            </NavLink>
          ))}
          {user && user.full_name && user.email  && (
            <div className="absolute right-14 top-2">
              <div className="w-fit px-2 py-1.5 rounded-md bg-primary-light cursor-pointer"  onClick={toggleProfileShow}>
                    <p className="font-semibold text-amber-900">{initials}</p>
                </div>
              {isShowProfile && (
                <div className=" absolute p-3 mt-3 -right-full rounded-md  bg-slate-400">
                  <span className="h-4 absolute w-4 bg-slate-400 rotate-45 right-9 -top-2"></span>
                  <UserProfileBadge name={user.full_name} email={user.email} />
                  <span className="flex w-full justify-end p-2 mt-2">
                    Log out <LogOutButton />
                  </span>
                </div>
              )}
            </div>
          )}
          <label className=" absolute right-0 mr-3 inline-flex text-lg items-center text-black dark:text-white cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={onChangeBtn}
              checked={themeMode === "dark"}
            />
            {themeMode === "light" ? (
              <CiDark size={25} />
            ) : (
              <CiLight size={25} />
            )}
          </label>
        </nav>
      </div>
    </>
  );
};

export default Header;

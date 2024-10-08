import React, { useEffect, useState } from 'react'
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';

function Layout() {
  const [themeMode, setTheme] = useState("dark");

  const lightTheme = () => {
    setTheme("light");
  }

  const darkTheme = () => {
    setTheme("dark");
  }

  useEffect(() => {
    var element = document.querySelector('html');
    element.classList.remove('dark', 'light');
    element.classList.add(themeMode);

  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout;

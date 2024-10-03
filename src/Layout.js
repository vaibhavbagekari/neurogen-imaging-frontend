import React from 'react'
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  // const element = document.querySelector('html');
  // element.classList.add('')
  return (
    <>
       <Header/>
         <Outlet/>
       <Footer/>
    </>
  )
}

export default Layout;

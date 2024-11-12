import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Public/Home';
import About from './Components/Public/About';
import Signup from './Components/Public/Signup';
import Login from './Components/Public/Login';
import { UserContextProvider } from './Context';
import { Toaster } from 'react-hot-toast';
import Spinner from './Common/Spinner';
import LandingPage from './Components/Public/LandingPage';
import { GAMING, LANDING_PAGE, SOLAR_SYSTEM } from './Constants/Routes';
import SolarSystem from './Components/Pages/SolarSystem';
import Gaming from './Components/Pages/Gaming';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='home' element={<Home/>} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path={LANDING_PAGE} element={<LandingPage />}/>
        <Route path={SOLAR_SYSTEM} element={<SolarSystem   />}/>
        <Route path={GAMING} element={<Gaming   />}/>
      </Route>
      <Route path='/signup' element={<Signup />} />
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          loading: {
            icon: <Spinner size={4} />,
          },
        }}
      />
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);


reportWebVitals();

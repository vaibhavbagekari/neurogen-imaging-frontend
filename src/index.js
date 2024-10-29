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
import ProtectedRoute from './ProtectedRouts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='home' element={<Home/>} />
        <Route path='about' element={<ProtectedRoute component={About} />} />
        <Route path='login' element={<Login />} />
      </Route>
      <Route path='/signup' element={<Signup />} />
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);


reportWebVitals();

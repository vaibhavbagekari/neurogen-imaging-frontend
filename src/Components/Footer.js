import React from 'react'
import logo from '../Assets/Blacklogo.png'
function Footer() {
  return (
    <>
      <div className='border-b-2 text-primary-dark'>
        <div className=' font-bold flex bg-gray-800 w-full h-[30vh] rounded-t-2xl'>
          <img src={logo} alt="Logo" className="mt-5 w-[340px] m-2 mx-8" />
          <div className='w-full flex max-h-full'>
            <div className='flex flex-col justify-center self-center text-center gap-3 w-[30vw] h-full '>
              <h1 className='w-36  self-center text-2xl border-b-4 border-secondary-light'>Quicks likes </h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Login</li>
                <li>term&condition</li>
              </ul>
            </div>
            <div className='flex flex-col justify-center self-center text-center gap-3 w-[30vw] h-full '>
              <h1 className=' self-center text-2xl border-b-4 border-secondary-light'>Milestone software </h1>
              <p><i  class="fa-solid fa-circle-phone"/>+91 256762178</p>
              <p>Home</p>
              <p>About</p>
              <p>term&condition</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex text-sm text-primary-dark flex-wrap-reverse p-1 justify-center gap-6 items-center'>
        <p >Copyright <i class="fa-regular fa-copyright"></i> 2024</p>
        <p >Milestone software solution</p>
      </div>
    </>
  );
}

export default Footer

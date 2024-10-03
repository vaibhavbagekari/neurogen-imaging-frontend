import React, { useState } from 'react'

function Login() {
  const [isVisible, setIsVisible] = useState(false);
  
  const floatingInputCss = {
    input: "block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-400 appearance-none dark:text-white dark:border-gray-100 border-2 dark:focus:border-primary-light focus:outline-none focus:ring-0 focus:border-primary-light peer",
    label: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-primary-light peer-focus:dark:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
  }

  const toggleType = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className='text-black dark:text-white  w-full h-[100vh] flex felx-col justify-center'>
      <div className='flex flex-col justify-center items-center h-max self-center text-center px-6  my-6 backdrop-blur-md bg-white/10 rounded-3xl'>
        <h1 className=' font-bold text-2xl my-9 md:text-5xl min-w-full m-1 p-2'>
          Login
        </h1>

        <form className='flex flex-wrap x-full  gap-2 justify-between'>

          <div className="relative w-full my-2">
            <input type="email" name="email" className={floatingInputCss.input} placeholder=" " />
            <label for="email" className={floatingInputCss.label}>Email</label>
          </div>
          <div className="relative w-full my-2">
            <input type={isVisible?"text":"password"} name="password" className={floatingInputCss.input} placeholder=" " />
            <label for="password" className={floatingInputCss.label}>Password</label>
            <div className='absolute right-3 top-2' onClick={toggleType}>
              {isVisible?<i class="fa-solid fa-eye-slash text-primary-light"></i>:<i className="fa-solid fa-eye text-primary-light"></i>}
            </div>
          </div>

          <div className='flex justify-end w-full m-2 p-1'>
            <input type="submit" value={"login"} className='px-2 py-1 rounded-md bg-primary-light' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

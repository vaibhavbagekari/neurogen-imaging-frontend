import React, { useState } from 'react'
import { signupFormData } from '../../Constants/Formdata';

function Signup() {
    const [formData, setFormData] = useState(signupFormData);
    const floatingInputCss = {
        input: "block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-400 appearance-none dark:text-white dark:border-gray-100 border-2 dark:focus:border-primary-light focus:outline-none focus:ring-0 focus:border-primary-light peer",
        label: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-primary-light peer-focus:dark:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
    }
    return (
        <>
            <div className='text-black dark:text-white  w-full h-[100vh] flex felx-col justify-center dark:bg-img-logo '>
                <div className='flex flex-col items-center max-h-max w-[90vw] bg-white dark:shadow-neumorphismDark md:w-[70vw] self-center text-center px-6 shadow-neumorphism rounded-lg  my-6 dark:bg-black/90 backdrop-blur-xl'>
                    <h1 className=' font-bold text-2xl mt-9 md:text-5xl min-w-full m-1 p-2'>
                        Create Your New NeuroGen Account
                    </h1>
                    <h2 className='my-2'>
                        One Neurogen account is all you need to access all neurogen service
                    </h2>
                    <form className='flex flex-wrap x-full md:w-[70%]  gap-2 justify-between '>
                        <div className="relative w-full md:w-[49%] my-2">
                            <input type="text" name="Firstname" className={floatingInputCss.input} placeholder=" " />
                            <label htmlFor="Firstname" className={floatingInputCss.label}>First Name</label>
                        </div>
                        <div className="relative w-full md:w-[49%] my-2">
                            <input type="text" name="Lastname" className={floatingInputCss.input} placeholder=" " />
                            <label htmlFor="Lastname" className={floatingInputCss.label}>Last Name</label>
                        </div>
                        <div className="relative w-full">
                            <h2 className='flex justify-start mb-2'>Country/Region</h2>
                            <select name="countries" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>India</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>

                        </div>

                        <div className="relative w-full my-2">
                            <input type="date" name="birthday" className={floatingInputCss.input} placeholder="" />
                            <label htmlFor="bithday" className={floatingInputCss.label}>Birtday</label>
                        </div>
                        <div className="relative w-full my-2">
                            <input type="email" name="email" className={floatingInputCss.input} placeholder=" " />
                            <label htmlFor="email" className={floatingInputCss.label}>Email</label>
                        </div>

                        <h2 className='w-full text-left'> This will be your new neurogen Accounte</h2>

                        <div className="relative w-full md:w-[49%] my-2">
                            <input type="password" name="password" className={floatingInputCss.input} placeholder=" " />
                            <label htmlFor="password" autoCapitalize='false' className={floatingInputCss.label}>Password</label>
                        </div>
                        <div className="relative w-full md:w-[49%] my-2">
                            <input type="password" name="confirmPassword" className={floatingInputCss.input} placeholder=" " />
                            <label htmlFor="confirmPassword" autoCapitalize='false' className={floatingInputCss.label}>Confirm Password</label>
                        </div>
                        <div className=''>
                            verify with :
                            <input type='radio' name="otp" className="h-4 w-4 bottom-0 mx-3  border border-gray-300 rounded-full checked:bg-primary-light checked:ring-0 focus:outline-none focus:ring-0 focus:ring-offset-1 focus:ring-primary-light relative appearance-none"/>
                            Email OTP
                        </div>
                        <div className=''>
                            <div className='flex'> 
                                <input type='checkbox' name='permition' className='appearance-none h-3 w-3 border m-1  checked:bg-yellow-500 focus:outline-none focus:ring-1  ' />
                                <h3 className='flex justify-start self-start px-3'>
                                    Announcement
                                </h3>
                            </div>
                            <p className='text-xs text-left pl-7 '>Receive neurogen email and communication including Announcements, Marketing, Reccomdations and updates about Neurogen product,service and software</p>

                        </div>
                        <div className='flex justify-end w-full m-2 p-1'>
                            <input type="submit" value={"Submit"} className='px-2 py-1 rounded-md bg-primary-light' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup

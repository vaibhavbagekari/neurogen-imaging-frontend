import React, { useState } from 'react';
import { signupFormData } from '../../Constants/Formdata';
import { signup } from '../../Services/UserServices';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../Constants/Routes';

function Signup() {
    const [formData, setFormData] = useState(signupFormData);
    const Navigate = useNavigate()
    const floatingInputCss = {
        input: "block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-400 appearance-none dark:text-white dark:border-gray-100 border-2 dark:focus:border-primary-light focus:outline-none focus:ring-0 focus:border-primary-light peer",
        label: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-primary-light peer-focus:dark:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signup(formData);
            if( response.data ){
                toast.success('Signup successful:');
                Navigate(LOGIN)
            }
        } catch (error) {
            toast.error('Error during signup:');
        }
    };

    return (
        <div className='text-black dark:text-white w-full h-[100vh] flex flex-col justify-center dark:bg-img-logo'>
            <div className='flex flex-col items-center max-h-max w-[90vw] bg-white dark:shadow-neumorphismDark md:w-[70vw] self-center text-center px-6 shadow-neumorphism rounded-lg my-6 dark:bg-black/90 backdrop-blur-xl'>
                <h1 className='font-bold text-2xl mt-9 md:text-5xl min-w-full m-1 p-2'>
                    Create Your New NeuroGen Account
                </h1>
                <h2 className='my-2'>
                    One Neurogen account is all you need to access all neurogen services
                </h2>
                <form onSubmit={handleSubmit} className='flex flex-wrap x-full md:w-[70%] gap-2 justify-between'>
                    <div className="relative w-full md:w-[49%] my-2">
                        <input type="text" name="first_name" value={formData.first_name || ''} onChange={handleChange} className={floatingInputCss.input} placeholder=" " />
                        <label htmlFor="first_name" className={floatingInputCss.label}>First Name</label>
                    </div>
                    <div className="relative w-full md:w-[49%] my-2">
                        <input type="text" name="last_name" value={formData.last_name || ''} onChange={handleChange} className={floatingInputCss.input} placeholder=" " />
                        <label htmlFor="last_name" className={floatingInputCss.label}>Last Name</label>
                    </div>
                    <div className="relative w-full my-2">
                        <input type="number" name="mobile" value={formData.mobile || ''} onChange={handleChange} className={floatingInputCss.input} placeholder="" />
                        <label htmlFor="mobile" className={floatingInputCss.label}>Mobile No.</label>
                    </div>
                    <div className="relative w-full my-2">
                        <input type="date" name="birthday" value={formData.birthday || ''} onChange={handleChange} className={floatingInputCss.input} placeholder="" />
                        <label htmlFor="birthday" className={floatingInputCss.label}>Birthday</label>
                    </div>
                    <div className="relative w-full my-2">
                        <input type="email" name="email" value={formData.email || ''} onChange={handleChange} className={floatingInputCss.input} placeholder=" " />
                        <label htmlFor="email" className={floatingInputCss.label}>Email</label>
                    </div>

                    <h2 className='w-full text-left'>This will be your new NeuroGen Account</h2>

                    <div className="relative w-full md:w-[49%] my-2">
                        <input type="password" name="password" value={formData.password || ''} onChange={handleChange} className={floatingInputCss.input} placeholder=" " />
                        <label htmlFor="password" className={floatingInputCss.label}>Password</label>
                    </div>
                    <div className="relative w-full md:w-[49%] my-2">
                        <input type="password" name="confirmPassword" value={formData.confirmPassword || ''} onChange={handleChange} className={floatingInputCss.input} placeholder=" " />
                        <label htmlFor="confirmPassword" className={floatingInputCss.label}>Confirm Password</label>
                    </div>
                    
                    <div className='flex justify-end w-full m-2 p-1'>
                        <input type="submit" value="Submit" className='px-2 py-1 rounded-md bg-primary-light' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;

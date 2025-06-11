import React from 'react'

const PopUpWindow = ( {children , closeWindow=null}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50'>
        <div className='relative bg-white dark:bg-white rounded-2xl shadow-lg p-6 w-1/2 h-1/2 flex flex-col items-center justify-center'>
        {closeWindow && <div className='absolute -top-8 -right-8 m-4 cursor-pointer bg-red-500 rounded-full' onClick={closeWindow}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </div>}
            { children }
        </div>
    </div>
  )
}

export default PopUpWindow;


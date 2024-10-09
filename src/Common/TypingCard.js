import React, { useEffect, useState } from 'react';
import TypingText from './TypingText';
import TypingForwordText from './TypingForwordText';

const TypingCard = ({ text, para, imgArray, css = "", imgChange = 3000, pauseDuration }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDiscribe, setIsDiscrib] = useState(false)

  // Function to change images smoothly every few seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imgArray.length - 1 ? 0 : prevIndex + 1
      );
    }, imgChange); // Change image every 3 seconds
    return () => clearInterval(imageInterval); // Cleanup the interval
  }, [imgArray]);

  return (
    <div className={`w-[400px] shadow-neumorphism dark:shadow-neumorphismDark bg-white dark:bg-transparent p-9 rounded-xl mx-auto max-h-max ${css}`}>
      {/* Typing Text */}
      <div className="mt-6">
        <img
          src={imgArray[currentImageIndex]} // Display the current image based on index
          alt="Sliding content"
          className="w-full h-64 object-cover rounded-md transition-all duration-500 ease-in-out"
        />
      </div>
      <div className='dark:bg-gray-700 p-3 my-2 rounded-lg'>
        <TypingText text={text} css='dark:text-white' pauseDuration={pauseDuration} />
      </div>

      {/* Paragraph */}

      {isDiscribe ? 
      <p className="mt-4 text-gray-800 dark:text-gray-300 text-md">
        <button onClick={() => { setIsDiscrib(false) }} className=''> <i class="fa-solid fa-circle-pause text-balck dark:text-white text-3xl"></i> </button>
        <TypingForwordText text={para} />
      </p> : <button onClick={() => { setIsDiscrib(true) }} className='px-4 py-2 bg-gray-300 text-black font-semibold rounded-lg  hover:bg-gray-200 transition duration-300'>Discribe</button>
      }


      {/* Image with smooth transition */}
    </div>
  );
};

export default TypingCard;

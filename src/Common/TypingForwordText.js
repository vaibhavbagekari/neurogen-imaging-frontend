import React, { useState, useEffect } from "react";

const TypingForwordText = ({text, css=""}) => {
  const [displayedText, setDisplayedText] = useState(""); // State to hold the current displayed text
  const [index, setIndex] = useState(0); // To track the current character index
  const typingSpeed = 200; // Typing speed in milliseconds

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index)); // Update the displayed text by adding one character at a time
        setIndex((prev) => prev + 1); // Move to the next character
      }, typingSpeed);
      return () => clearTimeout(timeout); // Clean up timeout to avoid memory leaks
    }
  }, [index, text]); // Re-run effect when the index changes

  return (
    <div className={css}>
      {displayedText}
      {/* Optional blinking cursor */}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingForwordText;

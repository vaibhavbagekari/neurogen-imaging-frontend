import React, { useState, useEffect } from "react";

const TypingText = ({text, css="", pauseDuration=1500}) => {
  const [displayedText, setDisplayedText] = useState(""); // State to hold the current displayed text
  const [index, setIndex] = useState(0); // To track the current character index
  const [isDeleting, setIsDeleting] = useState(false); // To determine whether the text is being typed or deleted
  const typingSpeed = isDeleting ? 50 : 100; // Faster speed when deleting

  useEffect(() => {
    if (index < text.length && !isDeleting) {
      // Typing text
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index)); // Add one character at a time
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout); // Cleanup
    } else if (index === text.length && !isDeleting) {
      // Pause after typing
      setTimeout(() => {
        setIsDeleting(true); // Start deleting after a pause
      }, pauseDuration);
    } else if (isDeleting && index > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1)); // Remove one character at a time
        setIndex((prev) => prev - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout); // Cleanup
    } else if (isDeleting && index === 0) {
      // Once deletion is complete, start typing again
      setIsDeleting(false);
    }
  }, [index, isDeleting, text, typingSpeed]);

  return (
    <div className={css}>
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingText;

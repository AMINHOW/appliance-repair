"use client";
import React, { useEffect, useRef, useState } from 'react';

interface TypewriterProps {
  phrases: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ phrases }) => {
  const [currentText, setCurrentText] = useState('');
  const [curPhraseIndex, setCurPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const sleepTime = 100; // Typing speed
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentPhrase = phrases[curPhraseIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // Deleting effect
        setCurrentText((prev) => prev.slice(0, prev.length - 1));

        if (currentText.length === 1) {
          setIsDeleting(false);
          setCurPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      } else {
        // Typing effect
        setCurrentText((prev) => currentPhrase.slice(0, prev.length + 1));

        if (currentText.length === currentPhrase.length) {
          // Switch to deleting after a pause
          setTimeout(() => setIsDeleting(true), 3000);
        }
      }
    };

    typingRef.current = setTimeout(handleTyping, sleepTime);

    return () => {
      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
    };
  }, [currentText, curPhraseIndex, isDeleting, phrases]);

  return (
    <>
      <span>{currentText}</span>
      <span className='text-white leading-3 font-thin  animate-[blink_1s_linear_infinite]'>|</span>
    </>
  );
};

export default Typewriter;
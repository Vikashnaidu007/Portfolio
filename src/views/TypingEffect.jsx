import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts, speed = 100, eraseSpeed = 50, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) {
      setIndex(0);
      return;
    }

    if (subIndex === texts[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), delay);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length); // Loop through texts
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? eraseSpeed : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, texts, speed, eraseSpeed, delay]);

  useEffect(() => {
    setDisplayedText(texts[index].substring(0, subIndex));
  }, [subIndex, index, texts]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;

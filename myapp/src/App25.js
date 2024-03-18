import React, { useRef } from 'react';

export default function App25() {
  const divRef = useRef(null);
  const handleColorChange = () => {
    divRef.current.style.backgroundColor = 'green';
    divRef.current.style.color="white";
  };
  return (
    <div ref={divRef}>
      <p>Hello! Welcome to Mars</p>
      <button onClick={handleColorChange}>Click</button>
    </div>
  );
};
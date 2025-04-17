
import React, { useState } from 'react';

const DumpButton = () => {
  const [hover, setHover] = useState(false);

  const style = {
    backgroundColor: '#0d1117',
    border: '2px solid #ff4444',
    borderRadius: '8px',
    color: '#ff4444',
    padding: '12px 24px',
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    boxShadow: hover ? '0 0 15px #ff444499' : '0 0 10px #ff444477',
    outline: 'none',
  };

  return (
    <button
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Dump
    </button>
  );
};

export default DumpButton;

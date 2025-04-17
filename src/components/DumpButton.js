
import React, { useState } from 'react';

const DumpButton = () => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {{
    backgroundColor: '#0d1117',
    border: '2px solid #00ff99',
    borderRadius: '8px',
    color: '#00ff99',
    padding: '12px 24px',
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    boxShadow: hover ? '0 0 15px #00ffaa99' : '0 0 10px #00ff9977',
    outline: 'none',
  }};

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Dump
    </button>
  );
};

export default DumpButton;

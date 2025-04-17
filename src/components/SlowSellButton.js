
import React, { useState } from 'react';

const SlowSellButton = () => {
  const [hover, setHover] = useState(false);

  const style = {
    backgroundColor: '#0d1117',
    border: '2px solid #ffaa00',
    borderRadius: '8px',
    color: '#ffaa00',
    padding: '12px 24px',
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    boxShadow: hover ? '0 0 15px #ffaa0099' : '0 0 10px #ffaa0077',
    outline: 'none',
  };

  return (
    <button
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Slow Sell
    </button>
  );
};

export default SlowSellButton;

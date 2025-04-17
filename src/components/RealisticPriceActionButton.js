
import React from 'react';

const RealisticPriceActionButton = () => {
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
    boxShadow: '0 0 10px #00ff9977',
    outline: 'none',
  }};

  const hoverStyle = {{
    backgroundColor: '#0d1117',
    border: '2px solid #00ffaa',
    boxShadow: '0 0 15px #00ffaa99',
  }};

  const [hover, setHover] = React.useState(false);

  return (
    <button
      style={hover ? {{ ...buttonStyle, ...hoverStyle }} : buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Realistic Price Action
    </button>
  );
}};

export default RealisticPriceActionButton;

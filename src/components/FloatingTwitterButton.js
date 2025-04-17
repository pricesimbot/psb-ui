
import React from 'react';

const FloatingTwitterButton = () => {
  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#1da1f2',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    boxShadow: '0 0 12px #1da1f2cc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 1000
  };

  const iconStyle = {
    color: 'white',
    fontSize: '24px',
    textDecoration: 'none'
  };

  return (
    <a href="https://twitter.com/pricesimbot" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
      <span style={iconStyle}>𝕏</span>
    </a>
  );
};

export default FloatingTwitterButton;

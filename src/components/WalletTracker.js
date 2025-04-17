
import React from 'react';

const WalletTracker = () => {
  const boxStyle = {
    backgroundColor: '#161b22',
    color: '#f0f6fc',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #30363d',
    boxShadow: '0 0 10px #1f6feb55',
    fontSize: '18px',
    marginBottom: '30px',
    textAlign: 'center',
    width: '100%',
    maxWidth: '400px'
  };

  return (
    <div style={boxStyle}>
      Total Wallet Investment: <strong>128.6 SOL</strong>
    </div>
  );
};

export default WalletTracker;

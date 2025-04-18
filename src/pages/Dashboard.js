
import React, { useState } from 'react';
import BullRunButton from '../components/BullRunButton';
import RealisticPriceActionButton from '../components/RealisticPriceActionButton';
import DumpButton from '../components/DumpButton';
import SlowSellButton from '../components/SlowSellButton';
import WalletTracker from '../components/WalletTracker';
import ChartSimulator from '../components/ChartSimulator';

const Dashboard = () => {
  const [tokenAddress, setTokenAddress] = useState('');
  const [targetedToken, setTargetedToken] = useState('');

  const containerStyle = {
    backgroundColor: '#0d1117',
    color: '#f0f6fc',
    minHeight: '100vh',
    padding: '40px 20px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
  };

  const inputRow = {
    display: 'flex',
    gap: '10px',
    marginBottom: '30px',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #30363d',
    backgroundColor: '#0d1117',
    color: '#f0f6fc',
    width: '300px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#238636',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  const buttonContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Price Simulator Dashboard</h1>

      <div style={inputRow}>
        <input
          type="text"
          placeholder="Enter Token Address"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
          style={inputStyle}
        />
        <button style={buttonStyle} onClick={() => setTargetedToken(tokenAddress)}>
          Target Token
        </button>
      </div>

      {targetedToken && (
        <p>Now targeting: <strong>{targetedToken}</strong></p>
      )}

      <WalletTracker />
      <div style={buttonContainer}>
        <BullRunButton />
        <RealisticPriceActionButton />
        <DumpButton />
        <SlowSellButton />
      </div>
      <ChartSimulator />
    </div>
  );
};

export default Dashboard;

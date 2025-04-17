
import React from 'react';
import BullRunButton from '../components/BullRunButton';
import RealisticPriceActionButton from '../components/RealisticPriceActionButton';
import DumpButton from '../components/DumpButton';
import SlowSellButton from '../components/SlowSellButton';
import WalletTracker from '../components/WalletTracker';
import FloatingTwitterButton from '../components/FloatingTwitterButton';

const Dashboard = () => {
  const containerStyle = {
    backgroundColor: '#0d1117',
    color: '#f0f6fc',
    minHeight: '100vh',
    padding: '40px 20px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#161b22',
    border: '1px solid #58a6ff',
    borderRadius: '8px',
    color: '#58a6ff',
    padding: '10px 16px',
    margin: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: '0.2s',
    boxShadow: '0 0 8px #58a6ff55',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const walletTrackerBox = {
    border: '1px solid #30363d',
    borderRadius: '10px',
    padding: '15px 20px',
    backgroundColor: '#161b22',
    boxShadow: '0 0 10px #1f6feb55',
    fontSize: '18px',
    marginBottom: '30px',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  };

  const footerStyle = {
    marginTop: '40px',
    fontSize: '14px',
    color: '#8b949e',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Price Simulator Dashboard</h1>
      <div style={walletTrackerBox}>
        <WalletTracker />
      </div>
      <div style={buttonContainerStyle}>
        <div style={buttonStyle}><BullRunButton /></div>
        <div style={buttonStyle}><RealisticPriceActionButton /></div>
        <div style={buttonStyle}><DumpButton /></div>
        <div style={buttonStyle}><SlowSellButton /></div>
      </div>
      <FloatingTwitterButton />
      <div style={footerStyle}>Powered by pricesimbot.sol</div>
    </div>
  );
};

export default Dashboard;

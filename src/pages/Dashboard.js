
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
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '30px',
  };

  const poweredByStyle = {
    textAlign: 'center',
    marginTop: '60px',
    fontSize: '14px',
    color: '#8b949e',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Price Simulator Dashboard</h1>
      <WalletTracker />
      <div style={buttonContainerStyle}>
        <BullRunButton />
        <RealisticPriceActionButton />
        <DumpButton />
        <SlowSellButton />
      </div>
      <FloatingTwitterButton />
      <div style={poweredByStyle}>Powered by pricesimbot.sol</div>
    </div>
  );
};

export default Dashboard;

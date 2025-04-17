
import React from 'react';
import BullRunButton from '../components/BullRunButton';
import RealisticPriceActionButton from '../components/RealisticPriceActionButton';
import DumpButton from '../components/DumpButton';
import SlowSellButton from '../components/SlowSellButton';
import WalletTracker from '../components/WalletTracker';

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
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
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
      <WalletTracker />
      <div style={buttonContainer}>
        <BullRunButton />
        <RealisticPriceActionButton />
        <DumpButton />
        <SlowSellButton />
      </div>
    </div>
  );
};

export default Dashboard;


import React from 'react';
import BullRunButton from '../components/BullRunButton';
import RealisticPriceActionButton from '../components/RealisticPriceActionButton';
import DumpButton from '../components/DumpButton';
import SlowSellButton from '../components/SlowSellButton';
import WalletTracker from '../components/WalletTracker';
import FloatingTwitterButton from '../components/FloatingTwitterButton';

const Dashboard = () => {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Price Simulator Dashboard</h1>
      <WalletTracker />
      <div style={{ marginTop: 20 }}>
        <BullRunButton />
        <RealisticPriceActionButton />
        <DumpButton />
        <SlowSellButton />
      </div>
      <FloatingTwitterButton />
    </div>
  );
};

export default Dashboard;


import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const container = {
    backgroundColor: '#0d1117',
    color: '#f0f6fc',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    padding: '0 20px'
  };

  const headline = {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#58a6ff',
  };

  const subtext = {
    fontSize: '18px',
    color: '#c9d1d9',
    maxWidth: '600px',
    marginBottom: '30px'
  };

  const ctaButton = {
    backgroundColor: '#238636',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: '0 0 10px #2ea04388'
  };

  const footer = {
    marginTop: '50px',
    fontSize: '14px',
    color: '#8b949e'
  };

  return (
    <div style={container}>
      <div style={headline}>Simulate Real Token Price Action</div>
      <div style={subtext}>
        This powerful tool creates real price action on the Solana blockchain for your newly launched token.
        Generate wallets, simulate live trading, and make your chart look organic to attract real investors.
      </div>
      <Link to="/dashboard" style={ctaButton}>Launch Simulator</Link>
      <div style={footer}>Powered by pricesimbot.sol</div>
    </div>
  );
};

export default Home;

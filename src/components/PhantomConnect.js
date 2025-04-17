
import React, { useEffect, useState } from 'react';

const PhantomConnect = ({ onConnect }) => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [publicKey, setPublicKey] = useState('');

  const connectWallet = async () => {
    try {
      const resp = await window.solana.connect();
      setWalletConnected(true);
      setPublicKey(resp.publicKey.toString());
      if (onConnect) onConnect(resp.publicKey.toString());
    } catch (err) {
      console.error('Wallet connection failed:', err);
    }
  };

  useEffect(() => {
    if (window.solana && window.solana.isPhantom) {
      window.solana.on('connect', () => setWalletConnected(true));
    }
  }, []);

  return (
    <button
      onClick={connectWallet}
      style={{
        marginBottom: '20px',
        backgroundColor: '#9945FF',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      {walletConnected ? `Connected: ${publicKey.slice(0, 4)}...${publicKey.slice(-4)}` : 'Connect Phantom'}
    </button>
  );
};

export default PhantomConnect;

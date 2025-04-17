
import React, { useState } from 'react';
import PhantomConnect from '../components/PhantomConnect';

const sendSol = async (amount) => {
  try {
    const recipient = '25rmcNVSYfMeH7wYV2Q42oA7N83GiMVjBgfKR9XSP3Tc';
    const provider = window.solana;
    if (!provider?.isPhantom) throw new Error('Phantom wallet not found');

    const connection = new window.solanaWeb3.Connection(window.solanaWeb3.clusterApiUrl('mainnet-beta'), 'confirmed');
    const fromPubkey = provider.publicKey;
    const toPubkey = new window.solanaWeb3.PublicKey(recipient);
    const transaction = new window.solanaWeb3.Transaction().add(
      window.solanaWeb3.SystemProgram.transfer({
        fromPubkey,
        toPubkey,
        lamports: amount * window.solanaWeb3.LAMPORTS_PER_SOL
      })
    );
    const { blockhash } = await connection.getRecentBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = fromPubkey;
    const signed = await provider.signTransaction(transaction);
    const signature = await connection.sendRawTransaction(signed.serialize());
    await connection.confirmTransaction(signature);
    alert('Payment successful! TX: ' + signature);
  } catch (err) {
    alert('Payment failed: ' + err.message);
  }
};

const Pricing = () => {
  const pageStyle = {
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
  };

  const plansContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const cardStyle = {
    backgroundColor: '#161b22',
    border: '1px solid #30363d',
    borderRadius: '10px',
    padding: '20px',
    width: '280px',
    textAlign: 'center',
    boxShadow: '0 0 10px #1f6feb55',
  };

  const buttonStyle = {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#238636',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    boxShadow: '0 0 8px #2ea04388',
  };

  return (
    <div style={pageStyle}>
      <div style={titleStyle}>Choose Your Plan</div>
      <PhantomConnect />
      <div style={plansContainer}>
        <div style={cardStyle}>
          <h3>Trial</h3>
          <p>0.3 SOL</p>
          <p>Access to 25 wallets</p>
          <button style={buttonStyle} onClick={() => sendSol(0.3)}>Pay with Wallet</button>
        </div>
        <div style={cardStyle}>
          <h3>Monthly</h3>
          <p>1 SOL/month</p>
          <p>Access to 100 wallets</p>
          <button style={buttonStyle} onClick={() => sendSol(1)}>Pay with Wallet</button>
        </div>
        <div style={cardStyle}>
          <h3>Enterprise</h3>
          <p>3 SOL/month</p>
          <p>Access to 250 wallets</p>
          <button style={buttonStyle} onClick={() => sendSol(3)}>Pay with Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

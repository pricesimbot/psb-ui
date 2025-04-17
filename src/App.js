
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pricing from './pages/Pricing';

const Home = () => (
  <div style={{
    backgroundColor: '#0d1117',
    color: '#f0f6fc',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  }}>
    Welcome to Price Simulator Bot
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;

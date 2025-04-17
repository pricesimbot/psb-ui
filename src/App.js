
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import FloatingTwitterButton from './components/FloatingTwitterButton';

const Navbar = () => (
  <div style={{
    backgroundColor: '#161b22',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #30363d'
  }}>
    <div style={{ fontWeight: 'bold', color: '#58a6ff' }}>
      PriceSimBot
    </div>
    <div style={{ display: 'flex', gap: '20px' }}>
      <Link to="/" style={{ color: '#f0f6fc', textDecoration: 'none' }}>Home</Link>
      <Link to="/pricing" style={{ color: '#f0f6fc', textDecoration: 'none' }}>Pricing</Link>
      <Link to="/dashboard" style={{ color: '#f0f6fc', textDecoration: 'none' }}>Dashboard</Link>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <FloatingTwitterButton />
    </Router>
  );
}

export default App;

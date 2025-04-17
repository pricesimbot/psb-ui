
import React from 'react';

const ChartSimulator = () => {
  const container = {
    backgroundColor: '#161b22',
    border: '1px solid #30363d',
    borderRadius: '10px',
    padding: '20px',
    marginTop: '30px',
    width: '100%',
    maxWidth: '700px',
    boxShadow: '0 0 10px #1f6feb55',
    textAlign: 'center',
  };

  const header = {
    fontSize: '18px',
    marginBottom: '15px',
    color: '#58a6ff'
  };

  const chartBox = {
    height: '250px',
    backgroundColor: '#0d1117',
    borderRadius: '6px',
    border: '1px dashed #30363d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#8b949e',
    fontStyle: 'italic',
  };

  const zoomControls = {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  };

  const zoomButton = {
    backgroundColor: '#21262d',
    border: '1px solid #30363d',
    color: '#c9d1d9',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={container}>
      <div style={header}>Simulated Price Chart</div>
      <div style={chartBox}>[Chart Visualization Placeholder]</div>
      <div style={zoomControls}>
        <button style={zoomButton}>Zoom In</button>
        <button style={zoomButton}>Zoom Out</button>
      </div>
    </div>
  );
};

export default ChartSimulator;

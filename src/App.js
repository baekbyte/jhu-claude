import React, { useState, useEffect } from 'react';
import './App.css';
import Terminal from './components/Terminal';

function App() {
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    // Simulate system boot
    setTimeout(() => setIsBooted(true), 2500);
  }, []);

  return (
    <div className={`app ${isBooted ? 'booted' : ''}`}>
      {!isBooted ? (
        <div className="boot-screen">
          <div className="boot-text">
            <div className="boot-line">claude@jhu: Initializing builder community...</div>
            <div className="boot-line delay-1">claude@jhu: Loading member profiles...</div>
            <div className="boot-line delay-2">claude@jhu: Connecting to project database...</div>
            <div className="boot-line delay-3">claude@jhu: Terminal ready ✓</div>
          </div>
        </div>
      ) : (
        <Terminal />
      )}
    </div>
  );
}

export default App;

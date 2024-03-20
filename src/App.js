import logo from './dino.png';
import './App.css';
import React from 'react';
import AdSense from 'react-adsense';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dino's Web
        </p>
      </header>
      <AdSense.Google
        client='ca-pub-150141917050715'  // Replace with your AdSense client ID
        slot='3960427959'      // Replace with your AdSense ad unit ID
        style={{ display: 'block' }}
        format='auto'
      />
    </div>
  );
}

export default App;

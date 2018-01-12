import React, { Component } from 'react';
import CoinCard from './components/CoinCard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Crypo Tracker</h2>
        </div>
        <CoinCard />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import CoinCards from './components/CoinCards/CoinCards';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App w-100 sans-serif">
        <div className="App-header">
          <h2 className="f2">React Crypo Tracker</h2>
        </div>
        <CoinCards />
        <Footer />
      </div>
    );
  }
}

export default App;

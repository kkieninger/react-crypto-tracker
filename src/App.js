import React, { Component } from 'react';
import Header from './components/Header/Header';
import CoinCards from './components/CoinCards/CoinCards';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App min-vh-100 w-100 sans-serif">
        <Header />
        <CoinCards />
        <Footer />
      </div>
    );
  }
}

export default App;
